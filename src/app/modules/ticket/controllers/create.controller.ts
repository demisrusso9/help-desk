import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { Body, Controller, NotFoundException, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from '../../auth/decorator/current-user.decorator'
import { Roles } from '../../auth/decorator/roles.decorator'
import { JwtAuthGuard } from '../../auth/jwt/jwt-auth.guard'
import { UserPayload } from '../../auth/schemas/token.schema'
import { ServiceNotFoundError } from '../../tech-services/services/errors/service-not-found.error'
import { CreateTicketDTO, createTicketSchema } from '../schemas/ticket.schema'
import { TicketService } from '../services/ticket.service'

@Controller('/ticket')
export class TicketController {
	constructor(private ticketService: TicketService) {}

	@Post('/create')
	@Roles('CLIENT')
	@UseGuards(JwtAuthGuard)
	async handle(
		@Body(new ZodValidationPipe(createTicketSchema)) body: CreateTicketDTO,
		@CurrentUser() user: UserPayload
	) {
		try {
			const data = { ...body, clientId: user.sub }

			return await this.ticketService.execute(data)
		} catch (error) {
			if (error instanceof ServiceNotFoundError) {
				throw new NotFoundException(error.message)
			}
		}
	}
}
