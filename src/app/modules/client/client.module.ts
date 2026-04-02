import { DatabaseModule } from '@/database/database.module'
import { Module } from '@nestjs/common'
import { CreateClientController } from './controllers/create.controller'
import { CreateClientService } from './services/create.service'

@Module({
	imports: [DatabaseModule],
	controllers: [CreateClientController],
	providers: [CreateClientService]
})
export class ClientModule {}
