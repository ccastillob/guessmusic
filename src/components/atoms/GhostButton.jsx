
import React from 'react';

const GhostButton = ({ otherClass, title, urlTo, event }) => {
	return (
		<div onClick={event} to={urlTo} className={`button button-ghost ${otherClass}`} >{ title }</div>
	)
}

GhostButton.defaultProps = {
	otherClass: "",
	title: "",
	urlTo: "/"
}

export default GhostButton;
