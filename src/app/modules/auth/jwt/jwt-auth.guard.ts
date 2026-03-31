import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport'
import { ROLES_KEY } from '../decorator/roles.decorator'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
	constructor(
		private jwtService: JwtService,
		private reflector: Reflector
	) {
		super()
	}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const canActivate = await super.canActivate(context)

		if (!canActivate) {
			return false
		}

		const requiredRoles = this.reflector.getAllAndOverride<string>(ROLES_KEY, [
			context.getHandler(),
			context.getClass()
		])

		if (!requiredRoles) {
			return true
		}

		const request = context.switchToHttp().getRequest()

		const token = request.headers.authorization?.split(' ')[1]

		if (!token) {
			throw new UnauthorizedException('No token provided')
		}

		const payload = this.jwtService.verify(token)
		const userRole = payload.role || ''

		const hasRole = requiredRoles.includes(userRole)

		if (!hasRole) {
			throw new UnauthorizedException('Insufficient role')
		}

		return true
	}
}
