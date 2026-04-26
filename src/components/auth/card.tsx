interface CardProps {
	title: string
	description: string
	children: React.ReactNode
}

export function Card({ title, description, children }: CardProps) {
	return (
		<section className="mt-8 w-full rounded-[10px] border border-gray-500 p-7">
			<h2 className="font-lato text-xl font-bold text-gray-200">{title}</h2>
			<p className="font-lato text-xs text-gray-300">{description}</p>

			{children}
		</section>
	)
}
