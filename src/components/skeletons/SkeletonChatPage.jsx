
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ClassicSpinner } from 'react-spinners-kit';

import SkeletonHeaderMenu from './SkeletonHeaderMenu';

const SkeletonChatPage = () => {

	return (
		<>
			<SkeletonHeaderMenu />
			<SkeletonTheme color="#8e8e8f" >
				<div className="ed-container main-container container-allSectionsChat">
					<div className="ed-grid s-grid-12 s-gap-0">
						<div className={`container-chatSectionLeft`}>
							<h2 className="title-color s-center s-py-4">
								<Skeleton width={`70%`} />
							</h2>

							{
								<>
									<h3 className="content-color s-center s-mb-4">
										<Skeleton width={`30%`} />
									</h3>

									<div className="chatSectionLeft_contentBoxItemsChat">
										<div className="contentBoxItemsChat-allItems spinner-chatleftpage s-center">
											<ClassicSpinner color="#8e8e8f" size={30} />
										</div>
									</div>
								</>
							}

						</div>

						<div className="container-chatSelectUser">
							<div className="chatSelectUser-content">
								<ClassicSpinner color="#8e8e8f" size={30} />
							</div>
						</div>

					</div>
				</div>
			</SkeletonTheme>
		</>
	)
}

export default SkeletonChatPage;
