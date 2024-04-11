import useWater from 'hooks/useWaters';
import {
  ButtonCancel,
  ButtonDelete,
  ContainerPopUp,
  TextContainer,
  ButtonContainer,
} from './DeleteEntry.styled';

export const DeleteEntry = ({ id, date, toggleModal }) => {
  const { deleteReps, createWater } = useWater();

  const handleClick = async () => {
    await deleteReps({ id, date });
    createWater(date);

    toggleModal();
  };

  return (
    <>
      <ContainerPopUp>
        <TextContainer>
          <h2>Delete entry</h2>
          <p>Are you sure you want to delete the entry?</p>
        </TextContainer>
        <ButtonContainer>
          <ButtonCancel type="button" onClick={() => toggleModal()}>
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
