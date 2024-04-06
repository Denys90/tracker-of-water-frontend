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
} from './SettingUser.styled';

import sprite from 'assets/images/icons.svg';
import { Formik, Form, Field } from 'formik';
import useUsers from 'hooks/useUsers';
import { useState } from 'react';

export const SettingUser = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedAvatarPath, setSelectedAvatarPath] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    password: '',
    repeatPassword: '',
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <ModalWrap>
        {
          <Formik
          initialValues={{
            initialValues
          }}
            onSubmit={(values) => {
              newUserAvatar(selectedAvatar);
              console.log('SettingUser', values);
            }}
          >
            <Form>
              <h1>Setting</h1>
              <FormField>
                <h2>Your photo</h2>
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
                      <use href={`${sprite}#ic-outline`}></use>
                    </IconDownload>
                    <DownloadButtonText>Upload a photo</DownloadButtonText>
                  </DownloadButton>
                </DownloadWrap>
              </FormField>
              <DesktopFormWrap>
                <DesktopGenderWrap>
                  <GenderFormField>
                    <h2>Your gender identity</h2>
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
                        />
                        <RadioButtonText>Man</RadioButtonText>
                      </RadioButtonLabel>
                    </RadioButtonWrap>
                  </GenderFormField>
                  <FormField>
                    <h2 htmlFor="username">Your name</h2>
                    <Input
                      type="text"
                      id="username"
                      name="name"
                      value={user.name}
                    />
                  </FormField>
                  <div>
                    <h2 htmlFor="email">E-mail</h2>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                    />
                  </div>
                </DesktopGenderWrap>
                <DesktopPasswordWrap>
                  <h2>Password</h2>
                  <PasswordFormField>
                    <PasswordLabel htmlFor="oldPassword">
                      Outdated password:
                    </PasswordLabel>
                    <PasswordInputWrap>
                      <Input
                        type={showPassword ? 'text' : 'password'}
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
                  <PasswordFormField>
                    <PasswordLabel htmlFor="password">
                      New Password:
                    </PasswordLabel>
                    <PasswordInputWrap>
                      <Input
                        type={showPassword ? 'text' : 'password'}
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
                        type={showPassword ? 'text' : 'password'}
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
