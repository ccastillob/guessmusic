
import { animateScroll } from 'react-scroll'

export const scrollToBottom = ( id ) => {

    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0,
    });

}

export const scrollToBottomMessages= ( id ) => {

		const element = document.getElementById(id);

		if( element !== null ) {
			element.scrollTop = element?.scrollHeight;
		}

}