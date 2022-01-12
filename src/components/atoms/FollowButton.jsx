
import React from 'react';

const FollowButton = ({ otherClass, urlTo, title, icon, event }) => {
	return (
		<div onClick={event} to={urlTo} className={`button button-follow ${otherClass}`} >
			<i className={`container-icon-follow s-mr-2`}>
				{ icon }
			</i>
			<h3>{ title }</h3>
		</div>
	)
}

FollowButton.defaultProps = {
	otherClass: "",
	urlTo: "/",
	title: "",
}

export default FollowButton;