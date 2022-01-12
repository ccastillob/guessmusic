
import { fetchConToken } from "./fetch";

export const scoreUpdated = async( scoreFinal, uid ) => {

    const respDataUniqueUser = await fetchConToken( `user/${ uid }` );
    const userDataResp = await respDataUniqueUser.json();

    if( scoreFinal !== 0 ) {

        const objUpdateScore = {
            name: userDataResp.user.name,
            lastName: userDataResp.user.lastName,
            username: userDataResp.user.username,
            score: userDataResp.user.score + scoreFinal,
            imgAvatar: userDataResp.user.imgAvatar,
        }

        const respDataUpdatedUser = await fetchConToken(`user/update/${uid}`, objUpdateScore, 'PUT');
        await respDataUpdatedUser.json();

    }

}

