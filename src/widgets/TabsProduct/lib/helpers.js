export const getStarsWord = (count) => {
    if (count === 1) {
        return count + ' звезда';
    } else if (count >= 2 && count <= 4) {
        return count + ' звезды';
    } else if (count >= 5) {
        return count + ' звезд';
    } else {
        return count + ' звезд'; // если значение < 1, можно обрабатывать как нужно
    }
}

export const endingOfTheWord = (totalMonthsPassed) => {
    if (totalMonthsPassed === 1) {
        return ''
    } else if (totalMonthsPassed < 5) {
        return 'a'
    } else if (totalMonthsPassed >= 5) {
        return 'ев'
    }
}

export const endingOfTheWordReview = (reviews) => {
    if (reviews === 1) {
        return ''
    } else if (reviews < 5) {
        return 'a'
    } else if (reviews >= 5) {
        return 'ов'
    }
}

export const monthsAgo = (date) => {
    // Преобразуем строку в объект даты
    const inputDate = new Date(date);
    const today = new Date();

    // Получаем разницу в годах и месяцах
    const yearsDifference = today.getFullYear() - inputDate.getFullYear();
    const monthsDifference = today.getMonth() - inputDate.getMonth();

    // Общее количество прошедших месяцев
    const totalMonthsPassed = yearsDifference * 12 + monthsDifference;

    // Возвращаем форматированный результат
    if (totalMonthsPassed > 0) {
        return totalMonthsPassed + " месяц" + endingOfTheWord(totalMonthsPassed) + " назад";
    } else if (totalMonthsPassed === 0) {
        return 'меньше месяца назад'
    } else if (totalMonthsPassed < 0) {
        return ''
    }
}

export const countStars = (ratings) => {
    // Инициализируем объект для подсчета звезд
    const starCount = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };
    if (ratings) {
        // Проходим по каждому объекту в массиве
        ratings.forEach(item => {
            if (item.rate >= 1 && item.rate <= 5) {
                starCount[Math.round(item.rate)]++;
            }
        });
    }

    // Возвращаем объект с количеством звезд
    return starCount;
}

export const calculateAverageStars = (starsObject) => {
    let totalStars = 0;
    let totalCount = 0;

    for (const [stars, count] of Object.entries(starsObject)) {
        totalStars += stars * count;
        totalCount += count;
    }

    // Проверка, что totalCount не равен 0, чтобы избежать деления на ноль
    return totalCount > 0 ? totalStars / totalCount : 0;
};

// функция которая принимает массив значений материалов и возвращает строку 
export const getLabelsAsString = (objectsArray) => {
  return objectsArray.map(obj => obj.label).join(', ');
}
