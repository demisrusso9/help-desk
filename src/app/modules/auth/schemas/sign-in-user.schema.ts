import { userSchema } from '@/app/shared/schema/user.schema'
import { z } from 'zod'

export const signInUserSchema = userSchema.pick({
	email: true,
	password: true
})

export type SignInUserDTO = z.infer<typeof signInUserSchema>
