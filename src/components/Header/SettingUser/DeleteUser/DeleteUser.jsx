import {
  ContainerPopUp,
  TextContainer,
  ButtonContainer,
  ButtonCancel,
  ButtonDelete,
} from './DeleteUser.styled';
import { useUsers } from 'hooks/useUsers';
export const DeleteUser = ({ onClose }) => {
  const { deleteUser } = useUsers();

  const handleClick = () => {
    deleteUser();
    onClose();
  };
  return (
    <>
      <ContainerPopUp>
        <TextContainer>
          <h2>Delete account</h2>
          <p>Are you sure you want to delete your account?</p>
          <ButtonContainer>
            <ButtonCancel type="button" onClick={onClose}>
              Cancel
            </ButtonCancel>
            <ButtonDelete type="button" onClick={handleClick}>
              Delete
            </ButtonDelete>
          </ButtonContainer>
        </TextContainer>
      </ContainerPopUp>
    </>
  );
};

// To delete your account, follow the link that we sent to your mail
