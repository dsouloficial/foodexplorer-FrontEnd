import Currency from "react-currency-input-field";

import { Container } from './styles';


export function InputCurrency({ Icon, altcolor = false, ...rest }) {
  return (
    <Container className="input" altcolor={altcolor}>
      {Icon && <Icon size={20} />}
      <Currency
        decimalScale={2}
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
        {...rest}
      />
    </Container>
  );
}
