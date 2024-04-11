import {
  Benefits,
  BenefitsTitle,
  Image,
  Item,
  Subtitle,
  Title,
  Tracker,
} from './ConsumptionTracker.styled';

import { TryTracker } from 'styles/btnStyles';

import svg from 'assets/images/icons.svg';
import { NavLink } from 'react-router-dom';

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
      <NavLink to="/login">
        <TryTracker type="button">Try tracker</TryTracker>
      </NavLink>
    </Tracker>
  );
};
