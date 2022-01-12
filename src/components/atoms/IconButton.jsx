
import React from 'react';

const IconButton = ({ otherClass, urlTo, icon, type, event }) => {
	return (
		<div onClick={event} to={urlTo} className={`button button-icon ${otherClass}`} >
			<i className={`container-icon-${type}`}>
				{ icon }
			</i>
		</div>
	)
}

IconButton.defaultProps = {
	otherClass: "",
	urlTo: "/",
	type: "add",
}

export default IconButton;