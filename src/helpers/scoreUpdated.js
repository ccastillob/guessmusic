
import { fetchConToken } from "./fetch"

export const scoreUpdated = async( scoreFinal, uid ) => {

    // Llamamos al API para obtener la data del usuario
		// /api/user/:id
    const respDataUniqueUser = await fetchConToken( `user/${ uid }` )
    const userDataResp = await respDataUniqueUser.json()

    // Colocamos una condicion para que cuando el score final sea cero no entre
    if( scoreFinal !== 0 ) {

        // Creamos el objeto para poder actualizar el score anterior con el score que obtuvimos en la partida
        const objUpdateScore = {
            name: userDataResp.user.name,
            lastName: userDataResp.user.lastName,
            username: userDataResp.user.username,
            score: userDataResp.user.score + scoreFinal,
            imgAvatar: userDataResp.user.imgAvatar,
        }

        // Llamamos a la API para poder actualizar el score del usuario pasando el id del usuario y el objeto que se actualizará
				// /api/user/update/:id
        const respDataUpdatedUser = await fetchConToken(`user/update/${uid}`, objUpdateScore, 'PUT')
        await respDataUpdatedUser.json()

    }

}

