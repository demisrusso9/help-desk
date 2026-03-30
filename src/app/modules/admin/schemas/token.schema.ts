import z from 'zod'

export const tokenSchema = z.object({
	sub: z.uuid()
})

export type UserPayload = z.infer<typeof tokenSchema>
