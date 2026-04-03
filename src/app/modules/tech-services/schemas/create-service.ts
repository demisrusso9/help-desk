import z from 'zod'

export const serviceSchema = z.object({
	id: z.string().optional(),
	name: z.string().min(1, 'Name is required'),
	description: z.string().nullish(),
	priceInCents: z.number().int().positive('Price must be a positive integer'),
	isActive: z.boolean().default(true),
	createdAt: z.date().optional(),
	updatedAt: z.date().nullish()
})

export const createServiceSchema = serviceSchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true
})

export type CreateServiceDTO = z.infer<typeof createServiceSchema>
export type ResponseServiceDTO = z.infer<typeof serviceSchema>
