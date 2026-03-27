import { Controller, Get } from '@nestjs/common'
import { ListService } from '../services/list.service'

@Controller('/admin')
export class ListController {
	constructor(private readonly listService: ListService) {}

	@Get('/list')
	async handle() {
		return await this.listService.execute()
	}
}
