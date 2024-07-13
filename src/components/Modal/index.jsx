import { Container } from './styles';

import { IoClose } from 'react-icons/io5';

export function Modal({ isOpen, close, children, ...rest }) {
  if (isOpen) {
    return (
      <Container >;
        <div className='modal' >
          <IoClose className='modal-close' onClick={close} size={18} />
          {children}
        </div>
      </Container>
    );
  } else {
    return (<></>);
  }
}
