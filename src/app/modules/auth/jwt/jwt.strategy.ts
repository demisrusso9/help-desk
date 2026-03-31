import { Envs } from '@/config/env'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { tokenSchema, UserPayload } from '../schemas/token.schema'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(config: ConfigService<Envs, true>) {
		const jwtSecret = config.get('JWT_SECRET', { infer: true })

		super({
			secretOrKey: jwtSecret,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false
		})
	}

	async validate(payload: UserPayload) {
		return tokenSchema.parse(payload)
	}
}
