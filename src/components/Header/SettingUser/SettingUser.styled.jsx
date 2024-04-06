import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Field } from 'formik';


export const FormText = styled.p`
    color:  ${theme.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11; /* 111.111% */
`;
export const StyledLabel = styled.label`
    display: inline-block;
    margin-bottom: 8px;
    color: ${theme.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11; /* 111.111% */
`;

export const DownloadWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
`;

export const IconDownload = styled.svg`
width: 16px;
height: 16px;
fill: none;
stroke: ${theme.colors.paleBlue};
stroke-linecap: round;
stroke-linejoin: round;
`;

export const IconButton = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
`;

export const PasswordInputWrap = styled.div`
    width: 392px;
    position: relative;
    margin-top: 8px;
`;

export const PasswordIcon = styled(IconDownload)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;

export const DownloadButton = styled.label`
    display: flex;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
`;

export const DownloadButtonText = styled.span`
color: ${theme.colors.blue};
font-size: 14px;
font-weight: 500;
line-height: 18px; /* 128.571% */
`;

export const FormField = styled.div`
margin-bottom: 24px;

.error-input {
    border: 1px solid ${theme.colors.brightRed};
    color: ${theme.colors.brightRed};

    &:focus {
        color: ${theme.colors.brightRed};
    }

    &::placeholder {
        color: ${theme.colors.brightRed};
    }
}
`;

export const PasswordFormField = styled(FormField)`
    height: 82px;
    @media screen and (min-width: ${theme.breakpoint.tablet}) {
        margin-bottom: 28px;
    }
    @media screen and (min-width: ${theme.breakpoint.desktop}) {
        margin-bottom: 12px;
    }
`;

export const GenderText = styled(FormText)`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
`;

export const RadioButton = styled(Field)`
opacity: 0;
position: absolute;

+ span {
    display: inline-block;
    padding-left: 25px;
    position: relative;
    cursor: pointer;

    &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.skyBlue};
    background-color: ${theme.colors.white};
    }

    &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.theme.colors.orange};
    top: 50%;
    left: 4px;
    transform: translate(0, -50%);
    opacity: 0;
    }
}

&:checked + span:after {
    opacity: 1;
}
`;

export const RadioButtonWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const RadioButtonText = styled.span`
    color: ${theme.colors.black};
    font-size: 16px;
    line-height: 1.25; /* 125% */
`;

export const RadioButtonLabel = styled.label`
    display: flex;
    align-items: center;
`;


export const Avatar = styled.img`
    order-radius: 60%;
`;

export const Input = styled(Field)`
    width: 100%;
    height: 44px;
    border-radius: 6px;
    border: 1px solid ${theme.colors.paleBlue};
    color: ${theme.colors.blue};
    font-size: 16px;
    line-height: 1.25;
    outline: transparent; /* 125% */
    background-color: ${theme.colors.white};

    &:focus {
        color: ${theme.colors.black};
    }

    &::placeholder {
        color: ${theme.colors.blue};
        padding: 0px 10px;
    }
`;

export const StyledErrorMessage = styled.div`
    margin-top: 4px;
    color: ${theme.colors.brightRed};
    font-size: 14px;
    line-height: 18px; /* 128.571% */
`;

export const StyledErrorText = styled.p`
    margin-top: 4px;
    color: ${theme.colors.brightRed};
    font-size: 14px;
    line-height: 18px; /* 128.571% */
`;

export const ModalWrap = styled.div`
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 32px;
    border-radius: 10px;
    border: 2px solid ${theme.colors.black};
    background-color: ${theme.colors.white};

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
        min-width: 704px;
        padding-left: 24px;
        padding-right: 24px;
    }

    @media screen and (min-width: ${theme.breakpoint.desktop}) {
        min-width: 1008px;
    }
`;

export const PasswordText = styled(FormText)`
    margin-bottom: 12px;
`;

export const PasswordLabel = styled.label`
    margin-bottom: 8px;
    color: ${theme.colors.black};
    font-size: 16px;
    line-height: 1.25; /* 125% */
`;

export const SaveButton = styled.button`
    min-width: 100%;
    padding: 8px 30px;
    border-radius: 10px;
    background: ${theme.colors.blue};
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25; /* 125% */
    

    &:is(:hover, :focus) {
        box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
        min-width: 160px;
        padding: 10px 30px;
        font-size: 18px;
        line-height: 24px; /* 133.333% */
    }
`;

export const DesktopFormWrap = styled.div`
    margin-bottom: 24px;

    @media screen and (min-width: ${theme.breakpoint.desktop}) {
        display: flex;
        gap: 24px;
    }
`;

export const DesktopPasswordWrap = styled.div`
    @media screen and (min-width: ${theme.breakpoint.mobile}) {
        min-height: 320px;
    }
    @media screen and (min-width: ${theme.breakpoint.tablet}) {
        width: 392px;
    }
`;

export const DesktopGenderWrap = styled.div`
    @media screen and (min-width: ${theme.breakpoint.desktop}) {
        margin-bottom: 24px;
    }
    @media screen and (min-width: ${theme.breakpoint.tablet}) {
        width: 392px;
    }
    @media screen and (min-width: ${theme.breakpoint.desktop}) {
        margin-bottom: 0px;
    }
`;

export const LastPasswordFormField = styled.div`
    @media screen and (max-width: 767px) {
        height: 92px;
    }

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
        height: 82px;
    }
`;

export const GenderFormField = styled.div`
    @media screen and (max-width: 1439px) {
        margin-bottom: 24px;
    }

    @media screen and (min-width: ${theme.breakpoint.desktop}) {
        margin-bottom: 52px;
    }
`;

export const SaveButtonWrap = styled.ul`
    li {
        @media screen and (max-width: 767px) {
        &:not(:last-child) {
            margin-bottom: 24px;
        }
        }
    }

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`;

export const DeleteButton = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.colors.LightBlue};

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
        font-size: 16px;
    }

    &:is(:hover, :focus) {
    }
`;
export const ContainerMod = styled.div`
width: 1008px;
height: 592px;
padding: 32px 24px 32px 24px;
border-radius: 10px 0px 0px 0px;
border: 2px solid #2F2F2F;
border-radius: 10px;
background: #fff;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;
export const Header = styled.h1`
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
`;