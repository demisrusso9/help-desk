import type { ServiceResponse } from '@interfaces/services'
import { api } from '@services/axios'

interface AddServiceRequest {
	name: string
	priceInCents: number
}

export async function addService(service: AddServiceRequest) {
	await api.post<ServiceResponse[]>('/admin/services/create', service)
}
