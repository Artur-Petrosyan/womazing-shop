import { NavLink, Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar';
import { getBasket } from '../../redux/selectors/getBasket';

import logo from './assets/icons/Logo.svg';
import phone from './assets/icons/phone.svg';
import basketIcon from './assets/icons/basket.svg';

import styles from './Header.module.scss';

function Header({ toggleModal }) {
  const navigate = useNavigate();
  const basket = useSelector((state) => getBasket(state));

  const [quantity, setQuantity] = useState(basket.length);

  useEffect(() => {
    setQuantity(basket.length);
  }, [basket]);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
            <NavLink to="/">Womazing</NavLink>
          </div>
          <NavBar navLink={styles.navLink} />
          <div className={styles.phone}>
            <img src={phone} alt="phone" onClick={toggleModal} />
            <Link to="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</Link>
            <div className={styles.basketIcon}>
              <NavLink
                to="/basket"
                onClick={() => {
                  navigate('/basket');
                }}
              >
                <img src={basketIcon} alt="basket" />
              </NavLink>
              <div className={styles.quantity}>
                <div><span>{quantity}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;
