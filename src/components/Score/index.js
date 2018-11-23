import React from 'react'

import './score.scss'

class Score extends React.Component {
  getMessage(hits, total) {
    let score = total / 2
    if (hits > score) return 'Aprovado!'
    if (hits == score) return 'Na média!'
    if (hits < score) return 'Reprovado!'
  }

  getClass(hits, total) {
    let score = total / 2
    if (hits > score) return 'score--green'
    if (hits == score) return 'score--yellow'
    if (hits < score) return 'score--red'
  }

  render() {
    const { title, hits, total } = this.props

    const Elem = title ? 'h1' : 'strong';

    return (
      <div className="score">
        <Elem className={this.getClass(hits, total)}>
          {hits}/{total}
        </Elem>
        {title && <h3>{this.getMessage(hits, total)}</h3>}
      </div>
    )
  }
}

export default Score