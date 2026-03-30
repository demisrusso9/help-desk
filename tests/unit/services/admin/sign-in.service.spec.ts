import { InvalidCredentialsError } from '@/app/modules/admin/errors/invalid-credentials.error'
import { Role } from '@/app/modules/admin/schemas/roles'
import { SignInService } from '@/app/modules/admin/services/sign-in.service'
import { Envs } from '@/config/env'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { hash } from 'bcryptjs'
import { InMemoryUsersRepository } from 'tests/unit/in-memory-repository/in-memory-users-repository'

let usersRepository: InMemoryUsersRepository
let sut: SignInService
let jwtService: JwtService
let configService: ConfigService<Envs, true>

describe('Sign In Admin User', () => {
	beforeEach(async () => {
		usersRepository = new InMemoryUsersRepository()
		jwtService = new JwtService({} as any)
		configService = new ConfigService({} as any)

		sut = new SignInService(configService, usersRepository, jwtService)

		jwtService.sign = vi.fn().mockReturnValue('valid-access-token')
		configService.get = vi.fn().mockReturnValue('1d')

		usersRepository.users.push({
			id: '123',
			name: 'Admin',
			email: 'admin@admin.com',
			password: await hash('123456', 8),
			role: Role.ADMIN,
			createdAt: new Date(),
			mustChangePassword: false
		})
	})

	it('should sign in an admin user and return an access token', async () => {
		expect(
			await sut.execute({
				email: 'admin@admin.com',
				password: '123456'
			})
		).toEqual(
			expect.objectContaining({
				accessToken: expect.any(String)
			})
		)
	})

	it('should throw a error if password is incorrect', async () => {
		await expect(
			sut.execute({
				email: 'admin@admin.com',
				password: 'wrong-password'
			})
		).rejects.toBeInstanceOf(InvalidCredentialsError)
	})

	it('should throw a error if email is incorrect', async () => {
		await expect(
			sut.execute({
				email: 'wrong-email@admin.com',
				password: '123456'
			})
		).rejects.toBeInstanceOf(InvalidCredentialsError)
	})
})
