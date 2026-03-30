import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { Body, Controller, Post, UnauthorizedException, UsePipes } from '@nestjs/common'
import { InvalidCredentialsError } from '../errors/invalid-credentials.error'
import { SignInUserDTO, signInUserSchema } from '../schemas/sign-in-user.schema'
import { SignInService } from '../services/sign-in.service'

@Controller('/admin')
export class SignInController {
	constructor(private signInService: SignInService) {}

	@Post('/sign-in')
	@UsePipes(new ZodValidationPipe(signInUserSchema))
	async handle(@Body() body: SignInUserDTO) {
		try {
			return await this.signInService.execute(body)
		} catch (error) {
			if (error instanceof InvalidCredentialsError) {
				throw new UnauthorizedException(error.message)
			}
		}
	}
}
