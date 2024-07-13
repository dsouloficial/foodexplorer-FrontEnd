import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'

import { Container, SearchBox } from './styles';

import openMenuImg from '../../assets/menu-open.svg';
import closeMenuImg from '../../assets/menu-close.svg';
import receiptImg from '../../assets/receipt.svg';
import logoImg from '../../assets/logo.svg';
import exitImg from '../../assets/exit.svg';

import { Input } from '../Input';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../hooks/search';
import { useCart } from '../../hooks/cart';

export function Header() {

  const navRef = useRef();

  const { signOut, user } = useAuth();
  const { setSearch, searchValue } = useSearch();
  const { cartItems } = useCart();

  const cart = { items: cartItems };

  const navigate = useNavigate();

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      toggleNavbar(e);
    }
  }

  function toggleNavbar(e) {
    console.log('toggleNavbar', e.target);
    navRef.current.classList.toggle('mobile-menu');
  }

  return (
    <Container>
      <button className="menu no-bg" onClick={toggleNavbar} aria-label="Abrir Menu">
        <img id="menu-img" src={openMenuImg} alt="abrir menu" />
      </button>

      <div className="logo-wrapper">
        <div className="logo">
          <img src={logoImg} alt="logo food explorer" />
          <h1>food explorer</h1>
        </div>
        {user.admin ? <span>Admin</span> : <></>}
      </div>

      <div className="navbar">
        <nav ref={navRef}>
          <button className="menu no-bg" onClick={toggleNavbar} aria-label="Fechar Menu">
            <img src={closeMenuImg} alt="fechar menu" />
            Menu
          </button>

          <Input
            placeholder="Busque por pratos ou ingredientes"
            type='search'
            Icon={FiSearch}
            value={searchValue}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />

          {user.admin ? (
            <button
              className="mobile-button"
              onClick={() => {
                navigate('/new');
              }}
            >
              <span>Novo prato</span>
            </button>
          ) : null}

          <button className="mobile-button" onClick={handleSignOut}>
            <span>Sair</span>
          </button>
        </nav>

        {user.admin ? (
          <Button
            className='desktop-only btn-new-dish'
            onClick={() => {
              navigate('/new');
            }}
          >
            Novo prato
          </Button>
        ) : (
            <button aria-label="pedido" id='btn-order' type='button'>
              <img src={receiptImg} alt="icone do pedido" />
              <span className='btn-order-text'>Pedidos</span>
              <span className='btn-order-qty'>{cart.items}</span>
          </button>
        )}

        <button id="exit" onClick={handleSignOut} className='no-bg'>
          <img src={exitImg} alt="Sair da aplicação" />
        </button>
      </div>
    </Container>
  );
}
