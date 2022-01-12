
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IconRight from '../icons/IconRight';

const ItemViewMoreFriendProfile = ({ isFollowing, totalFollows }) => {

	const { data } = useSelector(state => state.otherProfile);

	return (

			( isFollowing )
			? (
				<Link to={`/profile/${data?.username}/followings`} className="next-footer__friends ed-grid s-grid-2 s-gap-4">
					<h4 className="content-color text-bold">{`Ver ${(totalFollows - 3)} más`}</h4>
					<i className="container-icon-arrowRightFriend primary-color">
						<IconRight />
					</i>
				</Link>
			)
			: (
				<Link to={`/profile/${data?.username}/followers`} className="next-footer__friends ed-grid s-grid-2 s-gap-4">
					<h4 className="content-color text-bold">{`Ver ${(totalFollows - 3)} más`}</h4>
					<i className="container-icon-arrowRightFriend primary-color">
						<IconRight />
					</i>
				</Link>
			)

	)
}

export default ItemViewMoreFriendProfile;
