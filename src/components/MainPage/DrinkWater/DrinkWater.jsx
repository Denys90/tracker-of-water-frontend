import { Item, List, Title, Wrapper } from './DrinkWater.styled';
import { Container } from '@mui/system';

export const DrinkWater = () => {
  const list = [
    'Supply of nutrients to all organs',
    'Providing oxygen to the lungs',
    'Maintaining the work of the heart',
    'Release of processed substances',
    'Ensuring the stability of the internal environment',
    'Maintaining within the normal temperature',
    'Maintaining an immune system capable of resisting disease',
  ];
  return (
    <Wrapper>
      <Container>
        <Title>Why drink water</Title>
        <List>
          {list.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};
