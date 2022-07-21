import React from 'react';
import './index.css'

export const MyButton = ({children, ...props}) => {
	return ( 
		<button {...props} className='myBtn'>
			{children}
		</button>
	 );
}
 
