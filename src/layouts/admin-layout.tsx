import { Sidebar } from '@components/sidebar'
import { Outlet } from 'react-router'

export function AdminLayout() {
	return (
		<div className="flex min-h-screen">
			<Sidebar />

			<Outlet />
		</div>
	)
}
