import { Sidebar } from '@components/sidebar'
import { Outlet } from 'react-router'

export function AdminLayout() {
	return (
		<div className="flex h-full min-h-screen w-full flex-col sm:flex-row">
			<Sidebar />

			<div className="flex w-full bg-gray-100">
				<div className="mt-0 w-full rounded-t-3xl bg-gray-600 p-6 pt-7 sm:mt-3 sm:rounded-none sm:rounded-tl-3xl sm:px-6 sm:pt-14.5 md:px-8 lg:px-12">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
