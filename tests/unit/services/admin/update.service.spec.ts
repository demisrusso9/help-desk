import { UserNotFoundError } from '@/app/modules/admin/services/errors/user-not-found.error'
import { UpdateService } from '@/app/modules/admin/services/update.service'
import { UpdateAdminDTO } from '@/app/modules/technician/schemas/update.schema'
import { Role } from '@/app/shared/enum/roles'
import { InMemoryUsersRepository } from 'tests/unit/in-memory-repository/in-memory-users-repository'

let usersRepository: InMemoryUsersRepository
let sut: UpdateService

describe('Update Admin User', () => {
	const adminData: UpdateAdminDTO = {
		id: '123',
		name: 'Admin Updated'
	}

	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository()
		sut = new UpdateService(usersRepository)

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

	it('should update an admin user', async () => {
		await sut.execute(adminData)

		expect(usersRepository.users).toHaveLength(1)
		expect(usersRepository.users[0].name).toBe('Admin Updated')
		expect(usersRepository.users[0].updatedAt).toBeTruthy()
	})

	it('should not update an admin user with an invalid id', async () => {
		const invalidAdminData: UpdateAdminDTO = {
			id: 'invalid-id',
			name: 'Admin Updated'
		}

		await expect(sut.execute(invalidAdminData)).rejects.toBeInstanceOf(UserNotFoundError)
	})
})
