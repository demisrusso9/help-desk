import { SignIn } from '@pages/sign-in'
import { SignUp } from '@pages/sign-up'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AuthLayout } from './layouts/auth-layout'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
