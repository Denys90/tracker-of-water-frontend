import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

import imgHomeDesk1x from 'assets/images/desc/bubbleDesk.png';
import imgHomeDesk2x from 'assets/images/desc/bubbleDesk@2x.png';
import imgHomeMob1x from 'assets/images/mobile/bubbleMob.png';
import imgHomeMob2x from 'assets/images/mobile/bubbleMob@2x.png';
import imgHomeTabl1x from 'assets/images/tablet/bubbleTablet.png';
import imgHomeTabl2x from 'assets/images/tablet/bubbleTablet@2x.png';

export const HomeSection = styled.div`
  background-position: center center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-image: -webkit-image-set(
    url(${imgHomeMob1x}) 1x,
    url(${imgHomeMob2x}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${imgHomeTabl1x}) 1x,
      url(${imgHomeTabl2x}) 2x
    );
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${imgHomeDesk1x}) 1x,
      url(${imgHomeDesk2x}) 2x
    );
  }
`;

export const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  margin: 0 auto;
  max-width: 704px;
  padding-bottom: 22px;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
    gap: 32px;
    max-width: 1176px;
  }
`;

export const HomeRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.lightBlue};
  padding: 20px 24px;
  border-radius: 10px;
  max-width: 704px;
  box-shadow: ${theme.boxShadowBtn.Btn};
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 590px;
  }
`;

export const HomeLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 50%;
  }
`;

export const HomeContainer = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    padding-left: 132px;
    padding-right: 132px;
  }
`;
