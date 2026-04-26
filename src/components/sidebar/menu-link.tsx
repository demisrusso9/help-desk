import type { LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router'

interface MenuLinkProps {
	text: string
	Icon: LucideIcon
	link: string
}

export function MenuLink({ text, Icon, link }: MenuLinkProps) {
	return (
		<NavLink
			to={link}
			className={({ isActive }) =>
				isActive ? 'bg-blue-dark rounded-md text-gray-600' : 'text-gray-400'
			}
		>
			<li className="flex gap-3 rounded-md p-3">
				<Icon className="h-5 w-5" />
				<span className="font-lato text-sm">{text}</span>
			</li>
		</NavLink>
	)
}
