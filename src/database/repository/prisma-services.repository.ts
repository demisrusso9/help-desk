import {
	CreateServiceDTO,
	ResponseServiceDTO
} from '@/app/modules/tech-services/schemas/create-service'
import { UpdateServiceDTO } from '@/app/modules/tech-services/schemas/update-service'
import { PrismaService } from '@/database/prisma.service'
import { Injectable } from '@nestjs/common'
import { ServicesRepository } from './contracts/services.repository'

@Injectable()
export class PrismaServicesRepository implements ServicesRepository {
	constructor(private prisma: PrismaService) {}

	async create(service: CreateServiceDTO): Promise<CreateServiceDTO> {
		return await this.prisma.service.create({ data: service })
	}

	async findById(id: string): Promise<CreateServiceDTO | null> {
		return await this.prisma.service.findUnique({ where: { id } })
	}

	async findAll(): Promise<CreateServiceDTO[]> {
		return await this.prisma.service.findMany()
	}

	async update(id: string, service: UpdateServiceDTO): Promise<ResponseServiceDTO> {
		return await this.prisma.service.update({
			where: { id },
			data: {
				...service,
				updatedAt: new Date()
			}
		})
	}
}
