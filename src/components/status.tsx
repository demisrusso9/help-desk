import { CircleCheckBig, CircleHelp, Clock2, type LucideIcon } from 'lucide-react'

interface StatusProps {
	text: 'Aberto' | 'Em atendimento' | 'Encerrado'
}

type StatusType = 'Aberto' | 'Em atendimento' | 'Encerrado'

interface StatusConfig {
	color: string
	bgColor: string
	icon: LucideIcon
}

export function Status({ text }: StatusProps) {
	const statusMap: Record<StatusType, StatusConfig> = {
		Aberto: {
			color: 'text-feedback-open',
			bgColor: 'bg-feedback-open/20',
			icon: CircleHelp
		},
		'Em atendimento': {
			color: 'text-feedback-progress',
			bgColor: 'bg-feedback-progress/20',
			icon: Clock2
		},
		Encerrado: {
			color: 'text-feedback-done',
			bgColor: 'bg-feedback-done/20',
			icon: CircleCheckBig
		}
	}

	const { color, bgColor, icon: Icon } = statusMap[text]

	return (
		<div
			className={`${bgColor} flex w-fit items-center justify-center gap-1.5 rounded-full p-1.5`}
		>
			<Icon className={`${color}`} width={16} height={16} />
			<span className={`${color} hidden pr-1.5 text-xs font-bold md:block`}>{text}</span>
		</div>
	)
}
