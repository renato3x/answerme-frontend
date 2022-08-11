import { useEffect, useState } from 'react'
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
                {question.question}
              </CardContent>
              <CardActions className="question-card-actions">
                <p className="answer-quantity">
                  <i className="material-icons">question_answer</i> <span className="quantity">{question.answers?.length}</span>
                </p>
                <a href="#" className="mdl-button mdl-js-button mdl-js-ripple-effect">More</a>
              </CardActions>
            </Card>
          )
        })}
      </section>
      <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-button--primary" id="add-question-btn">
        <i className="material-icons">add</i>
      </button>
    </main>
  )
}
