import { z } from 'zod'
import { adminSchema } from './admin.schema'

export const signInUserSchema = adminSchema.pick({
	email: true,
	password: true
})

export type SignInUserDTO = z.infer<typeof signInUserSchema>
