import { InputField } from '@components/auth/input-field'
import { Button } from '@components/button'
import { Chips } from '@components/chips'
import { Modal } from '@components/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { Ban, CircleCheck, PenLine, Plus } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const userFormSchema = z.object({
	title: z.string().min(2).max(100),
	value: z.string().min(3)
})

export function Services() {
	const datarow = [
		{
			id: 1,
			title: 'Instalação de Rede',
			value: 'R$ 150,00',
			status: 'Ativo'
		},
		{
			id: 2,
			title: 'Manutenção de Computadores',
			value: 'R$ 200,00',
			status: 'Ativo'
		},
		{
			id: 3,
			title: 'Consultoria de TI',
			value: 'R$ 300,00',
			status: 'Inativo'
		}
	]

	const [isModalOpen, setIsModalOpen] = useState(false)

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(userFormSchema)
	})

	function onSubmit() {}

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-blue-dark font-lato text-xl font-bold sm:text-2xl">
					Clientes
				</h1>

				<div>
					<Button
						title="Novo"
						Icon={Plus}
						variant="primary"
						onClick={() => setIsModalOpen(true)}
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
						{datarow.map((data) => (
							<tr className="border border-gray-500" key={data.id}>
								<td className="font-lato p-3 text-xs text-gray-200">{data.title}</td>

								<td className="font-lato p-3 text-xs font-bold wrap-anywhere text-gray-200 md:table-cell">
									{data.value}
								</td>

								<td className="font-lato p-3 text-xs font-bold wrap-anywhere text-gray-200 md:table-cell">
									{data.status === 'Ativo' ? (
										<Chips text={data.status} type="active" />
									) : (
										<Chips text={data.status} type="inactive" />
									)}
								</td>

								<td className="flex cursor-pointer items-center justify-end gap-2 p-3 pr-4">
									<div className="flex rounded-md bg-gray-500 p-2">
										{data.status === 'Ativo' ? (
											<Ban className="text-gray-200" width={14} height={14} />
										) : (
											<CircleCheck className="text-gray-200" width={14} height={14} />
										)}
									</div>

									<div
										className="flex rounded-md bg-gray-500 p-2"
										onClick={() => setIsModalOpen(true)}
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
				title="Cadastro de serviço"
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			>
				<form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<InputField
						id="title"
						text="Título"
						placeholder="Nome do serviço"
						{...register('title')}
					/>

					<InputField
						id="value"
						text="Valor"
						placeholder="Digite o valor do serviço"
						{...register('value')}
					/>

					<div className="my-8 sm:mt-10">
						<button className="font-lato flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2.5 text-sm font-bold text-gray-600">
							Salvar
						</button>
					</div>
				</form>
			</Modal>
		</>
	)
}
