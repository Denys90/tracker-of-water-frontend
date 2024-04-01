import { Logo } from './Logo/Logo';
import { UserAuth } from './UserAuth/UserAuth';
import { UserLogo } from './UserLogo/UserLogo';
// import { useSelector } from 'react-redux';
// import { selectIsLoginedIn } from '../../store/user/selectors';

import { Containers, ContainerHeader, WrapHeader } from './Header.styled';
import { useUsers } from 'hooks/useUsers';

export const Header = () => {
  // const isLogined = useSelector(selectIsLoginedIn);
  const { isAuthenticated } = useUsers();

  return (
    <header>
      <Containers>
        <ContainerHeader>
          <Logo />
          <WrapHeader>
            {isAuthenticated ? <UserLogo /> : <UserAuth />}
          </WrapHeader>
        </ContainerHeader>
      </Containers>
    </header>
  );
};
