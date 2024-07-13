import { useState, useRef } from 'react';
import toast from 'react-hot-toast';

import { Container } from './styles';

import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [ password, setPassword ] = useState('');

  const [ isLoading, setLoading ] = useState(false);
  const loginButton = useRef(null);

  async function handleSignIn(event) {
    event.preventDefault();
    if (!email || !password)
      return toast.error('Por favor, informe e-mail e senha!', { id: 'missingInfo' });

    setLoading(true);
    loginButton.current.disabled = true;
    const toastId = toast.loading('Aguarde...');
    await signIn({ email, password });
    setLoading(false);
    loginButton.current.disabled = false;
    toast.dismiss(toastId);
  }

  return (
    <Container>
      <span className="logo">
        <img src={logo} alt="logo" />
        <h1>food explorer</h1>
      </span>

      <div className="form-wrapper">
        <h2 className="formTitle">Faça login</h2>
        <form>
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
            ref={loginButton}
            loading={isLoading}
            onClick={handleSignIn}>
            Entrar
          </Button>
        </form>

        <p>
          <a href="/signup">Criar uma conta</a>
        </p>
      </div>
    </Container>
  );
}
