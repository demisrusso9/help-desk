export interface ServiceResponse {
	id: string
	name: string
	priceInCents: number
	isActive: boolean
	description?: string | null | undefined
	createdAt?: Date | undefined
	updatedAt?: Date | null | undefined
}
