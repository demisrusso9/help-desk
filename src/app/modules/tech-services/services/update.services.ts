import { ServicesRepository } from '@/database/repository/contracts/services.repository'
import { Injectable } from '@nestjs/common'
import { UpdateServiceDTO } from '../schemas/update-service'
import { ServiceNotFoundError } from './errors/service-not-found.error'

@Injectable()
export class UpdateTechService {
	constructor(private servicesRepository: ServicesRepository) {}

	async execute(service: UpdateServiceDTO) {
		const checkIfServiceExists = await this.servicesRepository.findById(service.id)

		if (!checkIfServiceExists) {
			throw new ServiceNotFoundError()
		}

		return await this.servicesRepository.update(service.id, service)
	}
}
