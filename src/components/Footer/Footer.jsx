import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import Header from '../Header/Header';
import instagram from './assets/icons/instagram.svg';
import facebook from './assets/icons/facebook.svg';
import twitter from './assets/icons/twitter.svg';
import visa from './assets/icons/visa.svg';

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.leftPart}>
            <NavLink>© Все права защищены</NavLink>
            <NavLink>Публичная оферта</NavLink>
            <NavLink>Политика конфиденциальности</NavLink>
          </div>
          <div className={styles.middlePart}>
            <NavLink>Пальто</NavLink>
            <NavLink>Свитшоты</NavLink>
            <NavLink>Кардиганы</NavLink>
            <NavLink>Толстовки</NavLink>

          </div>
          <div className={styles.rightPart}>
            <NavLink to="mailto:hello@womazing.com">hello@womazing.com</NavLink>
            <div className={styles.webSite_icons}>
              <NavLink to="https://www.instagram.com/"><img src={instagram} alt="instagram" /></NavLink>
              <NavLink to="https://www.facebook.com/"><img src={facebook} alt="facebook" /></NavLink>
              <NavLink to="https://twitter.com/?lang=en"><img src={twitter} alt="twitter" /></NavLink>
            </div>
            <div>
              <NavLink><img src={visa} alt="visa" /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
