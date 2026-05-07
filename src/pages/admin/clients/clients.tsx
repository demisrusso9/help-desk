import { InputField } from '@components/auth/input-field'
import { Button } from '@components/button'
import { Modal } from '@components/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { PenLine, Trash } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const userFormSchema = z.object({
	email: z.email(),
	password: z.string()
})

export function Clients() {
	const datarow = [
		{
			id: 1,
			name: 'Carlos Silva',
			email: 'carlos.silva@test.com'
		},
		{
			id: 2,
			name: 'Carlos Silva',
			email: 'carlos.silva@test.com'
		},
		{
			id: 3,
			name: 'Carlos Silva',
			email: 'carlos.silva@test.com'
		},
		{
			id: 4,
			name: 'Carlos Silva',
			email: 'carlos.silva@test.com'
		}
	]

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(userFormSchema)
	})

	function onSubmit() {}

	return (
		<>
			<h1 className="text-blue-dark font-lato text-xl font-bold sm:text-2xl">Clientes</h1>

			<div className="mt-4 overflow-hidden rounded-[10px] border border-gray-500 sm:mt-6">
				<table className="w-full">
					<thead>
						<tr className="border border-gray-500">
							<th className="p-3 text-start text-sm font-normal text-gray-400">Nome</th>

							<th className="p-3 text-start text-sm font-normal text-gray-400 md:table-cell">
								E-mail
							</th>

							<th></th>
						</tr>
					</thead>

					<tbody>
						{datarow.map((data) => (
							<tr className="border border-gray-500" key={data.id}>
								<td className="font-lato p-3 text-xs text-gray-200">{data.name}</td>

								<td className="font-lato p-3 text-xs font-bold wrap-anywhere text-gray-200 md:table-cell">
									{data.email}
								</td>

								<td className="flex cursor-pointer items-center justify-end gap-2 p-3 pr-4">
									<div
										className="flex rounded-md bg-gray-500 p-2"
										onClick={() => setIsDeleteModalOpen(true)}
									>
										<Trash className="text-feedback-danger" width={14} height={14} />
									</div>

									<div
										className="flex rounded-md bg-gray-500 p-2"
										onClick={() => setIsEditModalOpen(true)}
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
				title="Excluir cliente"
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
			>
				<div className="flex flex-col gap-2 py-7">
					<p className="font-lato text-base text-gray-200">
						Deseja realmente excluir <strong>André Costa?</strong>
					</p>

					<p className="font-lato text-base text-gray-200">
						Ao excluir, todos os chamados deste cliente serão removidos e esta ação não
						poderá ser desfeita.
					</p>
				</div>

				<div className="flex gap-2 border-t border-gray-500 py-6">
					<Button
						title="Cancelar"
						variant="secondary"
						onClick={() => setIsDeleteModalOpen(false)}
					/>
					<Button title="Sim, excluir" variant="primary" />
				</div>
			</Modal>

			<Modal
				title="Cliente"
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
			>
				<form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<InputField
						id="email"
						text="e-mail"
						placeholder="exemplo@mail.com"
						type="text"
						{...register('email')}
					/>

					<InputField
						id="password"
						text="senha"
						placeholder="Digite sua senha"
						type="text"
						{...register('password')}
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
