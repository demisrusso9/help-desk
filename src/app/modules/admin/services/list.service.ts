import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../../../../database/repository/contracts/users.repository'

@Injectable()
export class ListService {
	constructor(private readonly userRepository: UsersRepository) {}

	async execute() {
		return await this.userRepository.findAll()
	}
}
