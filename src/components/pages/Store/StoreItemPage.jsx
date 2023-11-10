import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useNavigate, NavLink, useParams, useSearchParams,
} from 'react-router-dom';

import styles from './StoreItemPage.module.scss';

import Loader from '../../Loader/Loader';
import Pagination from '../../Pagination/Pagination';

import { TO_BASKET } from '../../../redux/reducers/toBasketreducer';
import { getProduct } from '../../../redux/asyncActions/getProducts';
import { getCategory } from '../../../redux/asyncActions/setCategories';

import { API } from '../../../api';
import { setSlicePage } from '../../../redux/asyncActions/setSlicePage';
import Category from './Category';

const StoreItemPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const sliceProduct = useSelector((state) => state.slicePage);
  const categories = useSelector((state) => state.categories);
  const product = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);

  const [active, setActive] = useState(1);

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCategory());
    dispatch(setSlicePage());
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return loading ? <div className={styles.pos_center}><Loader /></div>
    : (
      <div>
        <div className={styles.btn_nav}>
          {categories.map((item) => (
            <div key={item.id}>
              <NavLink
                to={`/store?category=${item.category}`}
                className={active === item.id ? styles.btnActive : styles.btn}
              >
                {item.name}
              </NavLink>

            </div>
          ))}
        </div>
        <div className={styles.itemPage}>
          <p className={styles.showItems}>
            {`Показано: ${sliceProduct.length} из ${product.length} товаров`}
          </p>
          <div className={styles.itemPage}>
            {sliceProduct.map((item) => (
              <NavLink
                to={`${item.category}/${item.id}`}
                key={item.id}
                className={styles.card}
              >

                <div>
                  <img src={item.image} alt="Girl" className={styles.cardImg} />
                </div>
                <h3 className={styles.itemName}>{item.name}</h3>
                <h3 className={styles.itemPrice}>
                  {item.price}
                  $
                </h3>
              </NavLink>
            ))}
            <Category />
          </div>
          <p className={styles.showItems}>
            Показано:
            {sliceProduct.length}
            из
            {product.length}
            товаров
          </p>
        </div>
        <div className={styles.pageBtn}>
          <Pagination
            product={product.length}
          />
        </div>
      </div>
    );
};

export default StoreItemPage;
