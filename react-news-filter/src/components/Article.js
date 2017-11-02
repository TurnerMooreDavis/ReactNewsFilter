import React, { Component } from 'react';


class Article extends Component {
  render() {
    const {article} = this.props;
    return (
      <div className="Article">
        <a href={article.url}>
          <img src={article.urlToImage} alt={article.title}/>
        </a>
        <div className="article-info">
          <h1>{article.title}</h1>
          <h4>{article.description}</h4>
        </div>
        <div className="article-author">
          {article.author}
        </div>
      </div>
    )
  }
}

export default Article
