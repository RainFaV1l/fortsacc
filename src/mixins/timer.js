import {ref} from "vue";

export const useTimer = (milliseconds) => {

    // Разделение на часы, минуты и секунды
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    // Оставшееся время
    let remainingTime = milliseconds;

    // Запуск таймера
    const start = () => {

        // Изменение таймера
        updateTimer();

        setInterval(() => {

            // Если оставшееся время меньше или равно 0, то останавливаем код
            if (remainingTime <= 0) return;

            // Уменьшение оставшегося времени
            remainingTime -= 1000;

            // Изменение таймера
            updateTimer();

        }, 1000);

    }

    // Обновление таймера
    const updateTimer = () => {

        // Если оставшееся время меньше или равно 0, то останавливаем код
        if (remainingTime <= 0) return;

        // Получение часов, минут и секунд
        hours.value = Math.floor(remainingTime / (1000 * 60 * 60));
        minutes.value = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        seconds.value = Math.floor((remainingTime % (1000 * 60)) / 1000);

    };

    return {
        time: {
            hours,
            minutes,
            seconds,
        },
        start,
    }
}