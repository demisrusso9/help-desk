import z from 'zod'
import { Role } from '../enum/roles'

export const userSchema = z.object({
	id: z.string(),
	name: z.string().min(4),
	email: z.email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
	role: z.enum(Role),
	profileImageUrl: z.url('Invalid URL').optional(),
	mustChangePassword: z.boolean(),
	createdAt: z.date(),
	updatedAt: z.date().nullish(),
	availabilities: z
		.array(
			z.object({
				id: z.string(),
				weekDay: z.enum([
					'MONDAY',
					'TUESDAY',
					'WEDNESDAY',
					'THURSDAY',
					'FRIDAY',
					'SATURDAY',
					'SUNDAY'
				]),
				startTime: z.string(),
				endTime: z.string()
			})
		)
		.optional()
})

export const userResponseSchema = userSchema.omit({ password: true })

export type UserDTO = z.infer<typeof userSchema>
export type UserResponseDTO = z.infer<typeof userResponseSchema>
export type UserCredentialsDTO = Pick<UserDTO, 'id' | 'password' | 'role'>
