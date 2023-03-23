import React from 'react';
import close from '../../images/close.svg';
import { Overlay, ContentContainer, Close } from './styledModal';

type Props = {
  show: boolean;
  children: React.ReactNode;
  closeModals: () => void;
};

export default function Modal({ show, children, closeModals }: Props): JSX.Element {
  return (
    <Overlay $how={show} onClick={closeModals}>
      <ContentContainer $how={show} onClick={(e) => e.stopPropagation()}>
        <Close source={close} onClick={closeModals} />
        {children}
      </ContentContainer>
    </Overlay>
  );
}
