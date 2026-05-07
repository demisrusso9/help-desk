import type { InputHTMLAttributes } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	text: string
	placeholder: string
	type: string
}

export function InputField({ id, text, placeholder, type, ...rest }: InputFieldProps) {
	return (
		<div className="flex flex-col gap-2">
			<label
				className="font-lato text-[10px] font-bold text-gray-300 uppercase"
				htmlFor={id}
			>
				{text}
			</label>

			{type === 'number' ? (
				<div className="flex w-full items-center border-b border-gray-500">
					<span className="text-gray-200">R$</span>

					<input
						id={id}
						type={type}
						placeholder={placeholder}
						min="0"
						className="font-lato w-full border-b border-gray-500 py-2 pl-2 outline-0"
						{...rest}
					/>
				</div>
			) : (
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					className="font-lato border-b border-gray-500 py-2 outline-0"
					{...rest}
				/>
			)}
		</div>
	)
}
