import React, { useState } from 'react';
import styles from './styles.module.css';
import Modal from '../Modal/Modal';
import { deleteData, updateData } from '../../services/Seminars';
import { ActionType, ICardSeminar } from './type';
import DeleteContent from '../Modal/components/DeleteContent';
import EditContent from '../Modal/components/EditContent';

const CardSeminar: React.FC<ICardSeminar> = props => {
  /**Состояние определяющее какой потомок отрисовывать внутри модального окна */
  const [actionType, setActionType] = useState<ActionType>(null);

  /**Функция подтверждения удаления */
  const handleConfirmDelete = async () => {
    await deleteData(props.id);

    props.setData(prev => prev.filter(seminar => seminar.id !== props.id));
    setActionType(null);
  };

  /**Функция подтверждения отредактированных данных */
  const handleConfirmEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updatedSeminar = Object.fromEntries(formData.entries());
    const responseData = await updateData(props.id, updatedSeminar);

    props.setData(prev =>
      prev.map(seminar => (seminar.id === props.id ? responseData : seminar)),
    );
    setActionType(null);
  };

  return (
    <>
      <article className={styles.article}>
        <div className={styles.buttons}>
          <button
            onClick={() => setActionType('edit')}
            className={styles.edit}
            title="Редактировать семинар">
            R
          </button>
          <button
            onClick={() => setActionType('delete')}
            className={styles.delete}
            title="Удалить семинар">
            X
          </button>
        </div>
        <div className={styles.image}>
          <img src={props.photo} alt={props.description} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.item}>
            <span>Название: </span>
            {props.title}
          </div>
          <div className={styles.item}>
            <span>Описание: </span>
            {props.description}
          </div>
          <div className={styles.item}>
            <span>Дата: </span>
            {props.date}
          </div>
          <div className={styles.item}>
            <span>Время: </span>
            {props.time}
          </div>
        </div>
      </article>

      <Modal actionType={actionType}>
        {actionType === 'edit' && (
          <EditContent
            onConfirmEdit={handleConfirmEdit}
            setActionType={setActionType}
            {...props}
          />
        )}

        {actionType === 'delete' && (
          <DeleteContent
            onConfirmDelete={handleConfirmDelete}
            setActionType={setActionType}
          />
        )}
      </Modal>
    </>
  );
};

export default CardSeminar;
