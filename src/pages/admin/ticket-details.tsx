import { Button } from '@components/button'
import { Status } from '@components/status'
import { ArrowLeft, CircleCheckBig, Clock2 } from 'lucide-react'
import { useNavigate } from 'react-router'

export function TicketDetails() {
	const navigate = useNavigate()

	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center md:justify-between">
				<div className="flex w-full flex-col">
					<button
						className="flex w-full cursor-pointer items-center gap-1"
						onClick={() => navigate(-1)}
					>
						<ArrowLeft width={14} height={14} className="text-gray-300" />
						<span className="text-xs text-gray-300">Voltar</span>
					</button>

					<h1 className="text-blue-dark font-lato w-full justify-self-end text-xl font-bold sm:text-2xl">
						Chamado detalhado
					</h1>
				</div>

				<div className="flex w-full gap-2">
					<Button variant="secondary" title="Em atendimento" Icon={Clock2} />
					<Button variant="secondary" title="Encerrado" Icon={CircleCheckBig} />
				</div>
			</div>

			<div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
				<section className="w-full rounded-[10px] border border-gray-500 p-7">
					<div className="flex items-center justify-between">
						<span className="font-lato text-xs text-gray-300">00004</span>
						<Status text="Aberto" />
					</div>

					<h2 className="pt-2 pb-5 text-lg font-bold text-gray-200">
						Backup não está funcionando
					</h2>

					<div className="pb-5">
						<h4 className="font-lato text-xs text-gray-400">Descrição</h4>
						<p className="font-lato text-sm text-gray-200">
							O sistema de backup automático parou de funcionar. Última execução
							bem-sucedida foi há uma semana.
						</p>
					</div>

					<div className="pb-5">
						<h4 className="font-lato text-xs text-gray-400">Categoria</h4>
						<p className="font-lato text-sm text-gray-200">Recuperação de Dados</p>
					</div>

					<div className="flex justify-between">
						<div className="pb-5">
							<h4 className="font-lato text-xs text-gray-400">Criado em</h4>
							<p className="font-lato text-sm text-gray-200">12/04/25 09:12</p>
						</div>

						<div className="pb-5">
							<h4 className="font-lato text-xs text-gray-400">Atualizado em</h4>
							<p className="font-lato text-sm text-gray-200">12/04/25 15:20</p>
						</div>
					</div>

					<div>
						<h4 className="font-lato text-xs text-gray-400">Cliente</h4>
						<p className="font-lato text-sm text-gray-200">André Costa</p>
					</div>
				</section>

				<section className="h-fit w-full rounded-[10px] border border-gray-500 p-7">
					<h4 className="font-lato mb-2 text-xs text-gray-400">Técnico responsável</h4>

					<div className="mt-4 flex items-center gap-2 sm:mt-auto sm:items-center">
						<div className="bg-blue-dark flex h-8 w-8 items-center justify-center rounded-full">
							<p className="font-lato text-sm text-gray-600 uppercase">DR</p>
						</div>

						<div className="flex-col items-center justify-center">
							<h2 className="font-lato text-sm text-gray-200">Carlos Silva</h2>
							<span className="font-lato text-xs text-gray-300 uppercase">admin</span>
						</div>
					</div>

					<div className="mt-8">
						<h4 className="font-lato mb-2 text-xs text-gray-400">Valores</h4>

						<div className="mb-4 flex items-center justify-between">
							<p className="font-lato text-xs text-gray-200">Preço base</p>
							<p className="font-lato text-xs text-gray-200">R$ 200,00</p>
						</div>
					</div>

					<div className="mt-8">
						<h4 className="font-lato mb-2 text-xs text-gray-400">Adicionais</h4>

						<div className="flex items-center justify-between">
							<p className="font-lato text-xs text-gray-200">Assinatura de backup</p>
							<p className="font-lato text-xs text-gray-200">R$ 120,00</p>
						</div>

						<div className="mb-4 flex items-center justify-between">
							<p className="font-lato text-xs text-gray-200">Formatação do PC</p>
							<p className="font-lato text-xs text-gray-200">R$ 75,00</p>
						</div>
					</div>

					<div className="flex items-center justify-between border-t border-t-gray-500 py-3">
						<p className="font-lato text-sm font-bold text-gray-200">Total</p>
						<strong className="font-lato text-sm font-bold text-gray-200">
							R$ 395,00
						</strong>
					</div>
				</section>
			</div>
		</>
	)
}
