import { Link } from "react-router-dom";

const News = () => {
    const images = [
        'https://i.pinimg.com/564x/50/f8/32/50f832c0f40ea37ddbba5fa57b112edb.jpg',
        'https://i.pinimg.com/564x/7b/dc/08/7bdc08d651e84a9a5ad0a5c37dcc3be5.jpg',
        'https://i.pinimg.com/564x/a1/b1/9b/a1b19b9fbe065d5938bc1dbbe27181c6.jpg',
        'https://i.pinimg.com/564x/fe/97/52/fe97522ba1b3b782c33320349ef4a2ab.jpg',
    ];

    

    return (
        <div className="section-newsSection">
            <h2>News</h2>
            <div className="images-newsSection">
                {images.map(img => (
                    <div className="card" key={img}>
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={img} alt={`News`} />
                            </div>
                            <div className="card-back">
                            <img src={img} alt={`News`} className="card-back-image"/>
                              <Link to='#' >Show more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
