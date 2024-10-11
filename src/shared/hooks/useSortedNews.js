import { useEffect, useState } from "react"
import { getFormatDate } from "../libs/getFormatDate"

export const useSortedNews = (news) => {
    const [sortedNews, setSortedNews] = useState([])

    useEffect(() => {
        const sorted = news.sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(item => ({
            ...item,
            date: getFormatDate(item.date)
        }))
        setSortedNews(sorted)
    }, [news])


    return sortedNews
}