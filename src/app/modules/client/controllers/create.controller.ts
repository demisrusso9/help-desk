import {
	CreateClientDTO,
	createClientSchema
} from '@/app/shared/schema/create-client.schema'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { Body, ConflictException, Controller, Post, UsePipes } from '@nestjs/common'
import { UserAlreadyExistsError } from '../../../shared/errors/user-already-exists.error'
import { CreateClientService } from '../services/create.service'

@Controller('/client')
export class CreateClientController {
	constructor(private createClientService: CreateClientService) {}

	@Post('/register')
	@UsePipes(new ZodValidationPipe(createClientSchema))
	async handle(@Body() body: CreateClientDTO) {
		try {
			return await this.createClientService.execute(body)
		} catch (error) {
			if (error instanceof UserAlreadyExistsError) {
				throw new ConflictException(error.message)
			}
		}
	}
}
