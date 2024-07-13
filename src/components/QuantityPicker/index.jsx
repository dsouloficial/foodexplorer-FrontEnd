import { Container } from './styles';

import MinusImg from '../../assets/minus.svg';
import PlusImg from '../../assets/plus.svg';

import { useRef } from 'react';
import { useEffect } from 'react';

/**
 * seletor de valor numérico
 * @param {{setValue(), value?}} {param} - recebe um state e sua função setState
 * @returns JSX.Element
 * @usage \<QuantityPicker defaultValue={0} setValue={() => setNumber()} />
 */
export function QuantityPicker({ setValue = null, value = 0, ...rest }) {
  const qtyInput = useRef();

  function increment() {
    const value = Number(qtyInput.current.value);
    qtyInput.current.value = (value + 1).toString().padStart(2, '0');;
    if (setValue) setValue(prev => (prev + 1));
  }

  function decrement() {
    const value = Number(qtyInput.current.value);
    if (value > 1) {
      qtyInput.current.value = (value - 1).toString().padStart(2, '0');
      if (setValue) setValue(prev => (prev - 1));
    }
  }

  function initialValue() {
    const value = Number(qtyInput.current.value);
    qtyInput.current.value = (value).toString().padStart(2, '0');
  }

  useEffect(() => {
    initialValue();
  }, [])

  return (
    <Container className="quantity">
      <button id="minus" onClick={decrement}>
        <img src={MinusImg} />
      </button>
      <input
        type="text"
        defaultValue={value}  {...rest}
        ref={qtyInput}
        disabled
      />
      <button id="plus" onClick={increment}>
        <img src={PlusImg} />
      </button>
    </Container>
  );
}
