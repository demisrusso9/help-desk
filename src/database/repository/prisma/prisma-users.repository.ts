import { UpdateAdminDTO } from '@/app/modules/admin/schemas/update.schema'
import { PrismaService } from '@/database/prisma.service'
import { Injectable } from '@nestjs/common'
import { AdminResponseDTO } from '../../../app/modules/admin/schemas/admin.schema'
import { RegisterAdminDTO } from '../../../app/modules/admin/schemas/register.schema'
import { UsersRepository } from '../contracts/users.repository'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
	constructor(private prisma: PrismaService) {}

	async create(user: RegisterAdminDTO): Promise<AdminResponseDTO> {
		const createdUser = await this.prisma.user.create({
			data: {
				name: user.name,
				email: user.email,
				password: user.password,
				role: 'ADMIN'
			},
			omit: { password: true }
		})

		return createdUser as AdminResponseDTO
	}

	async findById(id: string): Promise<AdminResponseDTO | null> {
		const user = await this.prisma.user.findUnique({
			where: { id },
			omit: { password: true }
		})

		return user as AdminResponseDTO
	}

	async findByEmail(email: string): Promise<AdminResponseDTO | null> {
		const user = await this.prisma.user.findUnique({
			where: { email },
			omit: { password: true }
		})

		return user as AdminResponseDTO
	}

	async findAll(): Promise<AdminResponseDTO[] | []> {
		const users = await this.prisma.user.findMany({
			omit: { password: true }
		})

		return users as AdminResponseDTO[]
	}

	async deleteById(id: string): Promise<void> {
		await this.prisma.user.delete({
			where: { id }
		})
	}

	async update(user: UpdateAdminDTO): Promise<void> {
		await this.prisma.user.update({
			where: { id: user.id },
			data: {
				name: user.name,
				password: user.password,
				updatedAt: new Date()
			}
		})
	}
}
