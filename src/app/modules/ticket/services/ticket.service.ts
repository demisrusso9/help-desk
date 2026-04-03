import { TicketsRepository } from '@/database/repository/contracts/tickets.repository'
import { Injectable } from '@nestjs/common'
import { ServiceNotFoundError } from '../../tech-services/services/errors/service-not-found.error'
import { CreateTicketDTO } from '../schemas/ticket.schema'

@Injectable()
export class TicketService {
	constructor(private ticketsRepository: TicketsRepository) {}

	async execute(data: CreateTicketDTO) {
		const services = await this.ticketsRepository.findServices(data.serviceIds)

		if (services.length === 0) {
			throw new ServiceNotFoundError()
		}

		await this.ticketsRepository.createTicket(data, services)
	}
}
