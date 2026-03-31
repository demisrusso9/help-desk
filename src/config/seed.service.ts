import { PrismaService } from '@/database/prisma.service'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { hash } from 'bcryptjs'
import { Envs } from './env'

@Injectable()
export class SeedService implements OnModuleInit {
	constructor(
		private prisma: PrismaService,
		private configService: ConfigService<Envs, true>
	) {}

	async onModuleInit() {
		await this.createAdmin()
	}

	private async createAdmin() {
		const adminExists = await this.prisma.user.findFirst({
			where: { role: 'ADMIN' }
		})

		if (adminExists) return

		const email = this.configService.get('ADMIN_EMAIL', { infer: true })
		const password = this.configService.get('ADMIN_PASSWORD', { infer: true })

		const hashedPassword = await hash(password, 10)

		await this.prisma.user.create({
			data: {
				name: 'Admin',
				email,
				password: hashedPassword,
				role: 'ADMIN'
			}
		})
	}
}
