import { UserAlreadyExistsError } from '@/app/modules/admin/errors/user-already-exists.error'
import { RegisterAdminDTO } from '@/app/modules/admin/schemas/register.schema'
import { RegisterService } from '@/app/modules/admin/services/register.service'
import bcrypt from 'bcryptjs'
import { InMemoryUsersRepository } from 'tests/unit/in-memory-repository/in-memory-users-repository'

let usersRepository: InMemoryUsersRepository
let sut: RegisterService

describe('Register Admin User', () => {
	const adminData: RegisterAdminDTO = {
		name: 'Admin Demis',
		email: 'admin@admin.com',
		password: '123456',
		role: 'ADMIN'
	}

	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository()
		sut = new RegisterService(usersRepository)
	})

	it('should register an admin user', async () => {
		await sut.execute(adminData)

		expect(usersRepository.users).toHaveLength(1)
		expect(usersRepository.users[0].id).toBeTruthy()
		expect(usersRepository.users[0].createdAt).toBeTruthy()
	})

	it('should hash the password before saving', async () => {
		await sut.execute(adminData)

		const isPasswordHashed = await bcrypt.compare(
			'123456',
			usersRepository.users[0].password
		)

		expect(isPasswordHashed).toBe(true)
	})

	it('should not register an admin user with an existing email', async () => {
		await sut.execute(adminData)

		await expect(sut.execute(adminData)).rejects.toBeInstanceOf(UserAlreadyExistsError)
	})
})
