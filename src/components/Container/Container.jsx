import { ContainerStyles } from './ContainerStyles.styled';

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
