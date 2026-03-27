import { HealthCheckModule } from '@/app/modules/healthcheck/healthcheck.module'
import { AppController } from '@/app/modules/initial/app.controller'
import { AppService } from '@/app/modules/initial/app.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envsSchema } from './env'

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (envs) => envsSchema.parse(envs),
			isGlobal: true
		}),
		HealthCheckModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
