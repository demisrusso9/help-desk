import z from 'zod'

export const updateServiceSchema = z.object({
	id: z.string(),
	name: z.string().min(1, 'Name is required').optional(),
	description: z.string().nullish(),
	priceInCents: z.number().int().positive('Price must be a positive integer').optional(),
	isActive: z.boolean().default(true).optional()
})

export type UpdateServiceDTO = z.infer<typeof updateServiceSchema>
