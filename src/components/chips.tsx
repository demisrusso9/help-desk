import { X, type LucideIcon } from 'lucide-react'

type ChipsVariants = 'preview' | 'editable' | 'active' | 'inactive'

interface ChipsProps {
	text: string
	type: ChipsVariants
}

interface ChipsVariantsConfig {
	color: string
	bgColor: string
	icon?: LucideIcon
}

export function Chips({ text, type }: ChipsProps) {
	const chipsMap: Record<ChipsVariants, ChipsVariantsConfig> = {
		preview: {
			color: 'text-gray-400',
			bgColor: ''
		},
		editable: {
			color: 'font-bold text-gray-600',
			bgColor: 'bg-blue-base',
			icon: X
		},
		active: {
			color: 'text-feedback-done',
			bgColor: 'bg-feedback-done/20'
		},
		inactive: {
			color: 'text-feedback-danger',
			bgColor: 'bg-feedback-danger/20'
		}
	}

	const { color, bgColor, icon: Icon } = chipsMap[type]

	return (
		<div
			className={`${bgColor} flex w-fit items-center justify-center gap-2 rounded-full border border-gray-500 px-3 py-[5.5px]`}
		>
			<span className={`${color} font-lato text-xs`}>{text}</span>

			{Icon && <Icon width={14} height={14} className="cursor-pointer text-gray-600" />}
		</div>
	)
}
