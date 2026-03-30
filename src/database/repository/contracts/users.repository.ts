import { UpdateAdminDTO } from '@/app/modules/admin/schemas/update.schema'
import { AdminCredentialsDTO, AdminResponseDTO } from '../../../app/modules/admin/schemas/admin.schema'
import { RegisterAdminDTO } from '../../../app/modules/admin/schemas/register.schema'

export abstract class UsersRepository {
	abstract create(user: RegisterAdminDTO): Promise<AdminResponseDTO>
	abstract findByEmail(email: string): Promise<AdminResponseDTO | null>
	abstract findCredentialsByEmail(email: string): Promise<AdminCredentialsDTO | null>
	abstract findById(id: string): Promise<AdminResponseDTO | null>
	abstract findAll(): Promise<AdminResponseDTO[] | []>
	abstract deleteById(id: string): Promise<void>
	abstract update(user: UpdateAdminDTO): Promise<void>
}
