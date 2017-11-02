import React, { Component } from 'react';
import Article from "./components/Article"
import SourceSelector from "./components/SourceSelector"
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      apiKey: 'e5fd3ed6cba945e084e31e3184293dd5',
      articles: [],
      visibleArticles:[],
      sources: [
        {
          name: "bbc-news",
          active: true
        },
        {
          name: "cnn",
          active: true
        },
        {
          name: "fox-news",
          active: true
        },
        {
          name: "the-washington-post",
          active: true
        },
        {
          name: "the-new-york-times",
          active: true
        }
      ]
    }
  }

  filterArticles(event) {
    let sourceName = event.target.value
    let sources = this.state.sources
    let source = sources.find( (s) => s.name === sourceName)
    source.active = false
    console.log(source);
    let filteredArticles = this.state.visibleArticles.filter( (article) => {
      if (article.source.id !== sourceName) {
        return article
      }
    })
    this.setState({
      visibleArticles: filteredArticles,
      sources: sources
    })
  }

  componentWillMount() {
    const url = `http://beta.newsapi.org/v2/top-headlines?sources=${this.state.sources.map( (source) => `${source.name}`)}
                &apiKey=${this.state.apiKey}`;
    axios.get(url).then((res) => {
      console.log(res.data.articles);
      this.setState({
        articles: res.data.articles,
        visibleArticles: res.data.articles
      });
    });

  }

  render() {
    const {visibleArticles, sources} = this.state
    return (
      <div className="App">
        <SourceSelector filterArticles={this.filterArticles.bind(this)} sources={sources} />
        {visibleArticles && visibleArticles.map( (article, idx) => {
            return <Article article={article} key={idx} />
          })
        }
      </div>
    );
  }
}

export default App;
