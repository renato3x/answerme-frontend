import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/question/:id" element={<Question/>}/>
      </Routes>
    </BrowserRouter>
  )
}
