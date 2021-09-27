
import React from 'react';

const PrimaryButton = ({ otherClass, title, urlTo, event, btn }) => {
	return (

		btn
		? <button type="submit" className={`button button-primary ${otherClass}`}>{ title }</button>
		: <div onClick={event} to={urlTo} className={`button button-primary ${otherClass}`} >{ title }</div>
	)
}

PrimaryButton.defaultProps = {
	otherClass: "",
	title: "",
	urlTo: "/",
	btn: false
}

export default PrimaryButton;
