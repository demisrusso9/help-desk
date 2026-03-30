import z from 'zod'
import { Role } from './roles'

export const tokenSchema = z.object({
	sub: z.uuid(),
	role: z.enum(Role)
})

export type UserPayload = z.infer<typeof tokenSchema>
