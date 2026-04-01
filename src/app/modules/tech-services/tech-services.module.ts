import { DatabaseModule } from '@/database/database.module'
import { Module } from '@nestjs/common'
import { CreateTechServiceController } from './controllers/create.controller'
import { ListTechServiceController } from './controllers/list.controller'
import { UpdateTechServiceController } from './controllers/update.controller'
import { CreateTechService } from './services/create.services'
import { ListTechService } from './services/list.services'
import { UpdateTechService } from './services/update.services'

@Module({
	imports: [DatabaseModule],
	controllers: [
		CreateTechServiceController,
		ListTechServiceController,
		UpdateTechServiceController
	],
	providers: [CreateTechService, ListTechService, UpdateTechService]
})
export class TechServicesModule {}
