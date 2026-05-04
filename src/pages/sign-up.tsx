import { Card } from '@components/auth/card'
import { CardAccount } from '@components/auth/card-account'
import { Header } from '@components/auth/header'
import { InputField } from '@components/auth/input-field'
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
						text="nome"
						placeholder="Digite o nome completo"
						{...register('name')}
					/>

					<InputField
						id="email"
						text="e-mail"
						placeholder="exemplo@mail.com"
						{...register('email')}
					/>

					<InputField
						id="password"
						text="senha"
						placeholder="Digite sua senha"
						{...register('password')}
					/>

					<span className="font-lato -mt-2 text-xs text-gray-400">
						Mínimo de 6 dígitos
					</span>

					<div className="mt-8 sm:mt-10">
						<button className="font-lato flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2.5 text-sm font-bold text-gray-600">
							Cadastrar
						</button>
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
