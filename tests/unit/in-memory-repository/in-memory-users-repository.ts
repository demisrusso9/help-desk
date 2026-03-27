import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'

import { AdminDTO, AdminResponseDTO } from '@/app/modules/admin/schemas/admin.schema'
import { RegisterAdminDTO } from '@/app/modules/admin/schemas/register.schema'
import { UpdateAdminDTO } from '@/app/modules/admin/schemas/update.schema'
import { UsersRepository } from '@/database/repository/contracts/users.repository'

@Injectable()
export class InMemoryUsersRepository implements UsersRepository {
	public users: AdminDTO[] = []

	async create(user: RegisterAdminDTO): Promise<AdminResponseDTO> {
		const newUser: AdminDTO = {
			id: randomUUID(),
			name: user.name,
			email: user.email,
			password: user.password,
			role: 'ADMIN',
			createdAt: new Date(),
			mustChangePassword: false
		}

		this.users.push(newUser)

		return this.toResponseDTO(newUser)
	}

	async findById(id: string): Promise<AdminResponseDTO | null> {
		const user = this.users.find((u) => u.id === id)
		if (!user) return null

		return this.toResponseDTO(user)
	}

	async findByEmail(email: string): Promise<AdminResponseDTO | null> {
		const user = this.users.find((u) => u.email === email)
		if (!user) return null

		return this.toResponseDTO(user)
	}

	async findAll(): Promise<AdminResponseDTO[] | []> {
		if (this.users.length === 0) return []

		return this.users.map((user) => this.toResponseDTO(user))
	}

	async deleteById(id: string): Promise<void> {
		const index = this.users.findIndex((u) => u.id === id)
		if (index !== -1) {
			this.users.splice(index, 1)
		}
	}

	async update(user: UpdateAdminDTO): Promise<void> {
		const existingUser = this.users.find((u) => u.id === user.id)

		if (!existingUser) {
			throw new Error(`User with id ${user.id} not found`)
		}

		if (user.name !== undefined) {
			existingUser.name = user.name
		}

		if (user.password !== undefined) {
			existingUser.password = user.password
		}

		existingUser.updatedAt = new Date()
	}

	private toResponseDTO(user: AdminDTO): AdminResponseDTO {
		// remove password like Prisma `omit`
		const { password, ...rest } = user
		return rest as AdminResponseDTO
	}
}
