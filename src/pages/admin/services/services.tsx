import { addService } from '@api/add-service'
import { getServices } from '@api/get-services'
import { updateService, type UpdateServiceRequest } from '@api/update-service'
import { InputField } from '@components/auth/input-field'
import { Button } from '@components/button'
import { Chips } from '@components/chips'
import { Modal } from '@components/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import type { ServiceResponse } from '@interfaces/services'
import { queryClient } from '@services/tanstack-query'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { formatCurrency } from '@utils/format-currency'
import { Ban, CircleCheck, PenLine, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const createServiceFormSchema = z.object({
	title: z.string().min(2).max(100),
	value: z.string().min(3)
})

type CreateServiceFormData = z.infer<typeof createServiceFormSchema>

export function Services() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [editingService, setEditingService] = useState<ServiceResponse | null>(null)

	const { register, handleSubmit, reset } = useForm({
		resolver: zodResolver(createServiceFormSchema)
	})

	const { data: services } = useSuspenseQuery({
		queryKey: ['services'],
		queryFn: getServices
	})

	const sortedServicesAlphabetically = services.sort((a, b) =>
		a.name.localeCompare(b.name)
	)

	const { mutateAsync: mutateAddService } = useMutation({
		mutationFn: addService,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['services']
			})
		}
	})

	const { mutateAsync: mutateUpdateService } = useMutation({
		mutationFn: updateService,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['services']
			})
		}
	})

	async function onSubmit(data: CreateServiceFormData) {
		if (editingService) {
			await mutateUpdateService({
				id: editingService.id,
				name: data.title,
				priceInCents: Number(data.value) * 100
			})
		} else {
			await mutateAddService({
				name: data.title,
				priceInCents: Number(data.value) * 100
			})
		}

		setIsModalOpen(false)
		setEditingService(null)

		reset({ title: '', value: '' })
	}

	async function changeServiceStatus(service: UpdateServiceRequest, status: boolean) {
		await mutateUpdateService({
			id: service.id,
			isActive: status
		})
	}

	function handleOpenNewServiceModal() {
		setEditingService(null)
		setIsModalOpen(true)
	}

	function handleCloseModal() {
		setIsModalOpen(false)
		setEditingService(null)
		reset({ title: '', value: '' })
	}

	useEffect(() => {
		if (editingService && isModalOpen) {
			reset({
				title: editingService.name,
				value: String(editingService.priceInCents / 100)
			})
		}
	}, [editingService, isModalOpen, reset])

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-blue-dark font-lato text-xl font-bold sm:text-2xl">
					Serviços
				</h1>

				<div>
					<Button
						title="Novo"
						Icon={Plus}
						variant="primary"
						onClick={handleOpenNewServiceModal}
					/>
				</div>
			</div>

			<div className="mt-4 overflow-hidden rounded-[10px] border border-gray-500 sm:mt-6">
				<table className="w-full">
					<thead>
						<tr className="border border-gray-500">
							<th className="p-3 text-start text-sm font-normal text-gray-400">Título</th>

							<th className="p-3 text-start text-sm font-normal text-gray-400 md:table-cell">
								Valor
							</th>

							<th className="p-3 text-start text-sm font-normal text-gray-400 md:table-cell">
								Status
							</th>

							<th></th>
						</tr>
					</thead>

					<tbody>
						{sortedServicesAlphabetically.map((service) => (
							<tr className="border border-gray-500" key={service.id}>
								<td className="font-lato p-3 text-xs text-gray-200">{service.name}</td>

								<td className="font-lato p-3 text-xs font-bold wrap-anywhere text-gray-200 md:table-cell">
									{formatCurrency(service.priceInCents)}
								</td>

								<td className="font-lato p-3 text-xs font-bold wrap-anywhere text-gray-200 md:table-cell">
									{service.isActive ? (
										<Chips text="Ativo" type="active" />
									) : (
										<Chips text="Inativo" type="inactive" />
									)}
								</td>

								<td className="flex cursor-pointer items-center justify-end gap-2 p-3 pr-4">
									<div className="flex rounded-md bg-gray-500 p-2">
										{service.isActive ? (
											<Ban
												className="text-gray-200"
												width={14}
												height={14}
												onClick={() => changeServiceStatus(service, false)}
											/>
										) : (
											<CircleCheck
												className="text-gray-200"
												width={14}
												height={14}
												onClick={() => changeServiceStatus(service, true)}
											/>
										)}
									</div>

									<div
										className="flex rounded-md bg-gray-500 p-2"
										onClick={() => {
											setEditingService(service)
											setIsModalOpen(true)
										}}
									>
										<PenLine className="text-gray-200" width={14} height={14} />
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Modal
				title={editingService ? 'Editar serviço' : 'Cadastro de serviço'}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			>
				<form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<InputField
						id="title"
						text="Título"
						placeholder="Nome do serviço"
						type="text"
						{...register('title')}
					/>

					<InputField
						id="value"
						text="Valor"
						placeholder="Digite o valor do serviço"
						type="number"
						{...register('value')}
					/>

					<div className="my-8 sm:mt-10">
						<button
							type="submit"
							className="font-lato flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2.5 text-sm font-bold text-gray-600"
						>
							Salvar
						</button>
					</div>
				</form>
			</Modal>
		</>
	)
}
