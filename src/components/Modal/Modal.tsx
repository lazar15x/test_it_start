import { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { IModalProps } from './type';

const Modal: React.FC<IModalProps> = ({ children, actionType }) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (actionType) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [actionType]);

  return (
    <dialog ref={ref} aria-modal="true" className={styles.dialog}>
      {children}
    </dialog>
  );
};
export default Modal;
