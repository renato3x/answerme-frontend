import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardTitle, CardContent, CardActions } from '../../components/Card'
import QuestionInterface from '../../interfaces/Question'
import AnswerMeApiService from '../../services/AnswerMeApiService'
import moment from 'moment'
import './Question.css'

export default function Question() {
  const { id } = useParams()
  const [ question, setQuestion ] = useState<QuestionInterface>()

  useEffect(() => {
    loadQuestion()
  }, [])

  async function loadQuestion() {
    const apiQuestion = await AnswerMeApiService.getQuestionById(parseInt(id as string))
    setQuestion(apiQuestion)
  }

  return (
    <main id="question">
      <Card>
        <CardTitle>{question?.question}</CardTitle>
        <CardContent>
          <p>Sent at {moment(question?.createdAt).fromNow()}</p>
        </CardContent>
      </Card>
    </main>
  )
}
