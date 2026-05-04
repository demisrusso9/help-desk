import { InputField } from '@components/auth/input-field'
import { Button } from '@components/button'
import { Chips } from '@components/chips'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import z from 'zod'

const userFormSchema = z.object({
	name: z.string(),
	email: z.email()
})

export function TechniciansUpdateDetails() {
	const navigate = useNavigate()

	const dateHoursMorning = ['08:00', '09:00', '10:00', '11:00', '12:00']
	const dateHoursAfternoon = ['14:00', '15:00', '16:00', '17:00', '18:00']
	const dateHoursNight = ['19:00', '20:00', '21:00', '22:00', '23:00']

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(userFormSchema)
	})

	function onSubmit() {}

	return (
		<>
			<div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
				<div className="flex w-full flex-col">
					<button
						className="flex w-full cursor-pointer items-center gap-1"
						onClick={() => navigate(-1)}
					>
						<ArrowLeft width={14} height={14} className="text-gray-300" />
						<span className="text-xs text-gray-300">Voltar</span>
					</button>

					<h1 className="text-blue-dark font-lato w-full justify-self-end text-xl font-bold sm:text-2xl">
						Perfil de técnico
					</h1>
				</div>

				<div className="mt-4 flex w-full gap-2 sm:justify-end md:mt-0">
					<Button variant="secondary" title="Cancelar" />
					<Button variant="primary" title="Salvar" />
				</div>
			</div>

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
							{...register('name')}
						/>

						<InputField
							id="email"
							text="e-mail"
							placeholder="exemplo@mail.com"
							{...register('email')}
						/>
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
