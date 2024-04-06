import {
  DownloadButton,
  IconDownload,
  DownloadButtonText,
  FormField,
  FormText,
  DownloadWrap,
  GenderText,
  GenderFormField,
  RadioButtonWrap,
  RadioButtonLabel,
  RadioButtonText,
  RadioButton,
  StyledLabel,
  Input,
  DesktopFormWrap,
  DesktopGenderWrap,
  PasswordText,
  PasswordFormField,
  PasswordLabel,
  PasswordInputWrap,
  IconButton,
  LastPasswordFormField,
  SaveButtonWrap,
  SaveButton,
  DesktopPasswordWrap,
  ModalWrap,
  Header,
  Avatar,
} from './SettingUser.styled';

import sprite from 'assets/images/icons.svg';
import { Formik, Form, Field } from 'formik';
import useUsers from 'hooks/useUsers';
import { useState } from 'react';

export const SettingUser = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedAvatarPath, setSelectedAvatarPath] = useState('');
  const { newUserAvatar, user } = useUsers();
  console.log(user);

  const handleAvatarChange = (e) => {
    const file = e.currentTarget.files[0];
    setSelectedAvatar(file);
    setSelectedAvatarPath(URL.createObjectURL(file));
  };
  const initialValues = {
    avatar: user.avatarURL || '',
    gender: user.gender || '',
    name: user.name || '',
    email: user.email || '',
  };
  return (
    <>
      <ModalWrap>
        {
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              newUserAvatar(selectedAvatar);
              console.log('SettingUser', values);
            }}
          >
            <Form>
              <Header>Setting</Header>
              <FormField>
                <FormText>Your photo</FormText>
                <DownloadWrap>
                  <Avatar
                    src={selectedAvatarPath || user.avatar}
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
                      onChange={handleAvatarChange}
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
                      value={user.name}
                    />
                  </FormField>
                  <div>
                    <StyledLabel htmlFor="email">E-mail</StyledLabel>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
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
                      <IconButton type="button"></IconButton>
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
                      <IconButton type="button"></IconButton>
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
