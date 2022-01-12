
import { fetchConToken } from "../fetch";

export const getAllUsersRanking = async(page) => {

	const resp = await fetchConToken(`user/all/ranking?page=${ page }`);
	const data = await resp.json();

	return data;

}
