import React, { Component } from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            pageSize: 15
        }
        document.title = `NewsMonkey - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8bbb142aba21471eb282f246a7ef30b9&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({
            loading: true
        });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        await this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8bbb142aba21471eb282f246a7ef30b9&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    render() {
        return (
            <>
                <h1 className={"text-center"}>NewsMonkey - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll dataLength={this.state.articles.length} //This is important field to render the next data
                                next={this.fetchMoreData}
                                hasMore={this.state.articles.length < this.state.totalResults}
                                loader={<Spinner />}>
                    <div className={"container"}>
                        <div className={"row"}>
                            {this.state.articles.map((article) => {
                                return <div className={"col-md-4"}  key={article.url}>
                                    <NewsItem
                                        title={article.title?article.title.slice(0,50):""}
                                        description={article.description?article.description.slice(0,100):""}
                                        imageUrl={article.urlToImage?article.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png"}
                                        newsUrl={article.url}
                                        author={article.author}
                                        date={article.publishedAt}
                                        source={article.source.name}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}