import { AdminModule } from '@/app/modules/admin/admin.module'
import { HealthCheckModule } from '@/app/modules/healthcheck/healthcheck.module'
import { envsSchema } from '@/config/env'
import { DatabaseModule } from '@/database/database.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (envs) => envsSchema.parse(envs),
			isGlobal: true
		}),
		AdminModule,
		DatabaseModule,
		HealthCheckModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
