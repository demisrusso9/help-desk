import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const createUserFormSchema = z.object({
	email: z.email(),
	password: z.string()
})

type UserForm = z.infer<typeof createUserFormSchema>

export function SignIn() {
	const { register, handleSubmit } = useForm({
		resolver: zodResolver(createUserFormSchema)
	})

	function submit(data: UserForm) {
		console.log(data)
	}

	return (
		<div className="flex h-screen items-start bg-[url('background.png')] bg-cover bg-center bg-no-repeat">
			<div className="mt-8 ml-auto flex h-screen w-full flex-col items-center rounded-t-3xl bg-gray-600 p-6 md:mt-0 md:w-1/2 md:rounded-tl-3xl">
				<div className="flex w-full flex-col md:max-w-120 lg:w-full">
					<header className="mx-auto flex items-center gap-3">
						<img src="logo-icon-dark.svg" width="40" height="40" alt="logo" />
						<h1 className="text-blue-dark font-lato text-2xl">HelpDesk</h1>
					</header>

					<section className="mt-8 w-full rounded-[10px] border border-gray-500 p-7">
						<h2 className="font-lato text-xl font-bold text-gray-200">Acesse o portal</h2>
						<p className="font-lato text-xs text-gray-300">
							Entre usando seu e-mail e senha cadastrados
						</p>

						<form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
							<div className="flex flex-col gap-2">
								<label
									className="font-lato text-[10px] font-bold text-gray-300 uppercase"
									htmlFor="email"
								>
									e-mail
								</label>

								<input
									id="email"
									type="text"
									{...register('email')}
									placeholder="exemplo@mail.com"
									className="font-lato border-b border-gray-500 py-2 outline-0"
								/>
							</div>

							<div className="flex flex-col gap-2">
								<label
									className="font-lato text-[10px] font-bold text-gray-300 uppercase"
									htmlFor="password"
								>
									senha
								</label>

								<input
									id="password"
									type="text"
									{...register('password')}
									placeholder="Digite sua senha"
									className="font-lato border-b border-gray-500 py-2 outline-0"
								/>
							</div>

							<button className="font-lato mt-10 cursor-pointer rounded-md bg-gray-200 p-4 text-sm text-gray-600">
								Entrar
							</button>
						</form>
					</section>

					<section className="mt-3 w-full rounded-[10px] border border-gray-500 p-7">
						<h2 className="font-lato text-xl font-bold text-gray-200">
							Ainda não tem uma conta?
						</h2>

						<p className="font-lato text-xs text-gray-300">Cadastre agora mesmo</p>

						<button className="font-lato mt-10 w-full cursor-pointer rounded-md bg-gray-500 p-4 text-sm text-gray-200">
							Criar conta
						</button>
					</section>
				</div>
			</div>
		</div>
	)
}
