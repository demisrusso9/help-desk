import { ResponseServiceDTO } from '@/app/modules/tech-services/schemas/create-service'
import { PrismaCreateTicketDTO } from '@/app/modules/ticket/schemas/ticket.schema'
import { PrismaService } from '@/database/prisma.service'
import { Injectable } from '@nestjs/common'
import { TicketsRepository } from '../contracts/tickets.repository'

export interface ServiceParam {
	id: string
	priceInCents: string
}

@Injectable()
export class PrismaTicketsRepository implements TicketsRepository {
	constructor(private prisma: PrismaService) {}

	async createTicket(data: PrismaCreateTicketDTO, services: ResponseServiceDTO[]) {
		await this.prisma.ticket.create({
			data: {
				clientId: data.clientId,
				technicianId: data.technicianId,
				status: 'OPEN',
				services: {
					create: services.map((service) => ({
						service: { connect: { id: service.id } },
						priceInCents: Number(service.priceInCents)
					}))
				}
			},
			include: {
				client: true,
				technician: true,
				services: {
					include: {
						service: true
					}
				}
			}
		})
	}

	async findServices(serviceIds: string[]) {
		const services = await this.prisma.service.findMany({
			where: {
				id: { in: serviceIds },
				isActive: true
			}
		})

		return services
	}
}
