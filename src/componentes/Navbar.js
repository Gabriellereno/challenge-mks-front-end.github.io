import React from 'react';
import style from '../css/navbar.module.css';
import Cart from '../componentes/utilitarios/Cart';

const Navbar = ({
  itensDoCarrinho,
  removeCart,
  cadaItem,
  maisQntdd,
  menosQntdd,
  carrinhoFormatado,
}) => {
  const [verCarrinho, setVerCarrinho] = React.useState(false);

  function abrirCarrinho() {
    if (verCarrinho) return false;
    setVerCarrinho(!verCarrinho);
  }
  function fecharCarrinho() {
    setVerCarrinho(!verCarrinho);
  }
  return (
    <div className={style.navBg}>
      <div className={style.conteudo}>
        <div className={style.logo}>
          <h1>MKS</h1>
          <p>Sistemas</p>
        </div>
        <div className={style.carrinho} onClick={abrirCarrinho}>
          <span className={style.svg}></span>
          <input
            readOnly
            disabled
            type="text"
            value={cadaItem ? cadaItem : 0}
          />
          <Cart
            itensDoCarrinho={itensDoCarrinho}
            carrinhoFormatado={carrinhoFormatado}
            verCarrinho={verCarrinho}
            fecharCarrinho={fecharCarrinho}
            removeCart={removeCart}
            maisQntdd={maisQntdd}
            menosQntdd={menosQntdd}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
