import Header from './components/Header'
import TourismMap from './components/TourismMap'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        {/* <section className="hero">
          <div className="hero-overlay">
            <h1>Bản Đồ Du Lịch Phường Tân Lộc</h1>
            <p>
              Khám phá các địa điểm du lịch, văn hóa và trải nghiệm đặc sắc tại
              phường Tân Lộc, TP Cần Thơ.
            </p>
          </div>
        </section> */}

        <section className="map-section">
          {/* <div className="section-title">
            <h2>Khám Phá Bản Đồ Du Lịch</h2>
            <p>
              Xem chi tiết các địa điểm nổi bật và chỉ đường trực tiếp bằng Google Maps.
            </p>
          </div> */}

          <TourismMap />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App