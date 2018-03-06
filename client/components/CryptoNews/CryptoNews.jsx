import React from 'react'
import request from 'superagent'

import './cryptoNews.css'

class CryptoNews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount () {
    request
      .get('https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=de4aab35c5d549a2a235ec63110a707d'
      )
      .then(res => {
        this.setState({
          articles: [
            res.body.articles[0],
            res.body.articles[1],
            res.body.articles[2]
          ]
        })
      })
  }

  render () {
    return (
      <div className='news-full'>
        <h1 className = 'news-header' > Cryptocurrency News </h1>
        <hr className='horizontal-rule'/>
        <div className='news-container'>
          {this.state.articles.map((article, idx) => {
            return (
              <div key={idx} className='article-container'>
                <a href={`${article.url}`} className='article-link'>
                  <h4 className='article-header'>{article.title}</h4>
                  <p> -{article.source.name} </p>
                </a>
              </div>
            )
          })
          }
        </div>
      </div>
    )
  }
}

export default (CryptoNews)
