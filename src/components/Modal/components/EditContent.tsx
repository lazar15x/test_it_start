import React from 'react';
import { IEditContent } from '../type';
import styles from '../styles.module.css';

const EditContent: React.FC<IEditContent> = props => {
  return (
    <>
      <form onSubmit={props.onConfirmEdit}>
        <h2>Редактирование</h2>
        <div className={styles.inputs}>
          <input name="title" defaultValue={props.title} />
          <input name="description" defaultValue={props.description} />
          <input name="date" defaultValue={props.date} />
          <input name="time" type="time" defaultValue={props.time} />
          <input name="photo" defaultValue={props.photo} />
        </div>
        <div className={styles.modalFooter}>
          <button>Сохранить</button>
          <button onClick={() => props.setActionType(null)}>Отмена</button>
        </div>
      </form>
    </>
  );
};

export default EditContent;
