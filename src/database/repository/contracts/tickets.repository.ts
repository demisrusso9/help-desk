import { ResponseServiceDTO } from '@/app/modules/tech-services/schemas/create-service'
import { CreateTicketDTO } from '@/app/modules/ticket/schemas/ticket.schema'

export abstract class TicketsRepository {
	abstract createTicket(
		data: CreateTicketDTO,
		services: ResponseServiceDTO[]
	): Promise<void>
	abstract findServices(data: any): Promise<ResponseServiceDTO[]>
}
