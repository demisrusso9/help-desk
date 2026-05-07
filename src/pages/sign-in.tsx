import { Card } from '@components/auth/card'
import { CardAccount } from '@components/auth/card-account'
import { Header } from '@components/auth/header'
import { InputField } from '@components/auth/input-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import z from 'zod'
import { useAuth } from '../context/auth'

const userFormSchema = z.object({
	email: z.email(),
	password: z.string()
})

type UserForm = z.infer<typeof userFormSchema>

export function SignIn() {
	const navigate = useNavigate()
	const { handleSignIn, currentUser } = useAuth()

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(userFormSchema)
	})

	async function onSubmit({ email, password }: UserForm) {
		await handleSignIn(email, password)
	}

	useEffect(() => {
		if (currentUser?.role === 'ADMIN') {
			navigate('/admin/tickets')
		}
	}, [currentUser, navigate])

	return (
		<>
			<Header />

			<Card
				title="Acesse o portal"
				description="Entre usando seu e-mail e senha cadastrados"
			>
				<form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<InputField
						id="email"
						text="e-mail"
						placeholder="exemplo@mail.com"
						type="text"
						{...register('email')}
					/>

					<InputField
						id="password"
						text="senha"
						type="text"
						placeholder="Digite sua senha"
						{...register('password')}
					/>

					<div className="mt-8 sm:mt-10">
						<button className="font-lato flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2.5 text-sm font-bold text-gray-600">
							Entrar
						</button>
					</div>
				</form>
			</Card>

			<CardAccount
				title="Ainda não tem uma conta?"
				description="Cadastre agora mesmo"
				buttonText="Criar conta"
				link="/sign-up"
			/>
		</>
	)
}
