import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CaretLeft from '../../assets/CaretLeft.svg';
import PreviewPlaceholder from '../../assets/empty_plate.png';

import { Container, Content } from './styles';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { QuantityPicker } from '../../components/QuantityPicker';

import { api } from '../../services/api';
import { useCart } from '../../hooks/cart';

export function Dish() {
  const [ quantity, setQuantity ] = useState(1);
  const [ dish, setDish ] = useState();

  const { addDish } = useCart();

  const { id } = useParams();
  const navigate = useNavigate();

  const dishPreviewURL = dish?.picture
    ? `${api.defaults.baseURL}/files/${dish.picture}`
    : PreviewPlaceholder;

  function handleSubmit() {
    addDish(dish, Number(quantity));
  }

  async function fetchDish(id) {
    const dishId = Number(id);
    try {
      const { data } = await api.get(`/dishes/${dishId}`);
      if (data.id) {
        setDish(data);
      }
    } catch (error) {
      console.error(error);
      navigate('/', redirect);
    }
  }

  useEffect(() => {
    fetchDish(id);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Link to={'/'}>
          <img src={CaretLeft} alt="voltar" /> Voltar
        </Link>
        {dish &&
          <div className="dish-wrapper">
            <div className="dish-preview">
              <img src={dishPreviewURL} alt="foto do prato" />
            </div>
            <div className="info">
              <h3>{dish?.name}</h3>
              <p>{dish?.description}</p>
              <div className="tags">
                {dish?.ingredients ? dish.ingredients.map((item, id) => <Tag key={id} title={item} />) : null}
              </div>
              <div className="order">
                <QuantityPicker value={quantity} setValue={setQuantity} onChange={setQuantity} />
                <Button onClick={handleSubmit}>incluir ∙ R$ {dish?.price ? String(dish?.price.toFixed(2)).replace('.', ',') : "--"}</Button>
              </div>
            </div>
          </div>
        }

      </Content>
      <Footer />
    </Container>
  );
}
