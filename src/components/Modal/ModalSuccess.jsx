import Button from '../../ui-kit/Button/Button';
import styles from './ModalSuccess.module.scss';

function ModalSuccess({ toggleModal }) {
  return (
    <div className={styles.modalSuccess}>
      <h3 className={styles.h3}>
        Отлично! Мы скоро вам перезвоним.
      </h3>
      <Button onClick={toggleModal} className={styles.button}>Закрыть</Button>
    </div>
  );
}
export default ModalSuccess;
