import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../../../css/App.css'
import { AuthContext } from '../../context';
import { MyButton } from '../button/MyButton';

export const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth')
	}

	return ( 
		<div className="navbar">
			<MyButton onClick={logout} >
				Exit
			</MyButton>
		<div className="navbar__links">
			<Link to="/about" >Start Page</Link>
			<Link to="/posts" >Posts</Link>
		</div>
	</div>
	 );
}
 
