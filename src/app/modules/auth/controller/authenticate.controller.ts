import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { Body, Controller, Post, UnauthorizedException, UsePipes } from '@nestjs/common'

import { InvalidCredentialsError } from '../../../shared/errors/invalid-credentials.error'
import { SignInUserDTO, signInUserSchema } from '../schemas/sign-in-user.schema'
import { AuthenticateService } from '../service/authenticate.service'

@Controller('/sign-in')
export class AuthenticateController {
	constructor(private authenticateService: AuthenticateService) {}

	@Post()
	@UsePipes(new ZodValidationPipe(signInUserSchema))
	async handle(@Body() body: SignInUserDTO) {
		try {
			return await this.authenticateService.execute(body)
		} catch (error) {
			if (error instanceof InvalidCredentialsError) {
				throw new UnauthorizedException(error.message)
			}
		}
	}
}
