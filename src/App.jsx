import { useState } from 'react';
import {
  Routes, Route, useSearchParams, useParams,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/AboutBrand';
import Store from './components/pages/Store/Store';
import Contacts from './components/pages/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import AddToBasket from './components/pages/AddToBasket/AddToBasket';
import Basket from './components/pages/Basket/Basket';
import Order from './components/pages/Order/Order';
import styles from './App.module.scss';
import Modal from './components/Modal/Modal';

import './index.css';
import Category from './components/pages/Store/Category';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="App">
      {openModal && <Modal toggleModal={toggleModal} />}
      <Header toggleModal={toggleModal} />
      <div>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="about" element={<About />} />

            <Route path="store" element={<Store />} />
            <Route
              path="store/?:category={c}"
              element={<Category category={category} />}
            />
            <Route path="store/:category/:id" element={<AddToBasket />} />

            <Route path="contacts" element={<Contacts />} />

            {/* <Route path='/store/addToBasket' element={<AddToBasket />} /> */}

            <Route path="/basket" element={<Basket />} />
            <Route path="/ordering" element={<Order />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
