import {
  DownloadButton,
  IconDownload,
  DownloadButtonText,
  FormField,
  DownloadWrap,
  GenderFormField,
  RadioButtonWrap,
  RadioButtonLabel,
  RadioButtonText,
  RadioButton,
  Input,
  DesktopFormWrap,
  DesktopGenderWrap,
  PasswordFormField,
  PasswordLabel,
  PasswordInputWrap,
  IconButton,
  LastPasswordFormField,
  SaveButtonWrap,
  SaveButton,
  DesktopPasswordWrap,
  ModalWrap,
  Avatar,
  SSvgClose,
  SSvgOpen,
  StyledLabel,
  Title,
  EmailInput,
  TitlePassword,
  TitleGender,
} from './SettingUser.styled';

import sprite from 'assets/images/icons.svg';
import { Formik, Form, Field } from 'formik';
import { useUsers } from 'hooks/useUsers';

import { useState } from 'react';

export const SettingUser = ({ toggleModal }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedAvatarPath, setSelectedAvatarPath] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const { user, newUserInfo, newUserAvatar } = useUsers();

  const handleAvatarChange = (e) => {
    const file = e.currentTarget.files[0];
    setSelectedAvatar(file);
    setSelectedAvatarPath(URL.createObjectURL(file));
  };

  const initialValues = {
    avatar: user.avatarURL,
    name: user.name || '',
    email: user.email || '',
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ModalWrap>
        {
          <Formik
            initialValues={initialValues}
            onSubmit={(value) => {
              const newAvatar = {
                avatar: selectedAvatar,
              };
              console.log(newAvatar);
              newUserAvatar(newAvatar);

              const userNewInfo = {
                name: value.name,
                email: value.email,
                gender: value.gender,
                newPassword: value.newPassword,
                oldPassword: value.outdatedPassword,
              };
              newUserInfo(userNewInfo);
              toggleModal();
            }}
          >
            <Form>
              <Title>Setting</Title>
              <FormField>
                <h2>Your photo</h2>
                <DownloadWrap>
                  <Avatar
                    src={selectedAvatarPath || initialValues.avatar}
                    alt="user avatar"
                    width="80px"
                    height="80px"
                  />

                  <DownloadButton>
                    <Field
                      type="file"
                      name="avatar"
                      value=""
                      hidden
                      accept="image/png, image/jpeg"
                      onChange={handleAvatarChange}
                    />
                    <IconDownload>
                      <use href={`${sprite}#ic-outline`}></use>
                    </IconDownload>
                    <DownloadButtonText>Upload a photo</DownloadButtonText>
                  </DownloadButton>
                </DownloadWrap>
              </FormField>
              <DesktopFormWrap>
                <DesktopGenderWrap>
                  <GenderFormField>
                    <TitleGender>Your gender identity</TitleGender>
                    <RadioButtonWrap>
                      <RadioButtonLabel>
                        <RadioButton
                          type="radio"
                          name="gender"
                          value="female"
                        />
                        <RadioButtonText>Woman</RadioButtonText>
                      </RadioButtonLabel>
                      <RadioButtonLabel>
                        <RadioButton
                          type="radio"
                          name="gender"
                          value="male"
                          defaultChecked
                        />
                        <RadioButtonText>Man</RadioButtonText>
                      </RadioButtonLabel>
                    </RadioButtonWrap>
                  </GenderFormField>
                  <FormField>
                    <StyledLabel htmlFor="username">Your name</StyledLabel>
                    <Input type="text" id="username" name="name" />
                  </FormField>
                  <EmailInput>
                    <StyledLabel htmlFor="email">E-mail</StyledLabel>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                    />
                  </EmailInput>
                </DesktopGenderWrap>
                <DesktopPasswordWrap>
                  <TitlePassword>Password</TitlePassword>
                  <PasswordFormField>
                    <PasswordLabel htmlFor="oldPassword">
                      Outdated password:
                    </PasswordLabel>
                    <PasswordInputWrap>
                      <Input
                        type="password"
                        id="oldPassword"
                        name="outdatedPassword"
                        placeholder="Password"
                      />
                      {showPassword ? (
                        <>
                          <SSvgClose onClick={togglePasswordVisibility} />
                        </>
                      ) : (
                        <SSvgOpen onClick={togglePasswordVisibility} />
                      )}
                      <IconButton type="button"></IconButton>
                    </PasswordInputWrap>
                  </PasswordFormField>
                  <PasswordFormField>
                    <PasswordLabel htmlFor="password">
                      New Password:
                    </PasswordLabel>
                    <PasswordInputWrap>
                      <Input
                        type="password"
                        id="password"
                        name="newPassword"
                        placeholder="Password"
                      />
                      {showPassword ? (
                        <>
                          <SSvgClose onClick={togglePasswordVisibility} />
                        </>
                      ) : (
                        <SSvgOpen onClick={togglePasswordVisibility} />
                      )}
                      <IconButton type="button"></IconButton>
                    </PasswordInputWrap>
                  </PasswordFormField>
                  <LastPasswordFormField>
                    <PasswordLabel htmlFor="repeatedPassword">
                      Repeat new password:
                    </PasswordLabel>
                    <PasswordInputWrap>
                      <Input
                        type="password"
                        id="repeatedPassword"
                        name="repeatedPassword"
                        placeholder="Password"
                      />
                      {showPassword ? (
                        <>
                          <SSvgClose onClick={togglePasswordVisibility} />
                        </>
                      ) : (
                        <SSvgOpen onClick={togglePasswordVisibility} />
                      )}
                      <IconButton type="button"></IconButton>
                    </PasswordInputWrap>
                  </LastPasswordFormField>
                </DesktopPasswordWrap>
              </DesktopFormWrap>
              <SaveButtonWrap>
                <li>
                  <SaveButton type="submit">Save</SaveButton>
                </li>
              </SaveButtonWrap>
            </Form>
          </Formik>
        }
      </ModalWrap>
    </>
  );
};
