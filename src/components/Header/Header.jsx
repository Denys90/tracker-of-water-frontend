import { Logo } from './Logo/Logo';
import { UserAuth } from './UserAuth/UserAuth';
import { UserLogo } from './UserLogo/UserLogo';

import { Containers, ContainerHeader, WrapHeader } from './Header.styled';
import useUsers from 'hooks/useUsers';

const Header = () => {
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

export default Header;
