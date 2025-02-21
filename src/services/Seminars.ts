import { API_URL } from '../const';
import { ISeminarsResponse } from '../types/Seminar';

//Запрашиваем весь список семинаров
export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/seminars`);
    return response;
  } catch (error) {
    console.log('Невозможно получить список семинаров');
    throw Error('Невозможно получить список семинаров');
  }
};

//Обновляем данные конкретного семинара
export const updateData = async (
  id: number,
  updateData: Partial<ISeminarsResponse>,
) => {
  try {
    const response = await fetch(`${API_URL}/seminars/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Невозможно обновить семинар');
  }
};

// Удаляем конкретный семинар
export const deleteData = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/seminars/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Невозможно удалить семинар');
  }
};
