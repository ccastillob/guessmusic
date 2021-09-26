
import React from 'react';

import IconPlay from '../icons/IconPlay';

const FooterPlayingSong = () => {

	return (
		<footer className="player-footer s-main-center">
			<div className="ed-grid s-py-2">
				<div className="s-cross-center">
					<div className="container-group_data">
						<div className="data-item__artist">
							<img alt="artist" src="https://th.bing.com/th/id/R.9d7dc8eb0eef32c422cf5a1bf5752732?rik=21bFdWSCzUkr7Q&riu=http%3a%2f%2fwww.foondos.com%2fwp-content%2fuploads%2f2013%2f01%2fAvril-Lavigne-HD-9.jpg&ehk=VIB%2fk8U4TcZst6DJW3zrEOFGkXhHXyISpn67PUfplcE%3d&risl=&pid=ImgRaw&r=0" />
						</div>
						<div className="data-item__section">
							<h4 className="section__artist title-color text_line-clamp">Artista</h4>
							<div className="section__progress_content">
								<div style={{width: `${30}%`}} className="progress_barPercentage"></div>
							</div>
							<h6 className="section_song title-color text_line-clamp">Canción</h6>
						</div>
					</div>
					<div className="container-group_icon">
						<i className="container-icon-playSong">
							<IconPlay />
						</i>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterPlayingSong;
