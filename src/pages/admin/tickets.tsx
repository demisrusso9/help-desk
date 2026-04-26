import { Status } from '@components/status'
import { PenLine } from 'lucide-react'

export function Tickets() {
	const datarow = [
		{
			updatedAt: '13/04/25 20:56',
			id: '00003',
			title: 'Rede lenta',
			service: 'Instalação de Rede',
			price: 'R$ 180,00',
			client: 'André Costa',
			technician: 'Carlos Silva',
			status: 'Aberto'
		},
		{
			updatedAt: '12/04/25 15:20',
			id: '00004',
			title: 'Backup não está funcionando',
			service: 'Recuperação de Dados	',
			price: 'R$ 200,00',
			client: 'André Costa',
			technician: 'Carlos Silva',
			status: 'Aberto'
		},
		{
			updatedAt: '12/04/25 09:01',
			id: '00005',
			title: 'Computador não liga',
			service: 'Manutenção de Hardware	',
			price: 'R$ 80,00',
			client: 'André Costa',
			technician: 'Carlos Silva',
			status: 'Em atendimento'
		},
		{
			updatedAt: '13/04/25 20:56',
			id: '00003',
			title: 'Rede lenta',
			service: 'Instalação de Rede',
			price: 'R$ 180,00',
			client: 'André Costa',
			technician: 'Ana Oliveira',
			status: 'Encerrado'
		},
		{
			updatedAt: '13/04/25 20:56',
			id: '00003',
			title: 'Rede lenta',
			service: 'Instalação de Rede',
			price: 'R$ 180,00',
			client: 'André Costa',
			technician: 'Carlos Silva',
			status: 'Encerrado'
		}
	]

	return (
		<>
			<h1 className="text-blue-dark font-lato text-xl font-bold sm:text-2xl">Chamados</h1>

			<div className="mt-4 overflow-hidden rounded-[10px] border border-gray-500 sm:mt-6">
				<table className="w-full">
					<thead>
						<tr className="border border-gray-500">
							<th className="p-3 text-center text-sm font-normal text-gray-400">
								Atualizado em
							</th>

							<th className="hidden p-3 text-start text-sm font-normal text-gray-400 md:table-cell">
								Id
							</th>

							<th className="p-3 text-start text-sm font-normal text-gray-400">
								Titulo e Serviço
							</th>

							<th className="hidden p-3 text-start text-sm font-normal text-gray-400 sm:table-cell">
								Valor Total
							</th>

							<th className="hidden p-3 text-start text-sm font-normal text-gray-400 sm:table-cell">
								Cliente
							</th>

							<th className="hidden p-3 text-start text-sm font-normal text-gray-400 sm:table-cell">
								Técnico
							</th>

							<th className="p-3 text-start text-sm font-normal text-gray-400">Status</th>

							<th></th>
						</tr>
					</thead>

					<tbody>
						{datarow.map((data, index) => (
							<tr className="border border-gray-500" key={index}>
								<td className="font-lato p-3 text-center text-xs text-gray-200">
									{data.updatedAt}
								</td>

								<td className="font-lato hidden p-3 text-xs font-bold text-gray-200 md:table-cell">
									{data.id}
								</td>

								<td className="flex flex-col p-3">
									<strong className="font-lato text-sm font-bold text-gray-200">
										{data.title}
									</strong>

									<span className="font-lato text-xs text-gray-200">{data.service}</span>
								</td>

								<td className="font-lato hidden p-3 text-sm text-gray-200 sm:table-cell">
									{data.price}
								</td>

								<td className="font-lato hidden p-3 text-sm text-gray-200 sm:table-cell">
									{data.client}
								</td>

								<td className="font-lato hidden p-3 text-sm text-gray-200 sm:table-cell">
									{data.technician}
								</td>

								<td className="font-lato p-3 text-sm text-gray-200">
									<Status text={data.status} />
								</td>

								<td className="cursor-pointer pr-4">
									<div className="flex items-center justify-center rounded-md bg-gray-500 p-2">
										<PenLine className="text-gray-200" width={14} height={14} />
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}
