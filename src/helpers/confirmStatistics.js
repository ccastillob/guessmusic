
import { fetchConToken } from "./fetch";

export const findAchievementsAndUpdatedConfirm = async( co, total, indice ) => {

	const resultadoCompleto = total.filter( songtruecomplete => songtruecomplete.stateSong === true );

	if( resultadoCompleto.length !== total.length && co.length !== 0 ){

		for (const iterator of co) {

			const dataIndiceSongCorrect = total.findIndex( song => song.nameSong === iterator );
			const dataObjectSongCorrect = total.find( song => song.nameSong === iterator );
			const objectUpdated = {
					stateSong: true
			}

			if( dataObjectSongCorrect.stateSong === false ){
					const respDataUpdated = await fetchConToken(`categorie/update/song?indice=${indice}&indsong=${dataIndiceSongCorrect}`, objectUpdated, 'PUT');
					await respDataUpdated.json();
			}

		}

	}

}

export const searchSongsAndUpdatedLevelsCompletes = async(indice, total, uid) => {

	const respCategorieUniqueUser = await fetchConToken( `categorie/${ uid }` );
	const userCategoriesResp = await respCategorieUniqueUser.json();
	const dataMySongs = userCategoriesResp.categorie.arrCategories[indice].dataSongs;
	const verifyStateSongs = dataMySongs.filter( song => song.stateSong === true );

	if( verifyStateSongs.length === total.length && userCategoriesResp.categorie.arrCategories[indice].completeLevel === false ){

		const respAchievementUniqueUser = await fetchConToken( `achievement/${ uid }` );
		const userAchievementsReso = await respAchievementUniqueUser.json();
		const dataAllAchievements = userAchievementsReso.achievement.arrAchievements
		const resultado = dataAllAchievements.filter( achiev => {
				return achiev.currentLevelAchiev.includes(`level 0${indice+1}`);
		} );

		if( resultado[0] !== undefined ){

			const dataIndiceAchievShow = dataAllAchievements.findIndex( uniqueAchiev => uniqueAchiev.currentLevelAchiev === resultado[0].currentLevelAchiev );

			if( resultado[0].stateAchiev !== true){

					const objectUpdated = {
							stateAchiev: true
					}
					const respDataUpdated = await fetchConToken(`achievement/update?indice=${dataIndiceAchievShow}`, objectUpdated, 'PUT');
					await respDataUpdated.json();

					const objectUpdatedLevel = {
							stateLevel: true,
							completeLevel: true,
					}
					const respDataUpdatedLevel = await fetchConToken(`categorie/update/level?indice=${indice}`, objectUpdatedLevel, 'PUT');
					await respDataUpdatedLevel.json();

			}

		}

	}

}

export const activeToLevelNext = async(indice, uid) => {

	const respCategorieUniqueUser = await fetchConToken( `categorie/${ uid }` );
	const userCategoriesResp = await respCategorieUniqueUser.json();

	if( indice < (userCategoriesResp.categorie.arrCategories.length - 1) ){

		const dataMySongs = userCategoriesResp.categorie.arrCategories[indice].dataSongs;
		const verifyStateSongs = dataMySongs.filter( song => song.stateSong === true );

		if( verifyStateSongs.length >= userCategoriesResp.categorie.arrCategories[indice + 1].numberNextLevel && userCategoriesResp.categorie.arrCategories[indice + 1].stateLevel !== true ){

			const objUpdatedStateLevel = {
					stateLevel: true,
					completeLevel: userCategoriesResp.categorie.arrCategories[indice + 1].completeLevel,
			}

			const respDataUpdatedStateLevel = await fetchConToken(`categorie/update/level?indice=${indice+1}`, objUpdatedStateLevel, 'PUT');
			await respDataUpdatedStateLevel.json();

		}

	}

}


