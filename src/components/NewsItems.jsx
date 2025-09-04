import React from 'react'

const NewsItems = ({ title, url, img, description, date }) => {
    const NowDate = new Date(date);
    const formattedDate = NowDate.toLocaleString();
    return (
        <div>
            <div className="card bg-dark text-light mb-3 d-flex mx-2 my-3 px-2 py-2" style={{ maxWidth: "340px" }}>
                <img src={img || "https://via.placeholder.com/322x200?text=No+Image"} style={{ height: "200px", width: "322px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-white">{title.slice(0, 50)}</h5>
                    <p className="card-text">{description ? description.slice(0, 50) : "Breaking updates from across the globe bring insightful developments on politics, science, economy, climate, and human interest stories."}</p>
                    <p className='date'>{formattedDate}</p>
                    <a href={url} className="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems
