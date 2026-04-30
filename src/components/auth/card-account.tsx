import { NavLink } from 'react-router'

interface CardAccountProps {
	title: string
	description: string
	buttonText: string
	link: string
}

export function CardAccount({ title, description, buttonText, link }: CardAccountProps) {
	return (
		<section className="mt-3 w-full rounded-[10px] border border-gray-500 p-7">
			<h2 className="font-lato text-xl font-bold text-gray-200">{title}</h2>

			<p className="font-lato text-xs text-gray-300">{description}</p>

			<div className="mt-10">
				<NavLink to={link}>
					<button className="font-lato flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-500 px-4 py-2.5 text-sm font-bold text-gray-200">
						{buttonText}
					</button>
				</NavLink>
			</div>
		</section>
	)
}
