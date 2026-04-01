import { ServicesRepository } from '@/database/repository/contracts/services.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ListTechService {
	constructor(private servicesRepository: ServicesRepository) {}

	async execute() {
		return await this.servicesRepository.findAll()
	}
}
