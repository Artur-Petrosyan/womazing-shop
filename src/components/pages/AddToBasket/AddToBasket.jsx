import { useSelector, useDispatch } from 'react-redux';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { useParams } from 'react-router-dom';
import { CHECK_SIZE, SELECT_COLOR } from '../../../redux/reducers/sizeReducer';

import brown from './assets/icons/brown.svg';
import lightGray from './assets/icons/lightGray.svg';
import peachOrange from './assets/icons/peachOrange.svg';
import pink from './assets/icons/pink.svg';
import Button from '../../../ui-kit/Button/Button';
import { ADD } from '../../../redux/reducers/basketReducer';
import styles from './AddToBasket.module.scss';
import { toggleActive, toggleActiveColor } from '../../../utils/active';
import { getSize } from '../../../redux/selectors/getSize';
import { getToBasketId } from '../../../redux/selectors/getToBasketId';
import { getSingleItem } from '../../../redux/asyncActions/getSingleItem';

const AddToBasket = () => {
  const params = useParams();
  const singleProduct = useSelector((state) => state.singleItemById);

  const names = [
    { name: 'S', id: 1 },
    { name: 'M', id: 2 },
    { name: 'L', id: 3 },
    { name: 'XL', id: 4 },
    { name: 'XXL', id: 5 },
  ];
  const colors = [
    { color: 'Brown', image: brown, id: 1 },
    { color: 'Light Grey', image: lightGray, id: 2 },
    { color: 'Peach Orange', image: peachOrange, id: 3 },
    { color: 'Pink', image: pink, id: 4 },
  ];
  const basket = useSelector((state) => state.basket);

  const dispatch = useDispatch();
  const [color, setColor] = useState(false);
  const [checkSize, setChekSize] = useState(false);
  const [localItem, setLocalItem] = useState([]);
  const [localId, setLocalId] = useState();
  const [active, setActive] = useState(0);
  const [activeColor, setActiveColor] = useState(0);

  const [quantitySingleItem, setQuantitySingleItem] = useState(0);

  const toBasketId = useSelector(getToBasketId);
  const size = useSelector(getSize);
  const buttonsRef = useRef([]);
  const getItemFromLocal = () => {
    const idFromLocal = JSON.parse(localStorage.getItem('localItems'));
    setLocalItem(idFromLocal);
    return idFromLocal;
  };
  const getQuantity = () => {
    const filtred = basket.filter((item) => item.id === +params.id);
    let quantity = 0;
    filtred.forEach((item) => {
      quantity = item.quantity;
      return quantity;
    });
    setQuantitySingleItem(quantity);
  };
  const getIdfromLocal = () => {
    const idFromLocal = JSON.parse(localStorage.getItem('localId'));
    setLocalId(idFromLocal);
    return idFromLocal;
  };
  useEffect(() => {
    getIdfromLocal();
    getItemFromLocal();
    getQuantity();
  }, [quantitySingleItem]);
  const addToButtonRef = useCallback((el) => {
    if (el && !buttonsRef.current.includes(el)) {
      return buttonsRef.current.push(el);
    } return [];
  }, [buttonsRef]);
  useEffect(() => {
    dispatch(getSingleItem(params.id));
  }, [params.id, params.category]);
  // const checked = checkedColorAndSize(size);
  // const selectedItem = findSelectedItem(checked);

  const toggleColor = (id) => {
    if (id) {
      setColor(true);
    } else setColor(false);
  };

  const toggleSize = () => {
    const activeBtn = buttonsRef.current.filter((item) => item.className === styles.btnActive);
    if (activeBtn) {
      setChekSize(true);
    } else setChekSize(false);
  };

  return (
    <div>
      {singleProduct.map(((item) => (
        <div key={item.id}>
          <div className={styles.topContainer}>
            <h1 className={styles.h1}>
              {item.name}
            </h1>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.imgContainer}>
              <img
                src={`../${item.image}`}
                alt={item.name}
              />
            </div>
            <div>
              <h2 className={styles.itemPrice}>
                {item.price}
                $
              </h2>
              <h4 className={styles.selectSize}>
                Выберите размер
              </h4>
              {names.map((item) => (
                <Button
                  btnRef={addToButtonRef}
                  className={active
                    === item.id
                    ? styles.btnActive
                    : styles.selectBtn}
                  key={item.id}
                  onClick={() => {
                    toggleActive(item.id, setActive);
                    toggleSize();
                    dispatch({
                      type: CHECK_SIZE,
                      id: toBasketId.id,
                      name: item.name,
                    });
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <div className={styles.changeColor_h4}>
                <h4>Выберите цвет</h4>
              </div>
              <div className={styles.colorsContainer}>
                {colors.map((item) => (
                  <div
                    key={item.id}
                    className={
                      activeColor === item.id
                        ? styles.colorDivActive
                        : styles.colorDiv
                    }
                    onClick={() => {
                      toggleActiveColor(item.id, setActiveColor);
                      toggleColor(item.id, color);
                      dispatch({
                        type: SELECT_COLOR,
                        color: item.color,
                      });
                    }}
                  >
                    <img
                      src={item.image}
                      alt="color"
                    />

                  </div>
                ))}
              </div>
              <div className={styles.buttons_container}>
                <Button className={styles.quantity}>
                  {quantitySingleItem}
                </Button>
                <Button
                  className={
                    color && checkSize
                      ? styles.addButton
                      : styles.addButtonDisabled
                  }
                  disabled={!color && !checkSize}
                  onClick={() => {
                    if (color && checkSize) {
                      setQuantitySingleItem(quantitySingleItem + 1);

                      dispatch({
                        type: ADD,
                        quantity: quantitySingleItem,
                        product: item,

                      });
                    }
                  }}
                >

                  Добавить в корзину
                </Button>
              </div>
            </div>
          </div>
        </div>
      )))}

    </div>
  );
};

export default AddToBasket;
