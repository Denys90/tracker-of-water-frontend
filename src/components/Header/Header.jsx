import { Logo } from './Logo/Logo';
import { UserAuth } from './UserAuth/UserAuth';
import { UserLogo } from './UserLogo/UserLogo';
import { useSelector } from 'react-redux';
import { selectIsLoginedIn } from '../../store/user/selectors';
import {Containers, ContainerHeader, WrapHeader } from './Header.styled';

export const Header = () => {
  const isLogined = useSelector(selectIsLoginedIn);
  
  return ( 
    <header>
      <Containers>
      <ContainerHeader>
        <Logo />
        <WrapHeader>
        {isLogined ? <UserLogo /> : <UserAuth />}
        </WrapHeader>
      </ContainerHeader>
      </Containers>
  </header>
  );
};
