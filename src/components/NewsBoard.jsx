import { useEffect, useState } from "react"
import NewsItems from "./NewsItems.jsx"



const NewsBoard = ({ category }) => {


    const [article, setArticle] = useState([])

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5418bb88c43946c19a38f552531def57`
        fetch(url).then(response => response.json()).then(data => setArticle(data.articles))

    }, [category])
    return (
        <div>
            <h2 className="text-center">Lastest <span className="badge bg-danger text-dark fs-4">News</span></h2>
            <div className="d-flex flex-wrap justify-content-center gap-3">
                {article.map((news, index) => (
                    <NewsItems
                        key={index}
                        title={news.title}
                        url={news.url}
                        description={news.description}
                        img={news.urlToImage}
                        date={news.publishedAt}
                    />
                ))}
            </div>
        </div>
    )
}

export default NewsBoard
