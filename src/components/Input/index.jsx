import { Container } from './styles';

export function Input({ type = 'text', Icon, altcolor = false, ...rest }) {
  return (
    <Container className="input" altcolor={altcolor}>
      {Icon && <Icon size={20} />}
      <input type={type} {...rest} />
    </Container>
  );
}
