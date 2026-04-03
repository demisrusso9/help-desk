import { DatabaseModule } from '@/database/database.module'
import { Module } from '@nestjs/common'
import { TicketController } from './controllers/create.controller'
import { TicketService } from './services/ticket.service'

@Module({
	imports: [DatabaseModule],
	controllers: [TicketController],
	providers: [TicketService]
})
export class TicketModule {}
