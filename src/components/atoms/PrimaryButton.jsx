
import React from 'react';

const PrimaryButton = ({ otherClass, title, urlTo, event, btn, btnDisabled }) => {
	return (

		btn
		? <button type="submit" disabled={ btnDisabled } className={`button button-primary ${otherClass}`}>{ title }</button>
		: <div onClick={event} to={urlTo} className={`button button-primary ${otherClass}`} >{ title }</div>
	)
}

PrimaryButton.defaultProps = {
	otherClass: "",
	title: "",
	urlTo: "/",
	btn: false,
	btnDisabled: false,
}

export default PrimaryButton;
