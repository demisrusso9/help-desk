import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../../../../database/repository/contracts/users.repository'
import { UserNotFoundError } from '../../../shared/errors/user-not-found.error'
import { UpdateAdminDTO } from '../schemas/update.schema'

@Injectable()
export class UpdateService {
	constructor(private readonly userRepository: UsersRepository) {}

	async execute(user: UpdateAdminDTO) {
		const checkIfUserExists = await this.userRepository.findById(user.id)

		if (!checkIfUserExists) {
			throw new UserNotFoundError()
		}

		await this.userRepository.update(user)
	}
}
