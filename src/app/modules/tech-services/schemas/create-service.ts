import z from 'zod'

export const createServiceSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	description: z.string().nullish(),
	priceInCents: z.number().int().positive('Price must be a positive integer'),
	isActive: z.boolean().default(true)
})

export type CreateServiceDTO = z.infer<typeof createServiceSchema>
