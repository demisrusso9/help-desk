import { Outlet } from 'react-router'

export function AuthLayout() {
	return (
		<div className="flex min-h-screen bg-[url('background.png')] bg-cover bg-center bg-no-repeat">
			<div className="mt-8 ml-auto flex h-full w-full flex-col items-center rounded-t-3xl bg-gray-600 p-6 md:mt-0 md:w-1/2 md:rounded-none md:rounded-tl-3xl">
				<div className="flex w-full flex-col md:max-w-120 lg:w-full">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
