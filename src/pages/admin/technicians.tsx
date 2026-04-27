import { Chips } from '@components/chips'
import { PenLine } from 'lucide-react'
import { NavLink } from 'react-router'

export function Technicians() {
	const datarow = [
		{
			id: 1,
			name: 'Carlos Silva',
			email: 'carlos.silva@test.com',
			availabilities: ['08:00', '09:00']
		},
		{
			id: 2,
			name: 'Carlos Silva',
			email: 'carlos.silva@test.com',
			availabilities: ['08:00', '09:00', '10:00', '12:00', '14:00', '18:00']
		},
		{
			id: 3,
			name: 'Carlos Silva',
			email: 'carlos.silva@test.com',
			availabilities: ['08:00', '09:00', '10:00', '12:00', '14:00']
		},
		{
			id: 4,
			name: 'Carlos Silva',
			email: 'carlos.silva@test.com',
			availabilities: ['08:00', '09:00', '10:00', '12:00']
		}
	]

	return (
		<>
			<h1 className="text-blue-dark font-lato text-xl font-bold sm:text-2xl">Técnicos</h1>

			<div className="mt-4 overflow-hidden rounded-[10px] border border-gray-500 sm:mt-6">
				<table className="w-full">
					<thead>
						<tr className="border border-gray-500">
							<th className="p-3 text-start text-sm font-normal text-gray-400">Nome</th>

							<th className="hidden p-3 text-start text-sm font-normal text-gray-400 md:table-cell">
								E-mail
							</th>

							<th className="p-3 text-start text-sm font-normal text-gray-400">
								Disponibilidade
							</th>

							<th></th>
						</tr>
					</thead>

					<tbody>
						{datarow.map((data) => (
							<tr className="border border-gray-500" key={data.id}>
								<td className="font-lato p-3 text-xs text-gray-200">{data.name}</td>

								<td className="font-lato hidden p-3 text-xs font-bold text-gray-200 md:table-cell">
									{data.email}
								</td>

								<td className="font-lato p-3 text-sm text-gray-200 sm:table-cell">
									<div className="flex gap-1">
										<div className="hidden sm:flex">
											{data.availabilities
												.map((chip) => <Chips key={chip} text={chip} />)
												.slice(0, 4)}
										</div>

										<div className="flex sm:hidden">
											{data.availabilities
												.map((chip) => <Chips key={chip} text={chip} />)
												.slice(0, 1)}
										</div>

										<div className="hidden sm:flex">
											{data.availabilities.slice(4).length > 0 && (
												<Chips text={String('+' + data.availabilities.slice(4).length)} />
											)}
										</div>

										<div className="flex sm:hidden">
											{data.availabilities.slice(0).length > 0 && (
												<Chips
													text={
														'+' + String(Number(data.availabilities.slice(0).length - 1))
													}
												/>
											)}
										</div>
									</div>
								</td>

								<td className="cursor-pointer pr-4">
									<NavLink to={`/admin/technicians/update/${data.id}`}>
										<div className="flex items-center justify-center rounded-md bg-gray-500 p-2">
											<PenLine className="text-gray-200" width={14} height={14} />
										</div>
									</NavLink>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}
