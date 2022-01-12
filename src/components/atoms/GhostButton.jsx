
import React from 'react';
import { Link } from 'react-router-dom';

const GhostButton = ({ otherClass, title, urlTo, event, link }) => {
	return (
		link ? (
			<Link onClick={event} to={urlTo} className={`button button-ghost ${otherClass}`} >{ title }</Link>
		) : (
			<div onClick={event} className={`button button-ghost ${otherClass}`} >{ title }</div>
		)
	)
}

GhostButton.defaultProps = {
	otherClass: "",
	title: "",
	urlTo: "/",
	link: false,
}

export default GhostButton;
