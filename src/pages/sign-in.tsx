import { Card } from '@components/auth/card'
import { CardAccount } from '@components/auth/card-account'
import { Header } from '@components/auth/header'
import { InputField } from '@components/auth/input-field'
import { Button } from '@components/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const userFormSchema = z.object({
	email: z.email(),
	password: z.string()
})

type UserForm = z.infer<typeof userFormSchema>

export function SignIn() {
	const { register, handleSubmit } = useForm({
		resolver: zodResolver(userFormSchema)
	})

	function onSubmit(data: UserForm) {
		console.log(data)
	}

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

					<div className="mt-10">
						<Button title="Entrar" variant="primary" />
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
