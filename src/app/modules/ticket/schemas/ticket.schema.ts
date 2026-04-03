import { z } from 'zod'

export const ticketSchema = z.object({
	clientId: z.string(),
	technicianId: z.string(),
	serviceIds: z.array(z.string())
})

export const createTicketSchema = ticketSchema.omit({ clientId: true })

export type CreateTicketDTO = Omit<z.infer<typeof ticketSchema>, 'clientId'>
export type PrismaCreateTicketDTO = z.infer<typeof ticketSchema>
