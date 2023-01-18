// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {show: false}

  onClickButton = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    const {faq} = this.props
    const {answerText, questionText} = faq
    const {show} = this.state

    return (
      <li className="list-item">
        <div className="qustion-caontainer">
          <h1>{questionText}</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {show ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {show ? (
          <div>
            <hr />
            <p>{answerText}</p>
          </div>
        ) : (
          ''
        )}
      </li>
    )
  }
}
export default FaqItem
