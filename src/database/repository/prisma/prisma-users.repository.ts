import { UpdateAdminDTO } from '@/app/modules/technician/schemas/update.schema'
import { CreateClientDTO } from '@/app/shared/schema/create-client.schema'
import { CreateTechnicianDTO } from '@/app/shared/schema/create-technician.schema'
import { UserCredentialsDTO, UserResponseDTO } from '@/app/shared/schema/user.schema'
import { PrismaService } from '@/database/prisma.service'
import { Injectable } from '@nestjs/common'
import { Role } from 'prisma/generated/enums'
import { UsersRepository } from '../contracts/users.repository'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
	constructor(private prisma: PrismaService) {}

	async createClient(user: CreateClientDTO): Promise<UserResponseDTO> {
		const createdUser = await this.prisma.user.create({
			data: {
				name: user.name,
				email: user.email,
				password: user.password,
				role: user.role
			},
			omit: { password: true }
		})

		return createdUser as UserResponseDTO
	}

	async createTechnician(
		user: CreateTechnicianDTO & { mustChangePassword: boolean }
	): Promise<UserResponseDTO> {
		const createdUser = await this.prisma.user.create({
			data: {
				name: user.name,
				email: user.email,
				password: user.password,
				role: user.role,
				mustChangePassword: user.mustChangePassword,
				availabilities: {
					create: user.availabilities.map((availability) => ({
						weekDay: availability.weekDay,
						startTime: availability.startTime,
						endTime: availability.endTime
					}))
				}
			},
			omit: { password: true }
		})

		return createdUser as UserResponseDTO
	}

	async findById(id: string): Promise<UserResponseDTO | null> {
		const user = await this.prisma.user.findUnique({
			where: { id },
			omit: { password: true }
		})

		return user as UserResponseDTO
	}

	async findByEmail(email: string): Promise<UserResponseDTO | null> {
		const user = await this.prisma.user.findUnique({
			where: { email },
			omit: { password: true }
		})

		return user as UserResponseDTO
	}

	async findCredentialsByEmail(email: string): Promise<UserCredentialsDTO | null> {
		const user = await this.prisma.user.findUnique({
			where: { email },
			select: { id: true, password: true, role: true }
		})

		return user as UserCredentialsDTO
	}

	async findAll(): Promise<UserResponseDTO[] | []> {
		const users = await this.prisma.user.findMany({
			omit: { password: true },
			where: { role: Role.TECHNICIAN }
		})

		return users as UserResponseDTO[]
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
