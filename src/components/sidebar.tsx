import { MenuLink } from '@components/sidebar/menu-link'
import { BriefcaseBusiness, ClipboardList, Users, Wrench } from 'lucide-react'

export function Sidebar() {
	return (
		<div className="flex w-full max-w-50 flex-col bg-gray-100">
			<header className="mx-auto flex items-center gap-3 border-b border-gray-200 px-5 py-6">
				<img src="logo-icon-light.svg" width="44" height="44" alt="logo" />

				<div className="flex flex-col justify-center gap-2">
					<h1 className="font-lato -mb-2 text-xl text-gray-600">HelpDesk</h1>
					<span className="text-blue-light font-lato text-[10px] uppercase">admin</span>
				</div>
			</header>

			<section className="flex flex-col p-5">
				<MenuLink text="Chamados" Icon={ClipboardList} link="/admin/tickets" />
				<MenuLink text="Técnicos" Icon={Users} link="/admin/technicians" />
				<MenuLink text="Clientes" Icon={BriefcaseBusiness} link="/admin/clients" />
				<MenuLink text="Serviços" Icon={Wrench} link="/admin/services" />
			</section>

			<footer className="mt-auto flex items-center gap-3 border-t border-gray-200 px-5 py-6">
				<div className="bg-blue-dark flex h-8 w-8 items-center justify-center rounded-full">
					<p className="font-lato text-sm text-gray-600 uppercase">DR</p>
				</div>

				<div className="-gap-2 flex flex-col justify-center">
					<h1 className="font-lato text-sm text-gray-600">HelpDesk</h1>
					<span className="font-lato text-xs text-gray-400 uppercase">admin</span>
				</div>
			</footer>
		</div>
	)
}
