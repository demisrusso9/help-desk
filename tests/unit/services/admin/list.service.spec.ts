import { ListService } from '@/app/modules/admin/services/list.service'
import { InMemoryUsersRepository } from 'tests/unit/in-memory-repository/in-memory-users-repository'

let usersRepository: InMemoryUsersRepository
let sut: ListService

describe('List Admin Users', () => {
	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository()
		sut = new ListService(usersRepository)

		usersRepository.users.push({
			id: '123',
			name: 'Admin',
			email: 'admin@admin.com',
			password: '123456',
			role: 'ADMIN',
			createdAt: new Date(),
			mustChangePassword: false
		})
	})

	it('should list all admin users', async () => {
		const users = await sut.execute()

		expect(users).toHaveLength(1)
		expect(users[0].email).toBe('admin@admin.com')
	})
})
