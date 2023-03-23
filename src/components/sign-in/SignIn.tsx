import React, { useRef, useState } from 'react';

import {
  Form,
  Title,
  Input,
  Label,
  Error,
  Button,
  Option,
  OptionButton,
} from '../shared/styledFormItems';

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  switchModals: (role: string) => void;
  handleLogin: (e: React.ChangeEvent<HTMLFormElement>) => void;
  show: boolean;
  authErrorMessage: string | null;
};

export default function SignIn({
  email,
  setEmail,
  password,
  setPassword,
  switchModals,
  handleLogin,
  show,
  authErrorMessage,
}: Props): JSX.Element {
  const [formErrors, setFormErrors] = useState<{ [name: string]: string }>({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  React.useEffect(() => {
    // reset form errors after login
    // TODO refactor this logic in hook
    setFormErrors({ email: '', password: '' });
  }, [handleLogin]);

  // update button state on any change
  function checkFormValidity(): void {
    if (formRef.current === (null || undefined)) return;
    if (formRef.current === null) return;
    setIsValid(formRef.current.checkValidity());
  }

  // to run for the first time when inputs are blurred
  // or when inputs change after errors have been shown
  function updateFormErrors(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, validationMessage } = e.target;
    // update the form errors object with the validationMessage of blurred input
    setFormErrors({
      ...formErrors,
      [name]: validationMessage,
    });
  }

  // to run whenever inputs on the form change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    // adjust error message if one has already been shown
    formErrors[name] && updateFormErrors(e);
    // update form values
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }
  return (
    <Form onSubmit={handleLogin} $how={show} onChange={checkFormValidity} ref={formRef} noValidate>
      <Title>Sign in</Title>
      <Label htmlFor="signinemail">Email</Label>
      <Input
        placeholder="Enter your email"
        type="email"
        name="email"
        id="signinemail"
        required
        value={email}
        onChange={handleChange}
        onBlur={updateFormErrors}
      />
      <Error bottom="12px">{formErrors.email}</Error>
      <Label htmlFor="signinpassword">Password</Label>
      <Input
        placeholder="Enter your password"
        type="password"
        name="password"
        id="signinpassword"
        minLength={8}
        required
        value={password}
        onChange={handleChange}
        onBlur={updateFormErrors}
      />
      <Error bottom="2px">{formErrors.password}</Error>
      <Error bottom="8px" align="center">
        {authErrorMessage}
      </Error>
      <Button disabled={!isValid} type="submit">
        Sign in
      </Button>
      <Option>
        Or
        <OptionButton onClick={() => switchModals('signup')} type="button">
          Sign up
        </OptionButton>
      </Option>
    </Form>
  );
}
