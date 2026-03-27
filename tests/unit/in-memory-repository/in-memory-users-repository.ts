import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'

import { AdminResponseDTO } from '@/app/modules/admin/schemas/admin.schema'
import { RegisterAdminDTO } from '@/app/modules/admin/schemas/register.schema'
import { UpdateAdminDTO } from '@/app/modules/admin/schemas/update.schema'
import { UsersRepository } from '@/database/repository/contracts/users.repository'

type InMemoryUser = {
	id: string
	name: string
	email: string
	password: string
	role: 'ADMIN'
	createdAt: Date
	updatedAt?: Date
}

@Injectable()
export class InMemoryUsersRepository implements UsersRepository {
	private users: InMemoryUser[] = []

	async create(user: RegisterAdminDTO): Promise<AdminResponseDTO> {
		const newUser: InMemoryUser = {
			id: randomUUID(),
			name: user.name,
			email: user.email,
			password: user.password,
			role: 'ADMIN',
			createdAt: new Date()
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

	async findAll(): Promise<AdminResponseDTO[] | null> {
		if (this.users.length === 0) return []

		return this.users.map((user) => this.toResponseDTO(user))
	}

	async deleteById(id: string): Promise<void> {
		const index = this.users.findIndex((u) => u.id === id)
		if (index !== -1) {
			this.users.splice(index, 1)
		}
	}

	update(user: UpdateAdminDTO): Promise<void> {
		throw new Error('Method not implemented.')
	}

	private toResponseDTO(user: InMemoryUser): AdminResponseDTO {
		// remove password like Prisma `omit`
		const { password, ...rest } = user
		return rest as AdminResponseDTO
	}
}
