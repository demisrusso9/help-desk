import { Role } from '@/app/shared/enum/roles'
import { Controller, Get, UseGuards } from '@nestjs/common'
import { Roles } from '../../auth/decorator/roles.decorator'
import { JwtAuthGuard } from '../../auth/jwt/jwt-auth.guard'
import { ListTechService } from '../services/list.services'

@Controller('/admin/services')
export class ListTechServiceController {
	constructor(private listTechService: ListTechService) {}

	@Get('/list')
	@Roles(Role.ADMIN)
	@UseGuards(JwtAuthGuard)
	async handle() {
		return await this.listTechService.execute()
	}
}
