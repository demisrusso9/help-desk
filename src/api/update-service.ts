import type { ServiceResponse } from '@interfaces/services'
import { api } from '@services/axios'

export interface UpdateServiceRequest {
	id: string
	name?: string
	priceInCents?: number
	isActive?: boolean
}

export async function updateService(service: UpdateServiceRequest) {
	await api.patch<ServiceResponse[]>(`/admin/services/update`, service)
}
