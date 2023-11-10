import { useState } from 'react';

import { useDispatch } from 'react-redux';
import Button from '../../ui-kit/Button/Button';

import { toggleActive } from '../../utils/active';

import styles from './Pagination.module.scss';

import { setSlicePage } from '../../redux/asyncActions/setSlicePage';

const Pagination = ({ product }) => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(product / 9); i++) {
    pageNumbers.push(i);
  }

  return (
    pageNumbers.map((number, index) => (
      <div key={number}>
        <Button
          className={active === index + 1 ? styles.activeBtn : styles.btn}
          onClick={() => {
            toggleActive(index + 1, setActive);
            dispatch(setSlicePage(number));
          }}
        >
          {number}
        </Button>
      </div>
    ))
  );
};

export default Pagination;
