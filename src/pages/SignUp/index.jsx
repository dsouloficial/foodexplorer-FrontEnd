import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import logo from '../../assets/logo.svg';

import { api } from '../../services/api';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ password, setPassword ] = useState('');

  const [ isLoading, setLoading ] = useState(false);
  const submitButton = useRef(null);

  const navigate = useNavigate();

  function handleSignUp(event) {
    event.preventDefault();

    if (!name || !email || !password)
      return toast.error('Por favor, preencha todos os campos!', { id: 'missingInfo' });

    setLoading(true);
    submitButton.current.disabled = true;
    toast.loading('Criando usuário, aguarde...', { id: 'newUser' });

    api
      .post('/users', { name, email, password })
      .then(() => {
        toast.success('Usuário cadastrado com sucesso!', { id: 'newUser' });
        navigate('/');
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message, { id: 'newUser' });
        } else {
          toast.error('Não foi possível cadastrar o usuário.', { id: 'newUser' });
        }
        setLoading(false);
        submitButton.current.disabled = false;
      });
  }

  return (
    <Container>
      <span className="logo">
        <img src={logo} alt="logo" />
        <h1>food explorer</h1>
      </span>

      <div className="form-wrapper">
        <h2 className="formTitle">Crie sua conta</h2>
        <form>
          <label htmlFor="email">Seu nome</label>
          <Input
            id="name"
            type="name"
            placeholder="Exemplo: Maria da Silva"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            onClick={handleSignUp}
            ref={submitButton}
            loading={isLoading}
          >
            Criar conta
          </Button>
        </form>

        <p>
          <a href="/">Já tenho uma conta</a>
        </p>
      </div>
    </Container>
  );
}
