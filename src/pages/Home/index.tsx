import { useEffect, useState } from 'react'
import { Card, CardActions, CardContent } from '../../components/Card'
import { Dialog, DialogTriggerButton } from '../../components/Dialog'
import Question from '../../interfaces/Question'
import AnswerMeApiService from '../../services/AnswerMeApiService'
import './Home.css'

export default function Home() {
  const [ questions, setQuestions ] = useState<Question[]>([])
  const [ dialogRef, setDialogRef ] = useState<HTMLDialogElement | null>()

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
            <Card key={question?.id} className="question-card">
              <CardContent>
                <p className="text-white question-content">
                  {question.question}
                </p>
              </CardContent>
              <CardActions className="question-card-actions">
                <p className="answer-quantity">
                  <i className="material-icons">question_answer</i> <span className="quantity">{question.answers?.length}</span>
                </p>
                <a href="#" className="mdl-button mdl-js-button mdl-js-ripple-effect text-white">More</a>
              </CardActions>
            </Card>
          )
        })}
      </section>
      <Dialog ref={setDialogRef} className="add-question-dialog"></Dialog>
      <DialogTriggerButton
        dialogRef={dialogRef as HTMLDialogElement}
        type="open"
        className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-button--accent" 
        id="add-question-btn"
      >
        <i className="material-icons">add</i>
      </DialogTriggerButton>
    </main>
  )
}
