import { JwtAuthGuard } from '@/app/auth/jwt-auth.guard'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import {
	Body,
	Controller,
	NotFoundException,
	Put,
	UseGuards,
	UsePipes
} from '@nestjs/common'
import { UserNotFoundError } from '../errors/user-not-found.error'
import { UpdateAdminDTO, updateAdminSchema } from '../schemas/update.schema'
import { UpdateService } from '../services/update.service'

@Controller('/admin')
export class UpdateController {
	constructor(private readonly updateService: UpdateService) {}

	@Put('/update')
	@UseGuards(JwtAuthGuard)
	@UsePipes(new ZodValidationPipe(updateAdminSchema))
	async handle(@Body() body: UpdateAdminDTO) {
		try {
			return await this.updateService.execute(body)
		} catch (error) {
			if (error instanceof UserNotFoundError) {
				throw new NotFoundException(error.message)
			}
		}
	}
}
