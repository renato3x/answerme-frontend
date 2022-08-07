import addIcon from '../../../public/assets/icons/add.svg'
import answerIcon from '../../../public/assets/icons/answer.svg'
import { Card, CardContent, CardTitle } from '../../components/Card'
import './Home.css'

export default function Home() {
  return (
    <main id="home">
      <section className="card-container">
        {new Array(5).fill('').map((_, index) => {
          return (
            <Card key={index}>
              <CardContent>
                <CardTitle>Title { index + 1 }</CardTitle>
                <p className="answer-quantity">
                  <img src={answerIcon} alt="answer icon"/> <span className="quantity">5</span>
                </p>
              </CardContent>
            </Card>
          )
        })}
      </section>
      <button className="btn-floating purple" id="add-question-btn">
        <img src={addIcon} alt="add icon"/>
      </button>
    </main>
  )
}
