import {
  Button,
  ContainerPopUp,
  TextContainer,
  ButtonContainer,
} from './DeleteEntry.styled';
export const DeleteEntry = () => {
  return (
    <>
      <ContainerPopUp>
        <TextContainer>
          <h2>Delete entry</h2>
          <p>Are you sure you want to delete the entry?</p>
        </TextContainer>
        <ButtonContainer>
          <Button>Delete</Button>
          <Button>Cancel</Button>
        </ButtonContainer>
      </ContainerPopUp>
    </>
  );
};
