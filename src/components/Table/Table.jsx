import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Table.module.scss';
import deleteIcon from '../pages/Basket/assets/icons/delete.svg';

import { gettotalPrice } from '../../utils/getTotalPrice';
import Button from '../../ui-kit/Button/Button';
import { REMOVE, REMOVE_ALL } from '../../redux/reducers/basketReducer';

const Table = ({ head }) => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <table>
      <thead className={styles.thead}>
        <tr className={styles.item_container}>
          {head.map((item) => (
            <td key={item.name} className={styles.product_title}>
              {item.name}
            </td>
          ))}
        </tr>
        <tr className={styles.line} />
      </thead>

      <tbody>
        {basket.map((item) => (
          <tr key={item.id} className={styles.tr}>
            <td onClick={() => {
              dispatch({ type: REMOVE, id: item.id });
            }}
            >
              <img src={deleteIcon} alt="delete" className={styles.deleteIcon} />
            </td>
            <td className={styles.item_img}>
              {' '}
              <img src={item.image} alt={item.name} className={styles.image} />
            </td>
            <td className={styles.item_name_container}>
              <p className={styles.item_name}>{item.name}</p>
            </td>
            <td className={styles.item_price}>
              <h3>
                {item.price}
                $
              </h3>
            </td>
            <td className={styles.item_quantity}>
              {item.quantity}
            </td>
            <td className={styles.item_price}>
              <h3>
                {item.quantity * item.price}
                $
              </h3>
            </td>
          </tr>

        ))}
      </tbody>
      <tfoot>
        <tr className={styles.subtotal}>
          <td className={styles.subtotal_top}>
            <h1>
              Подытог:
              {basket.length && gettotalPrice(basket)}
              $
            </h1>
          </td>
          <td className={styles.makeAnOrder}>
            <div>
              <Button
                className={styles.orderBtn}
                onClick={() => dispatch({ type: REMOVE_ALL })}
              >
                Удалить все
              </Button>
            </div>
            <div className={styles.total}>
              <p>
                Итого: $
                {basket.length && gettotalPrice(basket)}
              </p>
            </div>
            <div>
              <Button
                disabled={!basket.length}
                className={styles.orderBtn}
                onClick={() => {
                  navigate('/ordering');
                }}
              >
                Оформить заказ
              </Button>
            </div>
          </td>

        </tr>
      </tfoot>
    </table>

  );
};
export default Table;
