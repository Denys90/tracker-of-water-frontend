import {
  ButtonCancel,
  ButtonLogOut,
  ContainerPopUp,
  TextContainer,
  ButtonContainer,
} from './Logout.styled';

export const LogOut = () => {
  return (
    <>
      <ContainerPopUp>
        <TextContainer>
          <h2>Log out</h2>
          <p>Do you really want to leave?</p>
        </TextContainer>
        <ButtonContainer>
          <ButtonCancel>Cancel</ButtonCancel>
          <ButtonLogOut>Log out</ButtonLogOut>
        </ButtonContainer>
      </ContainerPopUp>
    </>
  );
};
