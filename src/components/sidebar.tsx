import { MenuLink } from '@components/sidebar/menu-link'
import { BriefcaseBusiness, ClipboardList, Menu, Users, Wrench } from 'lucide-react'

export function Sidebar() {
	return (
		<div className="flex w-full justify-between bg-gray-100 sm:max-w-50 sm:flex-col">
			<header className="flex items-start justify-between gap-3 border-b border-gray-200 px-5 py-6 sm:mx-auto sm:items-center">
				<div className="flex h-full items-center justify-center sm:hidden">
					<Menu className="text-gray-600" width={20} height={20} />
				</div>

				<img src="/logo-icon-light.svg" width="44" height="44" alt="logo" />

				<div className="flex flex-col justify-center gap-2">
					<h1 className="font-lato -mb-2 text-xl text-gray-600">HelpDesk</h1>
					<span className="text-blue-light font-lato text-[10px] uppercase">admin</span>
				</div>
			</header>

			<section className="hidden p-5 sm:flex sm:flex-col">
				<MenuLink text="Chamados" Icon={ClipboardList} link="/admin/tickets" />
				<MenuLink text="Técnicos" Icon={Users} link="/admin/technicians" />
				<MenuLink text="Clientes" Icon={BriefcaseBusiness} link="/admin/clients" />
				<MenuLink text="Serviços" Icon={Wrench} link="/admin/services" />
			</section>

			<footer className="flex items-start gap-3 border-t border-gray-200 px-5 py-6 sm:mt-auto sm:items-center">
				<div className="bg-blue-dark flex h-8 w-8 items-center justify-center rounded-full">
					<p className="font-lato text-sm text-gray-600 uppercase">DR</p>
				</div>

				<div className="-gap-2 hidden flex-col justify-center sm:flex">
					<h1 className="font-lato text-sm text-gray-600">HelpDesk</h1>
					<span className="font-lato text-xs text-gray-400 uppercase">admin</span>
				</div>
			</footer>
		</div>
	)
}
