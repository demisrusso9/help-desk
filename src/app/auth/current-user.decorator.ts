import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UserPayload } from '../modules/admin/schemas/token.schema'

export const CurrentUser = createParamDecorator((_, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest()
	return request.user as UserPayload
})
