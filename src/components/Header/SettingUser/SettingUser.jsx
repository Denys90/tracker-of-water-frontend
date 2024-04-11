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
  FormInput,
  TitlePassword,
  TitleGender,
  ErrorMessages,
  FormBlock,
  FormDiv,
  InputBlock,
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
    gender: user.gender,
    newPassword: '',
    repeatedPassword: '',
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
            onSubmit={(values, { setSubmitting, setErrors }) => {
              if (values.newPassword !== values.repeatedPassword) {
                setErrors({
                  password: 'Passwords do not match',
                  repeatedPassword: 'Passwords do not match',
                  SSvgClose: 'Passwords do not match',
                });
                setSubmitting(false);
                return;
              }

              if (values.newPassword !== values.repeatedPassword) {
                setSubmitting(false);
                return;
              }

              const formData = new FormData();
              if (selectedAvatar) {
                formData.append('avatar', selectedAvatar);
                newUserAvatar(formData);
              }

              const userNewInfo = {
                name: values.name,
                email: values.email,
                gender: values.gender,
                newPassword: values.newPassword,
                oldPassword: values.outdatedPassword,
              };
              newUserInfo(userNewInfo);
              toggleModal();
            }}
          >
            {({ errors, values }) => (
              <Form>
                <FormDiv>
                  <Title>Setting</Title>
                  <FormBlock>
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
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={handleAvatarChange}
                          />
                          <IconDownload>
                            <use href={`${sprite}#ic-outline`}></use>
                          </IconDownload>
                          <DownloadButtonText>
                            Upload a photo
                          </DownloadButtonText>
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
                                value="woman"
                                checked={values.gender === 'woman'}
                              />
                              <RadioButtonText>Woman</RadioButtonText>
                            </RadioButtonLabel>
                            <RadioButtonLabel>
                              <RadioButton
                                type="radio"
                                name="gender"
                                value="man"
                                checked={values.gender === 'man'}
                              />
                              <RadioButtonText>Man</RadioButtonText>
                            </RadioButtonLabel>
                          </RadioButtonWrap>
                        </GenderFormField>
                        <InputBlock>
                          <FormInput>
                            <StyledLabel htmlFor="username">
                              Your name
                            </StyledLabel>
                            <Input type="text" id="username" name="name" />
                          </FormInput>
                          <FormInput>
                            <StyledLabel htmlFor="email">E-mail</StyledLabel>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              value={user.email}
                            />
                          </FormInput>
                        </InputBlock>
                      </DesktopGenderWrap>
                      <DesktopPasswordWrap>
                        <TitlePassword>Password</TitlePassword>
                        <PasswordFormField>
                          <PasswordLabel htmlFor="oldPassword">
                            Outdated password:
                          </PasswordLabel>
                          <PasswordInputWrap>
                            <Input
                              type={showPassword ? 'text' : 'password'}
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
                              type={showPassword ? 'text' : 'password'}
                              error={errors.password}
                              id="password"
                              name="newPassword"
                              placeholder="New password"
                            />
                            {showPassword ? (
                              <>
                                <SSvgClose
                                  onClick={togglePasswordVisibility}
                                  error={errors.password}
                                />
                              </>
                            ) : (
                              <SSvgOpen
                                onClick={togglePasswordVisibility}
                                error={errors.password}
                              />
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
                              error={errors.repeatedPassword}
                              id="repeatedPassword"
                              name="repeatedPassword"
                              placeholder="Repeat Password"
                            />
                            {showPassword ? (
                              <>
                                <SSvgClose
                                  onClick={togglePasswordVisibility}
                                  error={errors.repeatedPassword}
                                />
                              </>
                            ) : (
                              <SSvgOpen
                                onClick={togglePasswordVisibility}
                                error={errors.repeatedPassword}
                              />
                            )}
                            <IconButton type="button"></IconButton>
                            <ErrorMessages
                              name="repeatPassword"
                              component="div"
                            />
                          </PasswordInputWrap>
                        </LastPasswordFormField>
                      </DesktopPasswordWrap>
                    </DesktopFormWrap>
                  </FormBlock>

                  <SaveButtonWrap>
                    <li>
                      <SaveButton type="submit">Save</SaveButton>
                    </li>
                  </SaveButtonWrap>
                </FormDiv>
              </Form>
            )}
          </Formik>
        }
      </ModalWrap>
    </>
  );
};
