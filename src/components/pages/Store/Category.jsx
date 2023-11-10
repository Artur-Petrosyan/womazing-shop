import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';

import { getProductsByCategory } from '../../../redux/asyncActions/getProductsByCategory';

import styles from './StoreItemPage.module.scss';
import Loader from '../../Loader/Loader';

const Category = () => {
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const dispatch = useDispatch();
  const filtredCategory = useSelector((state) => state.filtredCategory);
  useEffect(() => {
    if (category !== 'ALL') {
      dispatch(getProductsByCategory(category));
    }
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [category]);

  return loading ? <div><Loader /></div>
    : (
      <div className={styles.itemPage}>
        {filtredCategory.map((item) => (
          <NavLink
            to={`/store/${category}/${item.id}`}
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
      </div>
    );
};

export default Category;
