interface ChipsProps {
	text: string
}

export function Chips({ text }: ChipsProps) {
	return (
		<div className="flex w-fit rounded-full border border-gray-500">
			<span className="px-3 py-[5.5px] text-xs text-gray-400">{text}</span>
		</div>
	)
}
