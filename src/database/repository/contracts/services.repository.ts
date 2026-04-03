import {
	CreateServiceDTO,
	ResponseServiceDTO
} from '@/app/modules/tech-services/schemas/create-service'
import { UpdateServiceDTO } from '@/app/modules/tech-services/schemas/update-service'

export abstract class ServicesRepository {
	abstract create(service: CreateServiceDTO): Promise<ResponseServiceDTO>
	abstract update(id: string, service: UpdateServiceDTO): Promise<ResponseServiceDTO>
	abstract findById(id: string): Promise<ResponseServiceDTO | null>
	abstract findAll(): Promise<ResponseServiceDTO[]>
}
