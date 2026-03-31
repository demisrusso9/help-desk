import z from 'zod'
import { Role } from '../../../shared/enum/roles'

export const adminSchema = z.object({
	id: z.string(),
	name: z.string().min(4),
	email: z.email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
	role: z.enum(Role).default(Role.ADMIN),
	profileImageUrl: z.url('Invalid URL').optional(),
	mustChangePassword: z.boolean().default(false),
	createdAt: z.date(),
	updatedAt: z.date().nullish()
})

export const adminResponseSchema = adminSchema.omit({ password: true })

export type AdminDTO = z.infer<typeof adminSchema>
export type AdminResponseDTO = z.infer<typeof adminResponseSchema>
export type AdminCredentialsDTO = Pick<AdminDTO, 'id' | 'password' | 'role'>
