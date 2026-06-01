import React, { useState } from 'react';

// Khai báo một biến chứa chuỗi CSS ngay trong file
const bannerStyles = `
  .hero-banner {
    width: 100%;
    min-height: 600px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    padding: 40px 5%;
    box-sizing: border-box;
    gap: 24px;
  }
  
  .banner-img {
    width: 45%;
    height: auto;
    object-fit: contain;
    z-index: 2;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    border-radius: 12px;
  }
  
  .glass-panel {
    flex: 1;
    max-width: 320px;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 30px 24px;
    color: #ffffff;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  /* Responsive cho Tablet & Mobile */
  @media (max-width: 960px) {
    .hero-banner {
      flex-direction: column;
      justify-content: center;
      padding: 60px 5%;
    }
    .banner-img {
      width: 90%;
      max-width: 500px;
      order: -1; /* Đẩy ảnh lên trên cùng ở màn hình nhỏ */
      margin-bottom: 16px;
    }
    .glass-panel {
      max-width: 100%;
      width: 100%;
    }
  }
`;

function TouristDestination() {
  const destinations = [
    {
      id: 1,
      name: "Nhà cổ Ông Trần Bá Thế",
      description: "Nhà Cổ Ông Trần Bá Thế là một trong những ngôi nhà cổ tiêu biểu của Tân Lộc, mang đậm kiến trúc Nam Bộ xưa. Công trình lưu giữ nhiều giá trị văn hóa, lịch sử và phản ánh đời sống của tầng lớp điền chủ miền Tây đầu thế kỷ XX.",
      image: "/nha-co-ong-tran-ba-the.jpg",
      hot: true,
    },
    {
      id: 2,
      name: "Vườn Dừa Tân Lộc",
      description: "Vườn Dừa Tân Lộc nổi bật với không gian xanh mát, đậm chất miền Tây sông nước. Du khách có thể tham quan, chụp ảnh và trải nghiệm nét đẹp bình dị của vùng cù lao Tân Lộc.",
      image: "/vuon-dua.jpg",
      hot: true,
    },
    {
      id: 3,
      name: "Đình Thần Tân Lộc Đông",
      description: "Đình Thần Tân Lộc Đông là công trình tín ngưỡng lâu đời, gắn liền với lịch sử hình thành và phát triển của địa phương. Đây là nơi diễn ra nhiều lễ hội truyền thống và sinh hoạt văn hóa cộng đồng.",
      image: "/dinh-tan-loc-dong.jpg",
      hot: true,
    },
  ];

  const schedules = [
    {
      date: "18/06",
      activities: [
        "Lễ khai mạc Ngày hội Trái cây",
        "Diễu hành quảng bá du lịch",
        "Trưng bày trái cây đặc sản",
        "Biểu diễn đờn ca tài tử",
      ],
    },
    {
      date: "19/06",
      activities: [
        "Hội thi tạo hình nghệ thuật từ trái cây",
        "Trò chơi dân gian",
        "Hội thi ẩm thực",
        "Lễ bế mạc",
      ],
    },
  ];

  return (
    <>
      {/* Nhúng CSS trực tiếp vào component */}
      <style>{bannerStyles}</style>

      {/* HEADER / BANNER SECTION */}
      <section className="hero-banner">

        {/* Lớp Background làm mờ lấy từ chính ảnh gốc */}
        <div style={{
          position: 'absolute',
          top: -20, left: -20, right: -20, bottom: -20,
          backgroundImage: 'url("/bgTanLoc.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
          opacity: 0.8,
          zIndex: 0
        }} />

        {/* Lớp phủ màu tối */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.5)',
          zIndex: 1
        }} />

        {/* --- PANEL TRÁI: GIỚI THIỆU TÂN LỘC --- */}
        <div className="glass-panel">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Về Cù Lao Tân Lộc
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify', margin: 0 }}>
            Được mệnh danh là "Hòn đảo ngọt" giữa dòng sông Hậu, phường Tân Lộc nổi tiếng với những vườn cây ăn trái trĩu quả quanh năm. Nơi đây níu chân du khách bởi cảnh sắc miệt vườn thanh bình, những di tích nhà cổ kính mang đậm dấu ấn thời gian và sự hiếu khách, đôn hậu của con người miền Tây.
          </p>
        </div>

        {/* --- ẢNH BANNER TRUNG TÂM --- */}
        <img
          src="/bgTanLoc.png"
          alt="Ngày hội Trái Cây Phường Tân Lộc"
          className="banner-img"
        />

        {/* --- PANEL PHẢI: GIỚI THIỆU LỄ HỘI --- */}
        <div className="glass-panel">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Ngày Hội Trái Cây
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify', margin: 0 }}>
            Là sự kiện văn hóa - du lịch thường niên đặc sắc nhằm tôn vinh thành quả lao động của các nhà vườn. Đến với sự kiện, du khách sẽ được chiêm ngưỡng nghệ thuật tạo hình trái cây đỉnh cao, thưởng thức đặc sản tươi ngon và hòa mình vào không gian đờn ca tài tử, trò chơi dân gian rộn rã.
          </p>
        </div>

      </section>

      {/* KHÁM PHÁ ĐIỂM ĐẾN */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '4px',
                background: '#16a34a',
                borderRadius: '999px',
              }}
            />

            <span
              style={{
                color: '#16a34a',
                fontSize: '0.95rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Hành Trình
            </span>
          </div>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2.6rem',
              color: '#0f172a',
              marginBottom: '50px',
            }}
          >
            KHÁM PHÁ ĐIỂM ĐẾN
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '28px',
            }}
          >
            {destinations.map((item) => (
              <div
                key={item.id}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  transition: '0.3s',
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '240px',
                      objectFit: 'cover',
                    }}
                  />
                  {item.hot && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: '#ef4444',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}
                    >
                      HOT
                    </span>
                  )}
                </div>

                <div style={{ padding: '24px' }}>
                  <h3 style={{ color: '#0f172a', marginBottom: '12px', fontSize: '1.35rem' }}>
                    {item.name}
                  </h3>
                  <p style={{ color: '#64748b', lineHeight: '1.7' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NGÀY HỘI TRÁI CÂY */}
      <section style={{ padding: '80px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '4px',
                background: '#16a34a',
                borderRadius: '999px',
              }}
            />

            <span
              style={{
                color: '#16a34a',
                fontSize: '0.95rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Sự Kiện
            </span>
          </div>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2.6rem',
              color: '#0f172a',
              marginBottom: '50px',
            }}
          >
            NGÀY HỘI TRÁI CÂY TÂN LỘC 2026
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
              gap: '32px',
            }}
          >
            {schedules.map((day, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                }}
              >
                <h3
                  style={{
                    color: '#16a34a',
                    fontSize: '1.8rem',
                    marginBottom: '24px',
                    borderBottom: '3px solid #16a34a',
                    paddingBottom: '12px',
                    display: 'inline-block',
                  }}
                >
                  Ngày {day.date}
                </h3>

                <ul style={{ paddingLeft: '8px' }}>
                  {day.activities.map((activity, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: '14px',
                        fontSize: '1.05rem',
                        color: '#334155',
                        lineHeight: '1.65',
                      }}
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TouristDestination;