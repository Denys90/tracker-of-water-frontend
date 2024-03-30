import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import main_mobil from '../../../assets/images/mobile/background_main_mobile@1x.png'
import main_tab from '../../../assets/images/tablet/background_main_page_tablet@1x.png'
import main_desk from '../../../assets/images/desc/background_main_desc@1x.png'
import main_mobilx2 from '../../../assets/images/mobile/background_main_mobile@2x.png'
import main_tabx2 from '../../../assets/images/tablet/background_main_page_tablet@2x.png'
import main_deskx2 from '../../../assets/images/desc/background_main_desc@2x.png'
import main_element from '../../../assets/images/desc/background_element_main_desc@1x.png'
import main_elementx2 from '../../../assets/images/desc/background_element_main_desc@2x.png'

export const MainPageStyle = styled.div`
 
  background-image: url(${main_mobil}), url(${main_mobilx2});
 background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;


  @media screen and (min-width: ${theme.breakpoint.tablet}) {
 
    background-image: url(${main_tab}), url(${main_tabx2});
        min-height: 100vh;
   
 }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {

    background-image: url(${main_desk}), url(${main_deskx2});
    min-height: 100vh;

  }
`;

export const BackgroundElement = styled.div`
 

  @media screen and (min-width: ${theme.breakpoint.desktop}) {

    background-image: url(${main_element}), url(${main_elementx2});
    min-height: 100vh;
    width: 100%;

  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;


  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    gap: 60px;
    align-items: stretch;
    padding-top: 32px;
    padding-bottom: 32px;

   
 }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 81px;
    padding-top: 195px;
    padding-bottom: 195px;
    
  
  }
`;
