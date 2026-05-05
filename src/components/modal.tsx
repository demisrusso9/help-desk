import { X } from 'lucide-react'
import { type ReactNode } from 'react'

interface ModalProps {
	title: string
	isOpen: boolean
	onClose: () => void
	children: ReactNode
}

export function Modal({ title, isOpen, onClose, children }: ModalProps) {
	if (!isOpen) return null

	return (
		<div
			className="fixed inset-0 bg-gray-200/50 p-4 backdrop-blur-sm transition-opacity duration-200"
			onClick={onClose}
		>
			<div
				className="relative top-1/2 left-1/2 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-600 px-7"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between border-b border-gray-500 py-5.25">
					<p>{title}</p>
					<X className="h-4.5 w-4.5 cursor-pointer text-gray-300" onClick={onClose} />
				</div>

				{children}
			</div>
		</div>
	)
}
