import { FiX, FiPlus } from 'react-icons/fi';

import { Container } from './styles';

export function NewTag({ isNew, value, type = 'text', onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type={type}
        value={value}
        {...rest}
        readOnly={!isNew}
        maxLength="35"
        size={value.length < 7 ? 7 : value.length - 2}
      />

      <button
        onClick={onClick}
        type="button"
        title={isNew ? 'Adicionar' : 'Remover'}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus size={14} /> : <FiX size={14} />}
      </button>
    </Container>
  );
}
