import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import ContentDiv from './components/ContentDiv';
import Nav from './components/Nav';
import PageContentDiv from './components/PageContentDiv';

function App() {

  return (
    <ContentDiv className='min-h-[100vh] pb-8'>
      <BrowserRouter>
        <Nav/>
        <PageContentDiv>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/education' element={<EducationPage />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </PageContentDiv>
      </BrowserRouter>
    </ContentDiv>
  )
}

export default App
