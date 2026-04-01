import { ServicesRepository } from '@/database/repository/contracts/services.repository'
import { Injectable } from '@nestjs/common'
import { CreateServiceDTO } from '../schemas/create-service'

@Injectable()
export class CreateTechService {
	constructor(private servicesRepository: ServicesRepository) {}

	async execute(body: CreateServiceDTO) {
		return await this.servicesRepository.create(body)
	}
}
