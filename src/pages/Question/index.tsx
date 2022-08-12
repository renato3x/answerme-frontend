import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardTitle, CardContent } from '../../components/Card'
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
      <Card className="question-card text-white">
        <CardTitle>{question?.question}</CardTitle>
        <CardContent className="question-card-content">
          <p style={{ margin: '0' }}>Sent at {moment(question?.createdAt).fromNow()}</p>
        </CardContent>
      </Card>
    </main>
  )
}
