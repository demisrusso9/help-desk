import type { LucideIcon } from 'lucide-react'

interface ButtonProps {
	title: string
	variant: 'primary' | 'secondary'
	Icon?: LucideIcon
}

export function Button({ title, variant, Icon }: ButtonProps) {
	const primary = 'bg-gray-200 text-gray-600'
	const secondary = 'bg-gray-500 text-gray-200'

	const style = variant === 'primary' ? primary : secondary

	return (
		<button
			className={`${style} font-lato mt-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md p-4 text-sm`}
		>
			{Icon && <Icon className="h-5 w-5 text-gray-300" />}
			{title}
		</button>
	)
}
