import { Sidebar } from '@components/sidebar'
import { Outlet } from 'react-router'

export function AdminLayout() {
	return (
		<div className="flex w-full flex-col sm:h-screen sm:flex-row">
			<Sidebar />

			<main className="bg-gray-100 sm:flex-1 sm:overflow-y-auto">
				<div className="min-h-full w-full rounded-t-3xl bg-gray-600 p-6 pt-7 sm:mt-3 sm:rounded-none sm:rounded-tl-3xl sm:px-6 sm:pt-14.5 md:px-8 lg:px-12">
					<Outlet />
				</div>
			</main>
		</div>
	)
}
