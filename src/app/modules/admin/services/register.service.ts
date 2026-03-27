import { Injectable } from '@nestjs/common'
import { hash } from 'bcryptjs'
import { UsersRepository } from '../../../../database/repository/contracts/users.repository'
import { UserAlreadyExistsError } from '../errors/user-already-exists.error'
import { RegisterAdminDTO } from '../schemas/register.schema'

@Injectable()
export class RegisterService {
	constructor(private readonly userRepository: UsersRepository) {}

	async execute(user: RegisterAdminDTO) {
		const checkIfUserExists = await this.userRepository.findByEmail(user.email)

		if (checkIfUserExists) {
			throw new UserAlreadyExistsError()
		}

		const hashedPassword = await hash(user.password, 10)

		const userWithHashedPassword = {
			...user,
			password: hashedPassword
		}

		await this.userRepository.create(userWithHashedPassword)
	}
}
