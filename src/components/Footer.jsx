function Footer() {
  return (
    <footer
      style={{
        background:
          'linear-gradient(135deg, #0f172a 0%, #111827 50%, #0b1120 100%)',
        color: '#e2e8f0',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '4rem 2rem 3rem',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '4rem',
        }}
      >
        <div>
          <h3
            style={{
              color: '#fff',
              fontSize: '1.8rem',
              marginBottom: '1rem',
            }}
          >
            Bản Đồ Du Lịch Tân Lộc
          </h3>

          <p
            style={{
              color: '#cbd5e1',
              lineHeight: '1.8',
              maxWidth: '600px',
            }}
          >
            Giới thiệu các địa điểm du lịch nổi bật tại phường Tân Lộc,
            TP Cần Thơ. Khám phá văn hóa miệt vườn, các vườn trái cây,
            nhà cổ và những điểm đến hấp dẫn trên cù lao Tân Lộc.
          </p>
        </div>

        <div>
          <h4
            style={{
              color: '#fff',
              marginBottom: '1rem',
              fontSize: '1.2rem',
            }}
          >
            Thông Tin
          </h4>

          <p
            style={{
              color: '#cbd5e1',
              marginBottom: '0.75rem',
            }}
          >
            📍 Phường Tân Lộc, TP Cần Thơ
          </p>

          <p
            style={{
              color: '#cbd5e1',
              marginBottom: '0.75rem',
            }}
          >
            🌴 Du lịch sinh thái
          </p>

          <p
            style={{
              color: '#cbd5e1',
              marginBottom: '0.75rem',
            }}
          >
            🏛️ Du lịch văn hóa
          </p>

          <p
            style={{
              color: '#cbd5e1',
            }}
          >
            🍊 Ngày hội Trái cây Tân Lộc
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
          padding: '1.4rem 1rem',
          color: '#94a3b8',
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        © 2026 Bản Đồ Du Lịch Tân Lộc - All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer