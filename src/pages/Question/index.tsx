import { useParams } from 'react-router-dom'
import './Question.css'

export default function Question() {
  const { id } = useParams()

  return (
    <div>
      <h1>Question</h1>
      <p>{ id }</p>
    </div>
  )
}
