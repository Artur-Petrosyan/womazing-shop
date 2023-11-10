import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './Order.module.scss';
import { getBasket } from '../../../redux/selectors/getBasket';
import Input from '../../../ui-kit/Input/Input';
import Button from '../../../ui-kit/Button/Button';
import { setOrder } from '../../../redux/actions/setOrder';
import '../../../common/CommonStyles.css';
import { gettotalPrice } from '../../../utils/getTotalPrice';

const Order = () => {
  const basket = useSelector((state) => getBasket(state));
  const dispatch = useDispatch();
  const [data, setData] = useState(
    {
      name: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      street: '',
      home: '',
      apartment: '',
    },
  );
  const values = Object.values(data);
  const val = values.find((item) => item === '');
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.order_container}>

      <h1 className={styles.h1}>Оформление заказа</h1>
      <div className={styles.order_content}>
        <div className={styles.left_part}>

          <div className={styles.inpContainer}>
            <h3>
              Данные покупателя
            </h3>
            <Input
              name="name"
              type="text"
              placeholder="Имя"
              value={data.name}
              onChange={(e) => { onChange(e); }}
            />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              value={data.email}
              onChange={(e) => { onChange(e); }}
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Телефон"
              value={data.phone}
              onChange={(e) => { onChange(e); }}
            />
            <div className={styles.inpContainer}>
              <h3>
                Адрес получателя
              </h3>
              <Input
                name="country"
                type="text"
                placeholder="Страна"
                value={data.country}
                onChange={(e) => { onChange(e); }}
              />
              <Input
                name="city"
                type="email"
                placeholder="Город"
                value={data.city}
                onChange={(e) => { onChange(e); }}
              />
              <Input
                name="street"
                type="text"
                placeholder="Улица"
                value={data.street}
                onChange={(e) => { onChange(e); }}
              />
              <Input
                name="home"
                type="text"
                placeholder="Дом"
                value={data.home}
                onChange={(e) => { onChange(e); }}
              />
              <Input
                name="apartment"
                type="text"
                placeholder="Квартира"
                value={data.apartment}
                onChange={(e) => { onChange(e); }}
              />

            </div>
            <div>
              <h3>
                Комментарии
              </h3>
              <textarea placeholder="Страна" className={styles.textArea} />

            </div>
          </div>
        </div>

        <div className={styles.right_part}>
          <div>
            <div>
              <h3>Ваш заказ</h3>
            </div>
            <select name="cards" id="cards" className={styles.select}>

              {basket.map((item) => (
                <option className={styles.option} value={item.name}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </option>
                // <div className={styles.info} key={item.id}>

                //   <p>
                //     {item.quantity * item.price}
                //     $
                //   </p>

                // </div>
              ))}
            </select>

            <div className={styles.info}>
              <h4>Подытог</h4>
              <p>
                {gettotalPrice(basket)}
                $
              </p>
            </div>
            <div className={styles.info}>
              <h4>Итого</h4>
              <p>
                {gettotalPrice(basket)}
                $
              </p>
            </div>
          </div>
          <Button

            className="default_button"
            onClick={() => {
              dispatch(setOrder(data, basket));
            }}
          >
            Разместить заказ

          </Button>
        </div>
      </div>

    </div>
  );
};

export default Order;
