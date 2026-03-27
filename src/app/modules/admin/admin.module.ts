import { RegisterController } from '@/app/modules/admin/controllers/register.controller'
import { RegisterService } from '@/app/modules/admin/services/register.service'
import { PrismaService } from '@/database/prisma.service'
import { UsersRepository } from '@/database/repository/contracts/users.repository'
import { PrismaUsersRepository } from '@/database/repository/prisma/prisma-users.repository'
import { Module } from '@nestjs/common'
import { DeleteByIdController } from './controllers/delete-by-id.controller'
import { ListController } from './controllers/list.controller'
import { UpdateController } from './controllers/update.controller'
import { DeleteByIdService } from './services/delete-by-id.service'
import { ListService } from './services/list.service'
import { UpdateService } from './services/update.service'

@Module({
	controllers: [
		RegisterController,
		ListController,
		UpdateController,
		DeleteByIdController
	],
	providers: [
		PrismaService,
		RegisterService,
		ListService,
		UpdateService,
		DeleteByIdService,
		{
			provide: UsersRepository,
			useClass: PrismaUsersRepository
		}
	]
})
export class AdminModule {}
