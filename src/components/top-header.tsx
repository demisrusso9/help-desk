import { ArrowLeft, type LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import { Button } from './button'

interface TopHeaderProps {
	title: string
	buttonPrimaryText: string
	buttonSecondaryText: string
	iconPrimary?: LucideIcon
	iconSecondary?: LucideIcon
}

export function TopHeader({
	title,
	buttonPrimaryText,
	buttonSecondaryText,
	iconPrimary,
	iconSecondary
}: TopHeaderProps) {
	const navigate = useNavigate()

	return (
		<div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
			<div className="flex w-full flex-col">
				<button
					className="flex w-full cursor-pointer items-center gap-1"
					onClick={() => navigate(-1)}
				>
					<ArrowLeft width={14} height={14} className="text-gray-300" />
					<span className="text-xs text-gray-300">Voltar</span>
				</button>

				<h1 className="text-blue-dark font-lato w-full justify-self-end text-xl font-bold sm:text-2xl">
					{title}
				</h1>
			</div>

			<div className="mt-4 flex w-full gap-2 sm:justify-end md:mt-0">
				<Button variant="secondary" title={buttonSecondaryText} Icon={iconPrimary} />
				<Button variant="primary" title={buttonPrimaryText} Icon={iconSecondary} />
			</div>
		</div>
	)
}
