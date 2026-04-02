import { UserAlreadyExistsError } from '@/app/modules/technician/errors/user-already-exists.error'
import { CreateClientDTO } from '@/app/shared/schema/create-client.schema'
import { UsersRepository } from '@/database/repository/contracts/users.repository'
import { Injectable } from '@nestjs/common'
import { hash } from 'bcryptjs'

@Injectable()
export class CreateClientService {
	constructor(private readonly userRepository: UsersRepository) {}

	async execute(user: CreateClientDTO) {
		const checkIfUserExists = await this.userRepository.findByEmail(user.email)

		if (checkIfUserExists) {
			throw new UserAlreadyExistsError()
		}

		const hashedPassword = await hash(user.password, 10)

		const createUserPayload = {
			...user,
			password: hashedPassword
		}

		await this.userRepository.createClient(createUserPayload)
	}
}
