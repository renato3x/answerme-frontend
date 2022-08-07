import Answer from "./Answer"

export default interface Question {
  id: number
  answers: Answer[]
  question: string
  createdAt: string
  updatedAt: string
}
