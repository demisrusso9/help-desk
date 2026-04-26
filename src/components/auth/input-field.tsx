import type { InputHTMLAttributes } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	title: string
	placeholder: string
}

export function InputField({ id, title, placeholder, ...rest }: InputFieldProps) {
	return (
		<div className="flex flex-col gap-2">
			<label
				className="font-lato text-[10px] font-bold text-gray-300 uppercase"
				htmlFor={id}
			>
				{title}
			</label>

			<input
				id={id}
				type="text"
				placeholder={placeholder}
				className="font-lato border-b border-gray-500 py-2 outline-0"
				{...rest}
			/>
		</div>
	)
}
