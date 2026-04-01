import { Role } from '@/app/shared/enum/roles'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { Body, Controller, Post, UseGuards, UsePipes } from '@nestjs/common'
import { Roles } from '../../auth/decorator/roles.decorator'
import { JwtAuthGuard } from '../../auth/jwt/jwt-auth.guard'
import { CreateServiceDTO, createServiceSchema } from '../schemas/create-service'
import { CreateTechService } from '../services/create.services'

@Controller('/admin/services')
export class CreateTechServiceController {
	constructor(private createTechService: CreateTechService) {}

	@Post('/create')
	@Roles(Role.ADMIN)
	@UseGuards(JwtAuthGuard)
	@UsePipes(new ZodValidationPipe(createServiceSchema))
	async handle(@Body() body: CreateServiceDTO) {
		return await this.createTechService.execute(body)
	}
}
