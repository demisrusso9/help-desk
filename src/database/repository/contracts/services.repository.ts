import { CreateServiceDTO } from '@/app/modules/tech-services/schemas/create-service'
import { UpdateServiceDTO } from '@/app/modules/tech-services/schemas/update-service'

export abstract class ServicesRepository {
	abstract create(service: CreateServiceDTO): Promise<CreateServiceDTO>
	abstract update(id: string, service: UpdateServiceDTO): Promise<UpdateServiceDTO>
	abstract findById(id: string): Promise<CreateServiceDTO | null>
	abstract findAll(): Promise<CreateServiceDTO[]>
}
