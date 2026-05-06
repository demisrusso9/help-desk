export interface User {
	id: string
	name: string
	email: string
	role: string
}

export interface UserSignInResponse {
	accessToken: string
	user: User
}
