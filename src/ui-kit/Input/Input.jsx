import styles from './Input.module.scss';

function Input(props) {
  const { className, ...rest } = props;
  return (
    <input className={styles.input} {...rest} />
  );
}

export default Input;
