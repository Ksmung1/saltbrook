import {Routes, Route} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import './App.css'
import About from "./pages/About"
import Admission from "./pages/Admission"
import Calendar from "./academic/Calendar"
import Result from "./academic/Result"
import Timing from "./academic/Timing"
import Activities from "./academic/Activities"
import Gallery from "./pages/Gallery"
import News from "./pages/News"
import NewsDetail from "./pages/NewsDetail"
import TeachingStaffs from "./administration/TeachingStaffs"
import NonTeachingStaff from "./administration/NonTeachingStaff"
import StudentCouncil from "./administration/StudentCouncil"
import Contact from "./pages/Contact"

const App = ()=>{
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="news" element={<News/>}/>
        <Route path="news/:id" element={<NewsDetail/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="admission" element={<Admission/>}/>
      </Route>
      <Route path="/academic" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="calendar" element={<Calendar/>}/>
        <Route path="result" element={<Result/>}/>
        <Route path="timing" element={<Timing/>}/>
        <Route path="activities" element={<Activities/>}/>
      </Route>
      <Route path="/administration" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="teaching" element={<TeachingStaffs/>}/>
        <Route path="non-teaching" element={<NonTeachingStaff/>}/>
        <Route path="student-council" element={<StudentCouncil/>}/>
      </Route>
    </Routes>
  )
}

export default App