import { ProtectedRoute } from '@components/protected-route'
import { Role } from '@interfaces/roles'
import { AppLayout } from '@layouts/app-layout'
import { AuthLayout } from '@layouts/auth-layout'
import { Clients } from '@pages/admin/clients/clients'
import { Services } from '@pages/admin/services/services'
import { Technicians } from '@pages/admin/technician/technicians'
import { TechniciansDetails } from '@pages/admin/technician/technicians-details'
import { TicketDetails } from '@pages/admin/tickets/ticket-details'
import { Tickets } from '@pages/admin/tickets/tickets'
import { SignIn } from '@pages/sign-in'
import { SignUp } from '@pages/sign-up'
import { BrowserRouter, Route, Routes } from 'react-router'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute allowedRoles={[Role.ADMIN]} />}>
					<Route element={<AppLayout />} path="/admin">
						<Route path="tickets" element={<Tickets />} />
						<Route path="tickets/details/:id" element={<TicketDetails />} />

						<Route path="technicians" element={<Technicians />} />
						<Route path="technicians/register" element={<TechniciansDetails />} />
						<Route path="technicians/update/:id" element={<TechniciansDetails />} />

						<Route path="clients" element={<Clients />} />
						<Route path="services" element={<Services />} />
					</Route>
				</Route>

				<Route element={<AuthLayout />}>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
