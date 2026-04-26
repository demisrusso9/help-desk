import { Sidebar } from '@components/sidebar'
import { Outlet } from 'react-router'

export function AdminLayout() {
	return (
		<div className="flex h-full min-h-screen w-full flex-col sm:flex-row">
			<Sidebar />

			<Outlet />
		</div>
	)
}
