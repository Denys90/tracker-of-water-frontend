<LastPasswordFormField>
  <PasswordLabel htmlFor="repeatedPassword">Repeat new password:</PasswordLabel>
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
        <SSvgClose onClick={togglePasswordVisibility} error={errors.password} />
      </>
    ) : (
      <SSvgOpen onClick={togglePasswordVisibility} error={errors.password} />
    )}
    <IconButton type="button"></IconButton>
    {errors.repeatedPassword && (
      <ErrorMessage>{errors.repeatedPassword}</ErrorMessage>
    )}
  </PasswordInputWrap>
</LastPasswordFormField>;
