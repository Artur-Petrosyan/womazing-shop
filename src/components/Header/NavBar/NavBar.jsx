import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const { navLink } = props;
  const activeStyle = ({ isActive }) => ({
    color: isActive ? '#6E9C9F' : '#000000',
  });
  return (
    <nav className={navLink}>
      <NavLink to="/" style={activeStyle}>
        Главная
      </NavLink>
      <NavLink to="store" style={activeStyle}>
        Магазин
      </NavLink>
      <NavLink to="about" style={activeStyle}>
        О бренде
      </NavLink>
      <NavLink to="contacts" style={activeStyle}>
        Контакты
      </NavLink>
    </nav>
  );
}
export default NavBar;
