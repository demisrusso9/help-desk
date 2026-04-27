import { Card } from '@components/auth/card'
import { CardAccount } from '@components/auth/card-account'
import { Header } from '@components/auth/header'
import { InputField } from '@components/auth/input-field'
import { Button } from '@components/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const createUserFormSchema = z.object({
	name: z.string(),
	email: z.email(),
	password: z.string()
})

type UserForm = z.infer<typeof createUserFormSchema>

export function SignUp() {
	const { register, handleSubmit } = useForm({
		resolver: zodResolver(createUserFormSchema)
	})

	function onSubmit(data: UserForm) {
		console.log(data)
	}

	return (
		<>
			<Header />

			<Card title="Crie sua conta" description="Informe seu nome, e-mail e senha">
				<form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<InputField
						id="name"
						title="nome"
						placeholder="Digite o nome completo"
						{...register('name')}
					/>

					<InputField
						id="email"
						title="e-mail"
						placeholder="exemplo@mail.com"
						{...register('email')}
					/>

					<InputField
						id="password"
						title="senha"
						placeholder="Digite sua senha"
						{...register('password')}
					/>

					<span className="font-lato -mt-2 text-xs text-gray-400">
						Mínimo de 6 dígitos
					</span>

					<div className="mt-10">
						<Button title="Entrar" variant="primary" />
					</div>
				</form>
			</Card>

			<CardAccount
				title="Já uma conta?"
				description="Entre agora mesmo"
				buttonText="Acessar conta"
				link="/sign-in"
			/>
		</>
	)
}
