import { useEffect, useState } from 'react'
import addIcon from '../../../public/assets/icons/add.svg'
import answerIcon from '../../../public/assets/icons/answer.svg'
import { Card, CardActions, CardContent, CardTitle } from '../../components/Card'
import Question from '../../interfaces/Question'
import AnswerMeApiService from '../../services/AnswerMeApiService'
import './Home.css'

export default function Home() {
  const [ questions, setQuestions ] = useState<Question[]>([])

  useEffect(() => {
    async function getQuestions() {
      const apiQuestions = await AnswerMeApiService.getQuestions()
      setQuestions(apiQuestions)
    }

    getQuestions()
  }, [])

  return (
    <main id="home">
      <section className="card-container">
        {questions.map(question => {
          return (
            <Card key={question?.id}>
              <CardContent>
                <CardTitle>{question.question}</CardTitle>
                <p className="answer-quantity">
                  <img src={answerIcon} alt="answer icon" /> <span className="quantity">{question.answers?.length}</span>
                </p>
              </CardContent>
              <CardActions>
                <a href="#" className="btn-flat btn-small white-text">More</a>
              </CardActions>
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
