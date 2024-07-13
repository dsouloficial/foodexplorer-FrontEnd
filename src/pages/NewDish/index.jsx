import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { Container, Content, LightButton } from './styles';

import CaretLeft from '../../assets/CaretLeft.svg';
import Upload from '../../assets/upload.svg';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NewTag } from '../../components/NewTag';
import { InputCurrency } from '../../components/InputCurrency';

import { api } from '../../services/api';

export function NewDish() {
  const [ dishImageFile, setDishImageFile ] = useState(null);
  const [ imgNameDisplay, setImgNameDisplay ] = useState('Selecione imagem');

  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState('');

  const [ categories, setCategories ] = useState([]);
  const [ name, setName ] = useState('');
  const [ dishCategory, setDishCategory ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ description, setDescription ] = useState('');

  const navigate = useNavigate();

  function handleRemoveIngredient(tag) {
    const filteredTags = ingredients.filter(t => t !== tag);
    setIngredients(filteredTags);
  }

  function handleAddIngredient() {
    if (!newIngredient) return;
    if (ingredients.includes(newIngredient.trim())) return setNewIngredient('');

    setIngredients(prevState => [ ...prevState, newIngredient.trim() ]);
    setNewIngredient('');
  }

  async function handleSubmit() {

    if (newIngredient)
      return toast.error('Existe um valor de ingrediente não adicionado. Clique para incluir ou deixe-o vazio.', { id: 'ingredient' });

    if (!name || !dishCategory || !price)
      return toast.error('Informe pelo menos Nome, categoria e preço do prato.', { id: 'mandatory' });

    const newDish = {
      name,
      category_id: dishCategory,
      description,
      price: Number(price.replace(',', '.')),
      ingredients
    };

    toast.loading('Salvando prato...', { id: newDish });

    try {
      const { data: savedDish } = await api.post(`/dishes`, newDish);

      const { id } = savedDish;

      if (dishImageFile && id) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('picture', dishImageFile);

        await api.patch(`/dishes/${id}/picture`, fileUploadForm);
      }
      toast.success('Prato salvo com sucesso!', { id: newDish });
      navigate('/');
    } catch (error) {
      toast.error('Erro ao salvar o prato.', { id: newDish });
    }
  }

  function handleImageKeypress(event) {
    if (event.code === 'Space' || event.code === 'Enter')
      event.target.click();
  }

  function handleChangeImage(event) {
    const file = event.target.files[ 0 ];
    setDishImageFile(file);
    setImgNameDisplay(file.name);
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
    fetchCategories();
  }, [])

  return (
    <Container>
      <Header />
      <Content>

        <Link to={'/'} className="back">
          <img src={CaretLeft} alt="" /> Voltar
        </Link>
        <h3>Novo prato</h3>

        <div className='input-row'>
          <div className="input-wrapper image">
            <label htmlFor="dish-image">Imagem do prato</label>
            <label className='input-image'
              tabIndex="0"
              onKeyUp={handleImageKeypress}
              htmlFor="dish-image">
              <img src={Upload} alt="" /> <span>{imgNameDisplay}</span>
            </label>
            <input
              type="file"
              name="picture"
              className="hidden"
              id="dish-image"
              placeholder="Selecione imagem"
              accept="image/png, image/jpeg"
              onChange={handleChangeImage}
            />
          </div>

          <div className="input-wrapper name">
            <label htmlFor="dish-name">Nome</label>
            <Input type="text" placeholder="Ex.: Salada Ceasar" id="dish-name" altcolor
              value={name}
              onChange={e => setName(e.target.value)} />
          </div>

          <div className="input-wrapper category">
            <label htmlFor="dish-category">Categoria</label>
            <div className='select-container'>
              <select name="categoria" id="dish-category" required
                value={dishCategory}
                onChange={e => setDishCategory(e.target.value)}
              >
                <option value="" disabled hidden>Escolha a categoria</option>
                {categories && categories.map(c => (
                  <option value={c.id} key={`${c.id}-${c.name}`}>{c.name}</option>
                ))}
              </select>

            </div>

          </div>
        </div>

        <div className='input-row'>
          <div className="input-wrapper ingredients">
          <label htmlFor="ingredients">Ingredientes</label>

            <div className='ingredients-list'>

              {ingredients.length > 0 &&
                ingredients.map((ingredient, idx) => (
                  <NewTag
                    key={`${idx}-${ingredient}`}
                    size={ingredient.length}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                    onKeyUp={e => { if (e.key === 'Delete') handleRemoveIngredient(ingredient); }}
                  />
                ))}

              <NewTag
                isNew
                id="ingredients"
                placeholder="Adicionar"
                value={newIngredient}
                onClick={handleAddIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onKeyUp={e => { if (e.key === 'Enter') handleAddIngredient(); }}
              />
            </div>
        </div>

          <div className="input-wrapper price">
            <label htmlFor="price">Preço</label>
            <InputCurrency altcolor
              placeholder="R$ 00,00"
              value={price}
              onValueChange={(value) => setPrice(value?.replace(',', '.'))}
            />
          </div>
        </div>

        <div className="input-wrapper">
          <label htmlFor="description">Descrição</label>
          <textarea
            rows="5"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>

        <LightButton onClick={handleSubmit}>Salvar alterações</LightButton>

      </Content>
      <Footer />
    </Container>
  );
}
