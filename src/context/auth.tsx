import type { User, UserSignInResponse } from '@interfaces/user'
import { createContext, useContext, useState } from 'react'
import { api } from '../services/axios'

interface AuthContextData {
	authToken: string | null
	currentUser: User | null
	handleSignIn: (email: string, password: string) => Promise<void>
}

interface AuthProviderProps {
	children: React.ReactNode
}

const AuthContext = createContext<AuthContextData | null>(null)

export function AuthProvider({ children }: AuthProviderProps) {
	const [authToken, setAuthToken] = useState<string | null>(() =>
		localStorage.getItem('authToken')
	)
	const [currentUser, setCurrentUser] = useState<User | null>(() => {
		const storedUser = localStorage.getItem('currentUser')
		return storedUser ? JSON.parse(storedUser) : null
	})

	async function handleSignIn(email: string, password: string) {
		try {
			const { data } = await api.post<UserSignInResponse>('/sign-in', {
				email,
				password
			})

			setCurrentUser(data.user)
			setAuthToken(data.accessToken)

			localStorage.setItem('authToken', data.accessToken)
			localStorage.setItem('currentUser', JSON.stringify(data.user))
		} catch (error) {
			console.error('Erro ao fazer login:', error)

			setCurrentUser(null)
			setAuthToken(null)

			localStorage.removeItem('authToken')
			localStorage.removeItem('currentUser')
		}
	}

	return (
		<AuthContext.Provider value={{ handleSignIn, authToken, currentUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}

	return context
}
