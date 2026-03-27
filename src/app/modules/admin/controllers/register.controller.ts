import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { Body, ConflictException, Controller, Post, UsePipes } from '@nestjs/common'
import { UserAlreadyExistsError } from '../errors/user-already-exists.error'
import { RegisterAdminDTO, registerAdminSchema } from '../schemas/register.schema'
import { RegisterService } from '../services/register.service'

@Controller('/admin')
export class RegisterController {
	constructor(private readonly registerService: RegisterService) {}

	@Post('/register')
	@UsePipes(new ZodValidationPipe(registerAdminSchema))
	async handle(@Body() body: RegisterAdminDTO) {
		try {
			return await this.registerService.execute(body)
		} catch (error) {
			if (error instanceof UserAlreadyExistsError) {
				throw new ConflictException(error.message)
			}
		}
	}
}
