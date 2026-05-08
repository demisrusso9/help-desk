import type { ServiceResponse } from '@interfaces/services'
import { api } from '@services/axios'

export async function getServices() {
	const { data } = await api.get<ServiceResponse[]>('/admin/services/list')

	return data
}
