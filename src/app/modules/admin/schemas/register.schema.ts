import { z } from 'zod'
import { adminSchema } from './admin.schema'

export const registerAdminSchema = adminSchema.omit({
	id: true,
	createdAt: true,
	mustChangePassword: true,
	updatedAt: true
})

export type RegisterAdminDTO = z.infer<typeof registerAdminSchema>
