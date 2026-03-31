import { UpdateAdminDTO } from '@/app/modules/technician/schemas/update.schema'
import { CreateTechnicianDTO } from '@/app/shared/schema/create-user.schema'
import { UserCredentialsDTO, UserResponseDTO } from '@/app/shared/schema/user.schema'

export abstract class UsersRepository {
	abstract create(user: CreateTechnicianDTO): Promise<UserResponseDTO>
	abstract findByEmail(email: string): Promise<UserResponseDTO | null>
	abstract findCredentialsByEmail(email: string): Promise<UserCredentialsDTO | null>
	abstract findById(id: string): Promise<UserResponseDTO | null>
	abstract findAll(): Promise<UserResponseDTO[] | []>
	abstract deleteById(id: string): Promise<void>
	abstract update(user: UpdateAdminDTO): Promise<void>
}
