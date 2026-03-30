import z from 'zod'

export const tokenSchema = z.object({
	sub: z.uuid(),
	role: z.enum(['ADMIN', 'TECHNICIAN', 'CLIENT']).optional()
})

export type UserPayload = z.infer<typeof tokenSchema>
