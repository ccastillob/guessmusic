
import { useRef } from 'react';
import { useEffect, useState } from 'react';

const CounterTimer = ({ setShowCounter, setIncore, incore, total, setLista, lista, ejec, setEjec, setScore, score }) => {

	const [seconds, setSeconds] = useState(12);
	let {current} = useRef(0);
	current = lista + 1;
	let scoreenviar = 2;

	useEffect(() => {

			let interval = null;

			interval = setInterval( () => {
					setSeconds( seconds => seconds - 1 );
			}, 1000);

			if( seconds === 0 ){
					setEjec(false);
					setSeconds(12);
					setShowCounter(false);
					clearInterval(interval);
			}

			if( ejec === true ){
					const myscore = scoreenviar*seconds;
					setScore(myscore + score);
					clearInterval(interval);
					setSeconds(12);
					setShowCounter(false);
					setEjec(false);
			}

			if( incore === true ){
					setSeconds(12);
					setShowCounter(false);
					setIncore(false);
			}

			if( lista === total ){
					setShowCounter(false);
					clearInterval(interval);
			}

			return () => {
					if( seconds === 0 ){
							setLista( current );
					}
					clearInterval(interval);
			}

	}, [total, setIncore, incore, seconds, setLista, lista, setEjec, ejec, current, scoreenviar, score, setScore, setShowCounter])

	return `${seconds} s`;

}

export default CounterTimer;
