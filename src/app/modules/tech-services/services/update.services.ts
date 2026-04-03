import { ServicesRepository } from '@/database/repository/contracts/services.repository'
import { Injectable } from '@nestjs/common'
import { ServiceNotFoundError } from '../../../shared/errors/service-not-found.error'
import { UpdateServiceDTO } from '../schemas/update-service'

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
