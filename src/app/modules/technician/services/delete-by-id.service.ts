import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../../../../database/repository/contracts/users.repository'
import { UserNotFoundError } from '../../../shared/errors/user-not-found.error'

@Injectable()
export class DeleteByIdService {
	constructor(private readonly userRepository: UsersRepository) {}

	async execute(id: string) {
		const checkIfUserExists = await this.userRepository.findById(id)

		if (checkIfUserExists) {
			return await this.userRepository.deleteById(id)
		}

		throw new UserNotFoundError()
	}
}
