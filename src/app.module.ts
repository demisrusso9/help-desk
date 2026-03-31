import { HealthCheckModule } from '@/app/modules/healthcheck/healthcheck.module'

import { envsSchema } from '@/config/env'
import { DatabaseModule } from '@/database/database.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './app/modules/auth/auth.module'
import { TechnicianModule } from './app/modules/technician/technician.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (envs) => envsSchema.parse(envs),
			isGlobal: true
		}),
		TechnicianModule,
		DatabaseModule,
		HealthCheckModule,
		AuthModule
	]
})
export class AppModule {}
