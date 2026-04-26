import { About } from '@pages/about'
import { SignIn } from '@pages/sign-in'
import { BrowserRouter, Route, Routes } from 'react-router'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
