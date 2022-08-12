import axios from 'axios'
import Question from '../interfaces/Question'

export default class AnswerMeApiService {
  private static api = axios.create({
    baseURL: 'http://localhost:3000'
  })

  static async getQuestions(): Promise<Question[]> {
    return await this.api.get<Question[]>('questions').then(response => response.data)
  }

  static async createQuestion(question: Question): Promise<Question> {
    return await this.api.post<Question>('questions', question).then(response => response.data)
  }

  static async getQuestionById(id: number): Promise<Question> {
    return await this.api.get<Question>(`questions/${id}`).then(response => response.data)
  }
}
