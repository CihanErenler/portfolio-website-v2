import React from "react";

const Button = ({ children, action }) => {
	return (
		<button className="btn-primary" onClick={action}>
			{children}
		</button>
	);
};

export default Button;
