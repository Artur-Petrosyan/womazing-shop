import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getBasket } from '../../../redux/selectors/getBasket';

import Button from '../../../ui-kit/Button/Button';

import styles from './Basket.module.scss';
import Table from '../../Table/Table';

const Basket = () => {
  const tableHead = [
    { name: 'Товар' },
    { name: 'Цена' },
    { name: 'Количество' },
    { name: 'Всего' },
  ];

  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const navigate = useNavigate();
  return (
    <div className={styles.h1_container}>
      <h1 className={styles.h1}>Корзина</h1>
      {basket.length
        ? (
          <Table
            head={tableHead}
          />
        )
        : (
          <div className={styles.notItemContainer}>
            <h1 className={styles.notItems}>
              Not Items
            </h1>
            <Button
              className={styles.toStore}
              onClick={() => {
                navigate('/store');
              }}
            >
              Перейти на магазин
            </Button>
          </div>
        )}
    </div>
  );
};

export default Basket;
