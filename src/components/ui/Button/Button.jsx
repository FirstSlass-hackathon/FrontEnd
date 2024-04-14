import React from "react";
import s from './style.module.scss';

export const Button = ({className, text, onClick, colorScheme, ...props}) => {

	const buttonClassName = colorScheme === 'black' ? s.buttonBlack : s.buttonWhite;

	return (
		<button
		className={`${s.button} ${buttonClassName} ${className}`}
			onClick={onClick}
			{...props}>
			{text}
		</button>
	);
}

export default Button