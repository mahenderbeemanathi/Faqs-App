// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul className="ul">
            {faqsList.map(eachFaqs => (
              <FaqItem faq={eachFaqs} key={eachFaqs.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
