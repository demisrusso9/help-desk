import { Envs } from '@/config/env'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy'

@Module({
	imports: [
		PassportModule,
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
		})
	],
	providers: [JwtStrategy],
	exports: [JwtStrategy]
})
export class AuthModule {}
