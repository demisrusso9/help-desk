import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/auth'

interface ProtectedRouteProps {
	allowedRoles: string[]
	redirectTo?: string
}

export function ProtectedRoute({
	allowedRoles,
	redirectTo = '/sign-in'
}: ProtectedRouteProps) {
	const { currentUser } = useAuth()

	if (!currentUser || !allowedRoles.includes(currentUser.role)) {
		return <Navigate to={redirectTo} replace />
	}

	return <Outlet />
}
