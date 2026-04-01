import { SeedService } from '@/config/seed.service'
import { PrismaService } from '@/database/prisma.service'
import { Module } from '@nestjs/common'
import { ServicesRepository } from './repository/contracts/services.repository'
import { UsersRepository } from './repository/contracts/users.repository'
import { PrismaServicesRepository } from './repository/prisma/prisma-services.repository'
import { PrismaUsersRepository } from './repository/prisma/prisma-users.repository'

@Module({
	providers: [
		PrismaService,
		SeedService,
		{
			provide: UsersRepository,
			useClass: PrismaUsersRepository
		},
		{
			provide: ServicesRepository,
			useClass: PrismaServicesRepository
		}
	],
	exports: [PrismaService, UsersRepository, ServicesRepository]
})
export class DatabaseModule {}
