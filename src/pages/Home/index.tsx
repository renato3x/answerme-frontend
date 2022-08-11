import { useCallback, useEffect, useState } from 'react'
import { Card, CardActions, CardContent } from '../../components/Card'
import { Dialog, DialogActions, DialogContent, DialogTitle, DialogTriggerButton } from '../../components/Dialog'
import Question from '../../interfaces/Question'
import AnswerMeApiService from '../../services/AnswerMeApiService'
import './Home.css'

export default function Home() {
  const [ questions, setQuestions ] = useState<Question[]>([])
  const [ dialogRef, setDialogRef ] = useState<HTMLDialogElement | null>()
  const [ label, setLabel ] = useState<HTMLLabelElement | null>()
  const [ question, setQuestion ] = useState<string>('')
  const questionIsInvalid = useCallback(() => {
    return question.length === 0
  }, [question])

  useEffect(() => {
    async function getQuestions() {
      const apiQuestions = await AnswerMeApiService.getQuestions()
      setQuestions(apiQuestions)
    }

    getQuestions()
  }, [])

  function handleToggleQuestionLabelClass() {
    label?.classList.toggle('question-label')
  }

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
      <Dialog ref={setDialogRef} className="add-question-dialog">
        <DialogTitle className="add-question-dialog-title text-white">New Question</DialogTitle>
        <DialogContent className="add-question-dialog-content">
          <form action="">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label question-input">
              <textarea 
                className="mdl-textfield__input text-white" 
                id="question"
                onFocus={handleToggleQuestionLabelClass}
                onBlur={handleToggleQuestionLabelClass}
                onInput={({ currentTarget }) => setQuestion(currentTarget.value)}
              ></textarea>
              <label ref={setLabel} className="mdl-textfield__label question-label" htmlFor="question">Type your question here</label>
            </div>
            <button 
              type="submit" 
              className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--primary"
              disabled={questionIsInvalid()}
            >Post</button>
          </form>
        </DialogContent>
        <DialogActions>
          <DialogTriggerButton type="close" dialogRef={dialogRef as HTMLDialogElement} className="mdl-button--colored mdl-button--primary">Cancelar</DialogTriggerButton>
        </DialogActions>
      </Dialog>
      <DialogTriggerButton
        dialogRef={dialogRef as HTMLDialogElement}
        type="open"
        className="mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-button--accent" 
        id="add-question-btn"
      >
        <i className="material-icons">add</i>
      </DialogTriggerButton>
    </main>
  )
}
