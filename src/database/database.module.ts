import { PrismaService } from '@/database/prisma.service'
import { Module } from '@nestjs/common'
import { UsersRepository } from './repository/contracts/users.repository'
import { PrismaUsersRepository } from './repository/prisma/prisma-users.repository'

@Module({
	providers: [
		PrismaService,
		{
			provide: UsersRepository,
			useClass: PrismaUsersRepository
		}
	],
	exports: [PrismaService, UsersRepository]
})
export class DatabaseModule {}
