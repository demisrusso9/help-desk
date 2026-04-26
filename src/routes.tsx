import { AdminLayout } from '@layouts/admin-layout'
import { AuthLayout } from '@layouts/auth-layout'
import { Clients } from '@pages/admin/clients'
import { Services } from '@pages/admin/services'
import { Technicians } from '@pages/admin/technicians'
import { Tickets } from '@pages/admin/tickets'
import { SignIn } from '@pages/sign-in'
import { SignUp } from '@pages/sign-up'
import { BrowserRouter, Route, Routes } from 'react-router'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AdminLayout />} path="/admin">
					<Route path="tickets" element={<Tickets />} />
					<Route path="technicians" element={<Technicians />} />
					<Route path="clients" element={<Clients />} />
					<Route path="services" element={<Services />} />
				</Route>

				<Route element={<AuthLayout />}>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
