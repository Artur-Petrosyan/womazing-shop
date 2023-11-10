import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../ui-kit/Button/Button';
import styles from './Modal.module.scss';
import { BACK_CALL } from '../../redux/reducers/backCallReducer';
import ModalSuccess from './ModalSuccess';
import Input from '../../ui-kit/Input/Input';

function Modal({ toggleModal }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toggleSuccess = () => {
    setSuccess(!success);
  };

  const buttonSubmit = () => {
    dispatch({ type: BACK_CALL, data });
  };
  const numberValidation = () => {
    if (data.phone !== '') {
      if (Number.isInteger(data.phone * 1)) {
        return true;
      } return false;
    }

    return false;
  };
  const validatePhoneNumber = numberValidation();
  return (
    <div className={styles.modal} onClick={toggleModal}>
      <form
        action="submit"
        className={styles.form}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {success ? <ModalSuccess toggleModal={toggleModal} />
          : (
            <>
              <h3>
                Заказать обратный звонок
              </h3>
              <Input
                type="text"
                name="name"
                placeholder="Имя"
                id="name"
                value={data.name}
                onChange={(e) => { onChange(e); }}
              />
              <span className={
                            data.name ? styles.success : styles.err
                        }
              >
                Обязательное поле
              </span>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                id="email"
                value={data.email}
                onChange={onChange}
              />
              <span className={
                            data.email ? styles.success : styles.err
                        }
              >
                Обязательное поле
              </span>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Телефон"
                value={data.phone}
                onChange={(e) => {
                  onChange(e);
                }}
              />
              <span className={
                            validatePhoneNumber ? styles.success : styles.err
                        }
              >
                Должны быть только цифры
              </span>
              <Button
                disabled={
                                data.name === ''
                                || data.email === ''
                                || data.phone === ''
                                || !validatePhoneNumber
                            }
                type="submit"
                onClick={() => {
                  buttonSubmit();
                  toggleSuccess();
                }}
                className={
                                data.name && data.email && data.phone && validatePhoneNumber
                                  ? 'modal_button'
                                  : 'modal_button modal_button_disabled'
                            }
              >
                Заказать звонок
              </Button>
            </>
          )}
      </form>
    </div>
  );
}

export default Modal;
