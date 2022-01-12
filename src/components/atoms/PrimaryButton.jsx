
import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ otherClass, title, urlTo, event, btn, btnDisabled, link }) => {
	return (
		link ? (
			<Link onClick={event} to={urlTo} className={`button button-primary ${otherClass}`} >{ title }</Link>
		) : (
			btn
				? <button type="submit" disabled={ btnDisabled } className={`button button-primary ${otherClass}`}>{ title }</button>
				: <div onClick={event} className={`button button-primary ${otherClass}`} >{ title }</div>
		)
	)
}

PrimaryButton.defaultProps = {
	otherClass: "",
	title: "",
	urlTo: "/",
	btn: false,
	btnDisabled: false,
	link: false,
}

export default PrimaryButton;
