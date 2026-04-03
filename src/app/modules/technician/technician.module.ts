import { RegisterService } from '@/app/shared/services/register.service'
import { Module } from '@nestjs/common'

import { DatabaseModule } from '@/database/database.module'
import { DeleteByIdController } from './controllers/delete-by-id.controller'
import { ListController } from './controllers/list.controller'
import { RegisterController } from './controllers/register.controller'
import { UpdateController } from './controllers/update.controller'
import { DeleteByIdService } from './services/delete-by-id.service'
import { ListService } from './services/list.service'
import { UpdateService } from './services/update.service'

@Module({
	imports: [DatabaseModule],
	controllers: [
		RegisterController,
		ListController,
		UpdateController,
		DeleteByIdController
	],
	providers: [RegisterService, ListService, UpdateService, DeleteByIdService]
})
export class TechnicianModule {}
