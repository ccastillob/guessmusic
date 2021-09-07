
import React from 'react';

const PrimaryButton = ({ otherClass, title, urlTo, event }) => {
	return (
		<div onClick={event} to={urlTo} className={`button button-primary ${otherClass}`} >{ title }</div>
	)
}

PrimaryButton.defaultProps = {
	otherClass: "",
	title: "",
	urlTo: "/"
}

export default PrimaryButton;
