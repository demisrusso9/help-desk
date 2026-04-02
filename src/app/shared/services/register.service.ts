import { UserAlreadyExistsError } from '@/app/modules/technician/errors/user-already-exists.error'
import { Injectable } from '@nestjs/common'
import { hash } from 'bcryptjs'
import { randomUUID } from 'node:crypto'
import z from 'zod'
import { UsersRepository } from '../../../database/repository/contracts/users.repository'
import { CreateTechnicianDTO } from '../schema/create-technician.schema'

type WeekDay =
	| 'MONDAY'
	| 'TUESDAY'
	| 'WEDNESDAY'
	| 'THURSDAY'
	| 'FRIDAY'
	| 'SATURDAY'
	| 'SUNDAY'

const weekDayEnum = z.enum([
	'MONDAY',
	'TUESDAY',
	'WEDNESDAY',
	'THURSDAY',
	'FRIDAY',
	'SATURDAY',
	'SUNDAY'
])

@Injectable()
export class RegisterService {
	constructor(private readonly userRepository: UsersRepository) {}

	async execute(user: CreateTechnicianDTO) {
		const checkIfUserExists = await this.userRepository.findByEmail(user.email)

		if (checkIfUserExists) {
			throw new UserAlreadyExistsError()
		}

		const hashedPassword = await hash(user.password, 10)

		const createUserPayload = {
			...user,
			password: hashedPassword,
			mustChangePassword: true,
			availabilities: user.availabilities.map((availability) => ({
				id: randomUUID(),
				weekDay: weekDayEnum.parse(availability.weekDay),
				startTime: availability.startTime,
				endTime: availability.endTime
			}))
		}

		await this.userRepository.createTechnician(createUserPayload)
	}
}
