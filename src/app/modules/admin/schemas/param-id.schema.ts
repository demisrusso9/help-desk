import z from 'zod'

export const paramIdSchema = z.string()

export type ParamIdDTO = z.infer<typeof paramIdSchema>
