
export const userSelectChat = ({ usuariosChat, chatActivo} ) => {
	return usuariosChat?.filter( user => user.userFor === chatActivo )[0];
}