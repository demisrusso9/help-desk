import { HealthCheckModule } from '@/app/modules/healthcheck/healthcheck.module'

import { envsSchema } from '@/config/env'
import { DatabaseModule } from '@/database/database.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './app/modules/auth/auth.module'
import { ClientModule } from './app/modules/client/client.module'
import { TechServicesModule } from './app/modules/tech-services/tech-services.module'
import { TechnicianModule } from './app/modules/technician/technician.module'
import { TicketModule } from './app/modules/ticket/ticket.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (envs) => envsSchema.parse(envs),
			isGlobal: true
		}),
		DatabaseModule,
		HealthCheckModule,
		AuthModule,
		TechnicianModule,
		TechServicesModule,
		ClientModule,
		TicketModule
	]
})
export class AppModule {}
