import styles from './Store.module.scss';
import StoreItemPage from './StoreItemPage';

const Store = () => (
  <div className={styles.container}>
    <div className={styles.store_top}>
      <h1>Магазин</h1>
    </div>
    <div className={styles.content_container}>
      <StoreItemPage />
    </div>
  </div>
);

export default Store;
