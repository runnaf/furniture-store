export const getFormatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.toLocaleString('ru-RU', { day: 'numeric' })
    const month = date.toLocaleString('ru-RU', { month: 'long' })
    const year = date.toLocaleString('ru-RU', { year: 'numeric' })

    return `${day} ${month} ${year}`
}
