import { DeleteByIdService } from '@/app/modules/admin/services/delete-by-id.service'
import { UserNotFoundError } from '@/app/modules/admin/services/errors/user-not-found.error'
import { Role } from '@/app/shared/enum/roles'
import { InMemoryUsersRepository } from 'tests/unit/in-memory-repository/in-memory-users-repository'

let usersRepository: InMemoryUsersRepository
let sut: DeleteByIdService

describe('Delete Admin User by ID', () => {
	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository()
		sut = new DeleteByIdService(usersRepository)

		usersRepository.users.push({
			id: '123',
			name: 'Admin',
			email: 'admin@admin.com',
			password: '123456',
			role: Role.ADMIN,
			createdAt: new Date(),
			mustChangePassword: false
		})
	})

	it('should delete an admin user by ID', async () => {
		await sut.execute('123')

		expect(usersRepository.users).toHaveLength(0)
	})

	it('should not delete a non-existent admin user', async () => {
		await expect(sut.execute('non-existent-id')).rejects.toBeInstanceOf(UserNotFoundError)
	})
})
