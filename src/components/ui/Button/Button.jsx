import React from "react";
import s from './style.module.scss';

export const Button = ({className, text, onClick, isDisabled, ...props}) => {

	return (
		<button
			className={s.button}
			onClick={onClick}
			disabled={isDisabled}
			{...props}>
			{text}
		</button>
	);
}

export default Button