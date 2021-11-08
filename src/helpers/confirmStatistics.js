
import { fetchConToken } from "./fetch"

// Esta funcion actualizará solo el estado de las canciones volviendolos a true
export const findAchievementsAndUpdatedConfirm = async( co, total, indice ) => {

    // Hago un filtro de las canciones que tienen un estado en true
    const resultadoCompleto = total.filter( songtruecomplete => songtruecomplete.stateSong === true )

    // Realizo una condicion si las canciones del Array del filtro anterior es diferente al total de las canciones y ademas
    // las canciones correctas son diferentes a cero entonces recien entrará actualizar el estado de las canciones correctas
    if( resultadoCompleto.length !== total.length && co.length !== 0 ){
        // Vamos a realizar un recorrido sobre el array de canciones correctas(co)
        for (const iterator of co) {

            // Obtenemos solo el indice de cada cancion correcta en cada iteracion
            const dataIndiceSongCorrect = total.findIndex( song => song.nameSong === iterator )

            // Obtenemos el objeto de las canciones correctas que existen mediante una busqueda
            const dataObjectSongCorrect = total.find( song => song.nameSong === iterator )

            // Creamos el objeto para actualizar el estado de la canción
            const objectUpdated = {
                stateSong: true,
            }

            // Por medio de una condición establecemos el estado en true solo si es que la cancion tenia un estado inicial de false
            if( dataObjectSongCorrect.stateSong === false ){
                // Llamamos al API para actualizar los datos del objeto, pasando el id de la categoria del usuario,
                // el indice del nivel(dentro de userArrayLevels), el indice donde esta la canción en dataSongs y el objeto que se actualizará
								// /api/categorie/update/song?indice&indsong
                const respDataUpdated = await fetchConToken(`categorie/update/song?indice=${indice}&indsong=${dataIndiceSongCorrect}`, objectUpdated, 'PUT')
                await respDataUpdated.json()
            }
        }

    }

}

// Esta funcion actualizará el estado del logro y verificar que el nivel este completo ambos los volverá a true
export const searchSongsAndUpdatedLevelsCompletes = async(indice, total, uid) => {
    // Llamamos al API para obtener la categoria del usuario
		// /api/categorie/:id
    const respCategorieUniqueUser = await fetchConToken( `categorie/${ uid }` )
    const userCategoriesResp = await respCategorieUniqueUser.json()

    // Almacenamos todas las canciones del usuario en una variable
    const dataMySongs = userCategoriesResp.categorie.arrCategories[indice].dataSongs

    // Hacemos un filtro de las canciones que tienen su estado en true
    const verifyStateSongs = dataMySongs.filter( song => song.stateSong === true )

    // Creamos una condicion si el numero de canciones en estado true es igual al total de las canciones
    // y si el estado completeLevel es false entonces actualizará el completeLevel a true; tambien el stateViewFinishAchiev y stateAchiev
    if( verifyStateSongs.length === total.length && userCategoriesResp.categorie.arrCategories[indice].completeLevel === false ){
        // Llamamos al API para obtener los logros del usuario
				// /api/achievement/:id
        const respAchievementUniqueUser = await fetchConToken( `achievement/${ uid }` )
        const userAchievementsReso = await respAchievementUniqueUser.json()

        // Almacenamos todas los logros del usuario en una variable
        const dataAllAchievements = userAchievementsReso.achievement.arrAchievements

        // Hacemos un filtro que nos devolvera un ARRAY de todos los objetos que incluyen lo asignado
        const resultado = dataAllAchievements.filter( achiev => {
            return achiev.currentLevelAchiev.includes(`level 0${indice+1}`)
            // return achiev.descriptionAchiev.includes(`hits`)
            // return achiev.descriptionAchiev.includes(`songs`)
        } )

        // Si no encuentra alguna descripcion del logro entonces no entrará a esta condicion
        if( resultado[0] !== undefined ){

            // Buscamos el indice del logro que se encontraba en el Array anterior por medio de su nombre del logro
            const dataIndiceAchievShow = dataAllAchievements.findIndex( uniqueAchiev => uniqueAchiev.currentLevelAchiev === resultado[0].currentLevelAchiev )

            // Realizamos una condicion donde el total de las canciones debe ser igual al total de las canciones con su estado en true
            // Tambien que su estado final sea diferente a true
            if( resultado[0].stateAchiev !== true){

                // Creamos el objeto para poder actualizar el estado del logro y el estado final para visualizar
                const objectUpdated = {
                    stateAchiev: true,
                }
                // Llamamos a la API para poder actualizar los logros pasando el id del array del logros, el indice del logro para actualizar y el objeto que se actualizará
								// /api/achievement/update?indice
                const respDataUpdated = await fetchConToken(`achievement/update?indice=${dataIndiceAchievShow}`, objectUpdated, 'PUT')
                await respDataUpdated.json()

                // Creo un objeto para actualizar el completeLevel del nivel en el que estoy(indice)
                const objectUpdatedLevel = {
                    stateLevel: true,
                    completeLevel: true
                }

                // Llamamos a la API para poder actualizar el nivel pasando el id del array del nivel, el indice del nivel para actualizar y el objeto que se actualizará
								// /api/categorie/update/level?indice
                const respDataUpdatedLevel = await fetchConToken(`categorie/update/level?indice=${indice}`, objectUpdatedLevel, 'PUT')
                await respDataUpdatedLevel.json()

            }

        }

    }

}

// Esta funcion activará el estado del nivel para que se muestre cuando se cumpla el requisito para abrir el otro nivel
export const activeToLevelNext = async(indice, uid) => {

    // Llamamos al API para obtener la categoria del usuario
		// /api/categorie/:id
    const respCategorieUniqueUser = await fetchConToken( `categorie/${ uid }` )
    const userCategoriesResp = await respCategorieUniqueUser.json()

    // Creamos una condicion para que cuando este en el ultimo nivel no busque un indice superior, de esta forma estaremos validando el ultimo indice
    if( indice < (userCategoriesResp.categorie.arrCategories.length - 1) ){

        // Almacenamos todas las canciones del usuario en una variable
        const dataMySongs = userCategoriesResp.categorie.arrCategories[indice].dataSongs

        // Hacemos un filtro de las canciones que tienen su estado en true
        const verifyStateSongs = dataMySongs.filter( song => song.stateSong === true )
        // Level 1 --> indice 0
        // Level i --> indice (i-1)

        // Hacemos una condicion para verificar que las canciones en estado true sean mayor o igual al numero de canciones para abrir el siguiente nivel
        // asi como tambien comprobamos que el estado del nivel siguiente sea false
        if( verifyStateSongs.length >= userCategoriesResp.categorie.arrCategories[indice + 1].numberNextLevel && userCategoriesResp.categorie.arrCategories[indice + 1].stateLevel !== true ){

            // Creo un objeto para actualizar el estado del nivel siguiente(indice + 1)
            const objUpdatedStateLevel = {
                stateLevel: true,
                completeLevel: userCategoriesResp.categorie.arrCategories[indice + 1].completeLevel
            }

            // Llamamos a la API para poder actualizar el estado del nivel pasando el id del array del nivel, el indice del nivel siguiente y el objeto que se actualizará
						// /api/categorie/update/level?indice
            const respDataUpdatedStateLevel = await fetchConToken(`categorie/update/level?indice=${indice+1}`, objUpdatedStateLevel, 'PUT')
            await respDataUpdatedStateLevel.json()

        }

    }

}


