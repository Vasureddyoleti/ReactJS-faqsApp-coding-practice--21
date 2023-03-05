// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isShowAnswerClicked: false}

  onClickShoworHideAnswer = () => {
    this.setState(prevState => ({
      isShowAnswerClicked: !prevState.isShowAnswerClicked,
    }))
  }

  render() {
    const {itemDetails, key} = this.props
    const {questionText, answerText} = itemDetails
    const {isShowAnswerClicked} = this.state
    const imageUrl = isShowAnswerClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isShowAnswerClicked ? 'minus' : 'plus'

    return (
      <li key={key} className="list-item-container">
        <div className="question-button-container">
          <h2 className="question">{questionText}</h2>
          <button
            type="button"
            className="plus-minus-button"
            onClick={this.onClickShoworHideAnswer}
          >
            <img src={imageUrl} alt={altText} />
          </button>
        </div>
        {isShowAnswerClicked && (
          <div>
            <hr className="hr-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
