import 'dotenv/config'
import z from 'zod'

export const envsSchema = z.object({
	DATABASE_URL: z.string(),
	PORT: z.coerce.number().default(3333),
	HOST: z.string()
})

const { data, error } = envsSchema.safeParse(process.env)

if (error) {
	console.error('Invalid environment variables:', z.prettifyError(error))
	throw new Error('Invalid environment variables')
}

export type Envs = z.infer<typeof envsSchema>
export const envs: Envs = data
