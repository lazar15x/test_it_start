import React, { useState } from 'react';
import styles from './styles.module.css';
import Modal from '../Modal/Modal';
import { deleteData, updateData } from '../../services/Seminars';
import { ActionType, ICardSeminar } from './type';

const CardSeminar: React.FC<ICardSeminar> = ({
  date,
  description,
  photo,
  time,
  title,
  id,
  setData,
}) => {
  /**Состояние определяющее какой потомок отрисовывать внутри модального окна */
  const [actionType, setActionType] = useState<ActionType>(null);

  /**Функция подтверждения удаления */
  const handleConfirmDelete = async () => {
    await deleteData(id);

    setData(prev => prev.filter(seminar => seminar.id !== id));
    setActionType(null);
  };

  /**Функция подтверждения отредактированных данных */
  const handleConfirmEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updatedSeminar = Object.fromEntries(formData.entries());
    const responseData = await updateData(id, updatedSeminar);

    setData(prev =>
      prev.map(seminar => (seminar.id === id ? responseData : seminar)),
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
          <img src={photo} alt={description} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.item}>
            <span>Название: </span>
            {title}
          </div>
          <div className={styles.item}>
            <span>Описание: </span>
            {description}
          </div>
          <div className={styles.item}>
            <span>Дата: </span>
            {date}
          </div>
          <div className={styles.item}>
            <span>Время: </span>
            {time}
          </div>
        </div>
      </article>

      <Modal actionType={actionType}>
        {actionType === 'edit' && (
          <>
            <form onSubmit={handleConfirmEdit}>
              <h2>Редактирование</h2>
              <div className={styles.inputs}>
                <input name="title" defaultValue={title} />
                <input name="description" defaultValue={description} />
                <input name="date" defaultValue={date} />
                <input name="time" type="time" defaultValue={time} />
                <input name="photo" defaultValue={photo} />
              </div>
              <div className={styles.modalFooter}>
                <button>Сохранить</button>
                <button onClick={() => setActionType(null)}>Отмена</button>
              </div>
            </form>
          </>
        )}

        {actionType === 'delete' && (
          <>
            <h2>Удаление</h2>
            <p>Вы уверены, что хотите удалить этот семинар?</p>
            <div className={styles.modalFooter}>
              <button onClick={handleConfirmDelete}>Удалить</button>
              <button onClick={() => setActionType(null)}>Отмена</button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default CardSeminar;
