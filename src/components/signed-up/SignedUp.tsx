import React from 'react';
import { Container, SuccessTitle, Option } from './styledSignedUp';

type Props = {
  switchModals: (role: string) => void,
  show: boolean
}

export default function SignUp({ switchModals, show }: Props) {
  return (
    <Container $how={show}>
      <SuccessTitle>Registration successfully completed!</SuccessTitle>
      <Option type="button" onClick={() => switchModals('signin')}>
        Sign in
      </Option>
    </Container>
  );
}
