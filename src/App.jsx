import Header from './components/Header'
import Footer from './components/Footer'
import TourismMap from './components/TourismMap'
import TouristDestination from './components/TouristDestination'

import { Routes, Route } from 'react-router-dom'

function Home() {
  return <h1>Trang Chủ</h1>
}

function Contact() {
  return <h1>Liên Hệ</h1>
}
function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />

      <main
        style={{
          flex: 1
        }}
      >
        <Routes>
          <Route path="/hanh-trinh" element={<TouristDestination />} />
          <Route path="/" element={<TourismMap />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
export default App