import useWater from 'hooks/useWaters';
import {
  ButtonCancel,
  ButtonDelete,
  ContainerPopUp,
  TextContainer,
  ButtonContainer,
} from './DeleteEntry.styled';

export const DeleteEntry = ({ id, date, onClose }) => {
  const { deleteReps, createWater } = useWater();

  const handleClick = () => {
    deleteReps({ id, date });
    createWater(date);

    onClose();
  };

  return (
    <>
      <ContainerPopUp>
        <TextContainer>
          <h2>Delete entry</h2>
          <p>Are you sure you want to delete the entry?</p>
        </TextContainer>
        <ButtonContainer>
          <ButtonCancel type="button" onClick={onClose}>
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
