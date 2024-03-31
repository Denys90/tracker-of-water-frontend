import {
  Benefits,
  BenefitsTitle,
  Button,
  Image,
  Item,
  Subtitle,
  Title,
  Tracker,
} from './ConsumptionTracker.styled';
import svg from '../../../assets/images/icons.svg'

export const ConsumptionTracker = () => {
  const benefits = [
    {
      text: 'Habit drive',
      id: `${svg}#icon-calendar`,
    },
    {
      text: 'View statistics',
      id: `${svg}#icon-outline1`,
    },
    {
      text: 'Personal rate setting',
      id: `${svg}#icon-tools`,
    },
  ];

  // function handleClick() {
  //   navigate('/signup');
  // }

  return (
    <Tracker>
      <Title>Water consumption tracker</Title>
      <Subtitle>
        Record daily water <br /> intake and track
      </Subtitle>
      <BenefitsTitle>Tracker Benefits</BenefitsTitle>
      <Benefits>
        {benefits.map(({ id, text }, index) => (
          <Item key={index}>
            <Image>
              <use href={id}></use>
            </Image>
            {text}
          </Item>
        ))}
      </Benefits>

      <Button type="button">Try tracker</Button>
    </Tracker>
  );
};
