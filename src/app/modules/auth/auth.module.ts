import { Envs } from '@/config/env'
import { DatabaseModule } from '@/database/database.module'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthenticateController } from './controller/authenticate.controller'
import { JwtStrategy } from './jwt/jwt.strategy'
import { AuthenticateService } from './service/authenticate.service'

@Module({
	imports: [
		JwtModule.registerAsync({
			inject: [ConfigService],
			global: true,
			useFactory: (config: ConfigService<Envs, true>) => {
				const jwtSecret = config.get('JWT_SECRET', { infer: true })
				const jwtExpiresIn = config.get('JWT_EXPIRES_IN', { infer: true })

				return {
					secret: jwtSecret,
					signOptions: { expiresIn: Number(jwtExpiresIn) }
				}
			}
		}),
		PassportModule,
		DatabaseModule
	],
	controllers: [AuthenticateController],
	providers: [JwtStrategy, AuthenticateService],
	exports: [JwtModule, JwtStrategy, AuthenticateService]
})
export class AuthModule {}
