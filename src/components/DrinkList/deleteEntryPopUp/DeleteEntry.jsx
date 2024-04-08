import {
  ButtonCancel,
  ButtonDelete,
  ContainerPopUp,
  TextContainer,
  ButtonContainer,
} from './DeleteEntry.styled';
import { useDispatch } from 'react-redux';

import { deleteTodoThunk } from 'store/water/thunk.js';

export const DeleteEntry = ({ toggleModal, id, date }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTodoThunk({ id, date }));
  };
  return (
    <>
      <ContainerPopUp>
        <TextContainer>
          <h2>Delete entry</h2>
          <p>Are you sure you want to delete the entry?</p>
        </TextContainer>
        <ButtonContainer>
          <ButtonCancel type="button" onClick={toggleModal}>
            Cancel
          </ButtonCancel>
          <ButtonDelete type="button" onClick={handleClick}>
            Delete
          </ButtonDelete>
        </ButtonContainer>
      </ContainerPopUp>
    </>
  );
};
