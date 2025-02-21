import React from 'react';
import styles from '../styles.module.css';
import { IDeleteContent } from '../type';

const DeleteContent: React.FC<IDeleteContent> = ({
  onConfirmDelete,
  setActionType,
}) => {
  return (
    <>
      <h2>Удаление</h2>
      <p>Вы уверены, что хотите удалить этот семинар?</p>
      <div className={styles.modalFooter}>
        <button onClick={onConfirmDelete}>Удалить</button>
        <button onClick={() => setActionType(null)}>Отмена</button>
      </div>
    </>
  );
};

export default DeleteContent;
