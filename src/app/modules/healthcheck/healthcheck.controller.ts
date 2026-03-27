import { PrismaService } from '@/database/prisma.service'
import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'

@Controller()
export class HealthCheckController {
	constructor(private prisma: PrismaService) {}

	@Get('/healthcheck')
	async healthCheck() {
		try {
			await this.prisma.$queryRaw`SELECT 1`

			return { status: 'ok' }
		} catch {
			throw new HttpException(
				{ status: 'error', message: 'Database connection failed' },
				HttpStatus.SERVICE_UNAVAILABLE
			)
		}
	}
}
