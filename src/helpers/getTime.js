
import moment from 'moment';

export const getCreatedAt = ( date ) => {

	const createdAt = moment(date);
	return createdAt.format('L');

}

export const getHour = ( date ) => {

	const hour = moment(date);
	return hour.format('LT');

}

export const getDateMessage = ( date ) => {

	const dateMessage = moment( date );
	return dateMessage.format('L HH:mm');

}