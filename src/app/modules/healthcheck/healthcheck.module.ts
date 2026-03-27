import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { HealthCheckController } from './healthcheck.controller'

@Module({
	controllers: [HealthCheckController],
	providers: [PrismaService]
})
export class HealthCheckModule {}
