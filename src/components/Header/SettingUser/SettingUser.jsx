
import { 
DownloadButton, IconDownload, DownloadButtonText, FormField, FormText,
DownloadWrap, Avatar, GenderText, GenderFormField, RadioButtonWrap,
RadioButtonLabel, RadioButtonText, RadioButton, StyledLabel, Input, DesktopFormWrap,
DesktopGenderWrap, DeleteButton, PasswordText, PasswordFormField, PasswordLabel, 
PasswordInputWrap, IconButton, LastPasswordFormField, SaveButtonWrap, SaveButton,
DesktopPasswordWrap, ModalWrap, Header, 
} from './SettingUser.styled';
import sprite from '../../../assets/images/icons.svg'
import { Formik, Form, Field } from 'formik';

const initialValues = {
    avatar: '',
    gender: '',
    name: '',
    email: ''
};




export const SettingUser = () => {


return (
    <>
    <ModalWrap>
        {
    <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
    <Form>
        <Header>Setting</Header>
        <FormField>
        <FormText>Your photo</FormText>
        <DownloadWrap>
            <Avatar
            alt="user avatar"
            width="80px"
            height="80px"
            />
        <DownloadButton>
        <Field
        type="file"
        name="avatar"
        hidden
        accept="image/png, image/jpeg"
        />
            <IconDownload>
                <use href={`${sprite}#icon-outline1`}></use>
            </IconDownload>
            <DownloadButtonText>Upload a photo</DownloadButtonText>
            </DownloadButton>
            </DownloadWrap>
        </FormField>
        <DesktopFormWrap>
        <DesktopGenderWrap>
        <GenderFormField>
        <GenderText>Your gender identity</GenderText>
            <RadioButtonWrap>
            <RadioButtonLabel>
                <RadioButton
                    type="radio"
                    name="gender"
                    value="female"
                    checked={''}
                    />
                <RadioButtonText>Girl</RadioButtonText>
                </RadioButtonLabel>
                    <RadioButtonLabel>
                        <RadioButton
                        type="radio"
                        name="gender"
                        value="male"
                        checked={''}
                        />
                <RadioButtonText>Man</RadioButtonText>
            </RadioButtonLabel>
            </RadioButtonWrap>
        </GenderFormField>
        <FormField>
        <StyledLabel htmlFor="username">Your name</StyledLabel>
                        <Input
                            type="text"
                            id="username"
                            name="name"
                        />
        </FormField>
                    <div>
                        <StyledLabel htmlFor="email">E-mail</StyledLabel>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                        />
                    </div>
        </DesktopGenderWrap>
        <DesktopPasswordWrap>
            <PasswordText>Password</PasswordText>
                <PasswordFormField>
                    <PasswordLabel htmlFor="oldPassword">
                    Outdated password:
                    </PasswordLabel>
                    <PasswordInputWrap>
                        <Input
                            type={'password'}
                            id="oldPassword"
                            name="outdatedPassword"
                            placeholder="Password"
                        />
                        <IconButton
                            type="button"
                        >
                        </IconButton>
                        </PasswordInputWrap>
                    </PasswordFormField>
                    <PasswordFormField>
                        <PasswordLabel htmlFor="password">
                        New Password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                        <Input
                            type={'password'}
                            id="password"
                            name="newPassword"
                            placeholder="Password"
                        />
                        <IconButton
                            type="button"
                        >
                        </IconButton>
                        </PasswordInputWrap>
                    </PasswordFormField>
                    <LastPasswordFormField>
                        <PasswordLabel htmlFor="repeatedPassword">
                        Repeat new password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                        <Input
                            type={'password'}
                            id="repeatedPassword"
                            name="repeatedPassword"
                            placeholder="Password"
                        />
                        <IconButton
                            type="button"
                        >
                        </IconButton>
                        </PasswordInputWrap>
                        </LastPasswordFormField>
                    </DesktopPasswordWrap>
                </DesktopFormWrap>
                <SaveButtonWrap>
                    <li>
                        <SaveButton type="submit">
                        Save
                        </SaveButton>
                    </li>
                    <li>
                        <DeleteButton type="button" >
                        Delete your account?
                        </DeleteButton>
                    </li>
                </SaveButtonWrap>
                </Form>
    </Formik>
}
</ModalWrap>
    </>
);
};

