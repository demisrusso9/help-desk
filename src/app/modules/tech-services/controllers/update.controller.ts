import { Role } from '@/app/shared/enum/roles'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import {
	Body,
	Controller,
	NotFoundException,
	Patch,
	UseGuards,
	UsePipes
} from '@nestjs/common'
import { Roles } from '../../auth/decorator/roles.decorator'
import { JwtAuthGuard } from '../../auth/jwt/jwt-auth.guard'
import { UpdateServiceDTO, updateServiceSchema } from '../schemas/update-service'
import { ServiceNotFoundError } from '../services/errors/service-not-found.error'
import { UpdateTechService } from '../services/update.services'

@Controller('/admin/services')
export class UpdateTechServiceController {
	constructor(private updateTechService: UpdateTechService) {}

	@Patch('/update')
	@Roles(Role.ADMIN)
	@UseGuards(JwtAuthGuard)
	@UsePipes(new ZodValidationPipe(updateServiceSchema))
	async handle(@Body() body: UpdateServiceDTO) {
		try {
			return await this.updateTechService.execute(body)
		} catch (error) {
			if (error instanceof ServiceNotFoundError) {
				throw new NotFoundException(error.message)
			}
		}
	}
}
