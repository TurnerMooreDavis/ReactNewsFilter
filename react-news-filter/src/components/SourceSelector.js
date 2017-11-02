import React, { Component } from 'react';


class SourceSelector extends Component {
  render() {
    const {filterArticles, sources} = this.props
    console.log(sources);
    console.log(filterArticles);
    return (
      <div className="SourceSelector">
        {sources && sources.map( (source, idx) => {
          const input = source.active ? <input type='checkbox' checked onChange={(event) => filterArticles(event)} value={source.name} key={idx} /> : <input type='checkbox' onChange={(event) => filterArticles(event)} value={source.name} key={idx} />;
          return (
            <div>
              <label>{source.name}</label>
              {input}
            </div>
            )
        })}
      </div>
    )
  }
}

export default SourceSelector
