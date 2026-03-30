import { JwtAuthGuard } from '@/app/auth/jwt-auth.guard'
import { Controller, Get, UseGuards } from '@nestjs/common'
import { ListService } from '../services/list.service'

@Controller('/admin')
export class ListController {
	constructor(private readonly listService: ListService) {}

	@Get('/list')
	@UseGuards(JwtAuthGuard)
	async handle() {
		return await this.listService.execute()
	}
}
