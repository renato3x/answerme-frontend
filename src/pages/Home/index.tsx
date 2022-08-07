import addIcon from '../../../public/assets/icons/add.svg'
import './Home.css'

export default function Home() {
  return (
    <main id="home">
      <button className="btn-floating purple" id="add-question-btn">
        <img src={addIcon} alt="add icon" />
      </button>
    </main>
  )
}
