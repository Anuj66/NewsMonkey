import React, {Component} from 'react';

export default class NewsItem extends Component {
    render() {

        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

        return (
            <div className={"container my-3"}>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" style={{ width: '100%', height: '250px'}} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        {source && <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>}
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">Created
                            by {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : "Unknown"}</small>
                        </p>
                        <a href={newsUrl} target={"_blank"} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}