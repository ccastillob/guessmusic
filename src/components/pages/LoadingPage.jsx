
import React from 'react';
import { WaveSpinner } from 'react-spinners-kit';

const LoadingPage = () => {
	return (
		<main className="main-container loadingpage">
				<section className="section-loading ed-grid s-grid-12">
					<div className="content-section_loading s-to-center s-cols-12">
						<h1 className="title-text s-center s-mb-4">GuessMusic</h1>
						<WaveSpinner color="#1b42d0" size={50} />
					</div>
				</section>
		</main>
	)
}

export default LoadingPage;
