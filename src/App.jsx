import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Architecture from './pages/Architecture'
import Metrics from './pages/Metrics'
import CICD from './pages/CICD'
import CodeSnippets from './pages/CodeSnippets'
import Alerting from './pages/Alerting'
import Conclusion from './pages/Conclusion'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/cicd" element={<CICD />} />
            <Route path="/code-snippets" element={<CodeSnippets />} />
            <Route path="/alerting" element={<Alerting />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
