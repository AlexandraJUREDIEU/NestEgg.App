import { createContext, useContext, useState } from 'react';
import { Axios } from 'axios';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);


export const AuthProvider = () => {
	const user = null | undefined | JSON.parse(localStorage.getItem('token'));

	const Login = ({ username, password }) => {
		Axios.post('http://localhost:8000/users/login', { username, password })
			.then((response) => {
				localStorage.setItem('token', JSON.stringify(response.data.token));
				setUser(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const Logout = () => {
		localStorage.removeItem('token');
		setUser(null);
	}

return (
	<AuthContext.Provider value={{ user, Login, Logout}}>
		{children}
	</AuthContext.Provider>
	);
};