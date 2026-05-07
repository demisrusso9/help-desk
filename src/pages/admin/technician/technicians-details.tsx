import { InputField } from '@components/auth/input-field'
import { Chips } from '@components/chips'
import { TopHeader } from '@components/top-header'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import z from 'zod'

const userFormSchema = z.object({
	name: z.string(),
	email: z.email(),
	password: z.string()
})

export function TechniciansDetails() {
	const dateHoursMorning = ['08:00', '09:00', '10:00', '11:00', '12:00']
	const dateHoursAfternoon = ['14:00', '15:00', '16:00', '17:00', '18:00']
	const dateHoursNight = ['19:00', '20:00', '21:00', '22:00', '23:00']

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(userFormSchema)
	})

	function onSubmit() {}

	const { id } = useParams()
	const isEdit = Boolean(id)

	return (
		<>
			<TopHeader
				title="Perfil de técnico"
				buttonPrimaryText="Salvar"
				buttonSecondaryText="Cancelar"
			/>

			<div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
				<section className="w-full rounded-[10px] border border-gray-500 p-7">
					<h4 className="font-lato text-base font-bold text-gray-200">Dados pessoais</h4>

					<p className="font-lato mb-6 text-xs text-gray-300">
						Defina as informações do perfil de técnico
					</p>

					<footer className="flex items-center sm:mt-auto sm:items-center">
						<div className="bg-blue-dark flex h-12 w-12 items-center justify-center rounded-full">
							<p className="font-lato text-[21px] text-gray-600 uppercase">DR</p>
						</div>
					</footer>

					<form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
						<InputField
							id="name"
							text="nome"
							placeholder="Digite seu nome"
							type="text"
							{...register('name')}
						/>

						<InputField
							id="email"
							text="e-mail"
							placeholder="exemplo@mail.com"
							type="text"
							{...register('email')}
						/>

						{!isEdit && (
							<>
								<InputField
									id="password"
									text="senha"
									placeholder="Digite sua senha"
									type="text"
									{...register('password')}
								/>

								<span className="font-lato -mt-2 text-xs text-gray-400">
									Mínimo de 6 dígitos
								</span>
							</>
						)}
					</form>
				</section>

				<section className="h-fit w-full rounded-[10px] border border-gray-500 p-7">
					<h4 className="font-lato text-base font-bold text-gray-200">
						Horários de atendimento
					</h4>

					<p className="font-lato mb-6 text-xs text-gray-300">
						Selecione os horários de disponibilidade do técnico para atendimento
					</p>

					<section className="flex flex-col gap-5">
						<div className="flex flex-col">
							<h5 className="mb-2 text-xs font-bold text-gray-300 uppercase">Manhã</h5>

							<div className="flex flex-wrap gap-2">
								{dateHoursMorning.map((hour, i) => (
									<Chips key={i} text={hour} type="preview" />
								))}
							</div>
						</div>

						<div className="flex flex-col">
							<h5 className="mb-2 text-xs font-bold text-gray-300 uppercase">Tarde</h5>

							<div className="flex flex-wrap gap-2">
								{dateHoursAfternoon.map((hour, i) => (
									<Chips key={i} text={hour} type="preview" />
								))}
							</div>
						</div>

						<div className="flex flex-col">
							<h5 className="mb-2 text-xs font-bold text-gray-300 uppercase">Noite</h5>

							<div className="flex flex-wrap gap-2">
								{dateHoursNight.map((hour, i) => (
									<Chips key={i} text={hour} type="preview" />
								))}
							</div>
						</div>
					</section>
				</section>
			</div>
		</>
	)
}
