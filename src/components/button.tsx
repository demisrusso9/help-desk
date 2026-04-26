interface ButtonProps {
	title: string
	variant: 'primary' | 'secondary'
}

export function Button({ title, variant }: ButtonProps) {
	const primary = 'bg-gray-200 text-gray-600'
	const secondary = 'bg-gray-500 text-gray-200'

	const style = variant === 'primary' ? primary : secondary

	return (
		<button
			className={`${style} font-lato mt-10 w-full cursor-pointer rounded-md p-4 text-sm`}
		>
			{title}
		</button>
	)
}
