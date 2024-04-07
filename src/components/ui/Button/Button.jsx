import React from "react";
import s from './style.module.scss';

function Button({className, children, onClick, isDisabled, ...props}) {

	return (
		<button
			className={s.button}
			onClick={onClick}
			disabled={isDisabled}
			{...props}>
			{children}
		</button>
	);
};

export default Button;