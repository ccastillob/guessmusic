
import ArrowNext from '../components/organisms/ArrowNext';
import ArrowPrev from '../components/organisms/ArrowPrev';

export const useArrowConfig = () => {

	const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ],
  };

	return [ settings ];

}
