
import React from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { uiCloseEditModal } from '../../actions/ui';
import PrimaryButton from '../atoms/PrimaryButton';
import GhostButton from '../atoms/GhostButton';
import { updateUserData } from '../../actions/user';
import { useHistory } from 'react-router';

Modal.setAppElement('#root');

const ModalEditProfile = () => {

	let history = useHistory();
	const dispatch = useDispatch();
	const { modalEditOpen } = useSelector(state => state.ui);
	const { data: user } = useSelector(state => state.user);
	const [ formEditProfileValues, handleEditProfileInputChange ] = useForm({
		EName: user.name,
		ELastName: user.lastName,
		EUsername: user.username,
	});

	const { EName, ELastName, EUsername } = formEditProfileValues;

	const handleInputSave = (e) => {

		e.preventDefault()

		if( EName.trim().length < 2 ){
			return Swal.fire('Error', 'El nombre debe ser mayor a 2 letras', 'info')
		}

		if( ELastName.trim().length < 2 ){
			return Swal.fire('Error', 'El apellido debe ser mayor a 2 letras', 'info')
		}

		if( EUsername.trim().length < 2 ){
			return Swal.fire('Error', 'El nombre de usuario debe ser mayor a 2 letras', 'info')
		}

		const objectUserDataUpdate = {
			lastName: EName,
			name: ELastName,
			username: EUsername,
		}

		// Aqui un dispatch para actualizar los datos del formulario
		dispatch( updateUserData( user.uid, objectUserDataUpdate, history ) )

	}

	const handleInputCancel = (e) => {
		e.preventDefault()
		closeEditModal();
	}


	const closeEditModal = () => {
			dispatch( uiCloseEditModal() )
	}

	return (

		<Modal
			isOpen={ modalEditOpen }
			onRequestClose={closeEditModal}
			closeTimeoutMS={200}
			className='modal'
			overlayClassName='modal-background'
		>

    <form className="modal-edit">
			<h1 className="title-color text-bold s-center s-pxy-4">Editar datos</h1>
      <div className="modal__container_name">
        <label className="label__edit_name text-bold" htmlFor="name">Primer nombre: </label>
        <input
          type="text"
          name="EName"
          id="name"
          className="input__edit_name"
          autoComplete= "off"
          value={ EName }
          maxLength= "12"
          onChange= { handleEditProfileInputChange }
        />
      </div>
      <div className="modal__container_lastname">
        <label className="label__edit_lastname text-bold" htmlFor="lastname">Apellido: </label>
        <input
          type="text"
          name="ELastName"
          id="lastname"
          className="input__edit_lastname"
          autoComplete= "off"
          value= { ELastName }
          maxLength= "12"
          onChange= { handleEditProfileInputChange }
        />
      </div>
      <div className="modal__container_username">
        <label className="label__edit_username text-bold" htmlFor="username">Nick de Usuario: </label>
        <input
          type="text"
          name="EUsername"
          id="username"
          className="input__edit_username"
          autoComplete= "off"
          value= { EUsername }
          maxLength= "18"
          onChange= { handleEditProfileInputChange }
        />
      </div>
      <div className="modal__container_buttons">
				<PrimaryButton event={ handleInputSave } title="Guardar" />
				<GhostButton event={ handleInputCancel } title="Cancelar" otherClass="ghost-error300-color" />
      </div>
    </form>

		</Modal>

    )
}

export default ModalEditProfile
