import { useEffect, useState } from 'react';
import { Banner, Container, Content, SliderWrapper } from './styles';
import { MdOutlineSearchOff } from 'react-icons/md'

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Slider } from '../../components/Slider';
import { api } from '../../services/api';
import { useSearch } from '../../hooks/search';

export function Home() {

  const [ dishes, setDishes ] = useState();
  const [ categories, setCategories ] = useState([]);

  const { searchValue, setSearch } = useSearch();

  const query = searchValue === undefined ? '' : searchValue

  async function fetchDishes() {
    try {
      const { data } = await api.get(`/dishes?search=${query}`);
      setDishes(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await api.get(`/categories`);
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategories()
    fetchDishes();
  }, []);

  useEffect(() => {
    fetchDishes();
  }, [ searchValue ]);

  return (
    <Container>
      <Header />
      <Content>
        <Banner>
          <div className="banner-wrapper">
            <div className="banner-content">
              <div className="banner-img"></div>
              <h3>Sabores inigualáveis</h3>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
        </Banner>

        {searchValue && (
          <div className='search-hint'>
            <div className='hint'>Buscando por: <em>{searchValue}</em></div>
            <MdOutlineSearchOff size={24} onClick={() => setSearch('')} />
          </div>
        )}

        {categories.map((category) => (
          <Slider title={category.name} key={`category:${category.id}`}>
            {
              dishes && dishes.filter(dish => dish.categoryId === category.id)
                .map((dish, id) => (
                  <Card dish={dish} key={`dish:${dish.id}`} url={`/dish/${dish.id}`} />
                ))
            }
          </Slider>
        ))}

      </Content>
      <Footer />
    </Container>
  );
}
