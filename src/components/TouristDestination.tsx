function TouristDestination() {
  const destinations = [
    {
      id: 1,
      name: "Nhà cổ Ông Trần Bá Thế",
      description: "Công trình kiến trúc cổ tiêu biểu của vùng đất Tân Lộc.",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    },
    {
      id: 2,
      name: "Vườn trái cây Tân Lộc",
      description: "Điểm đến hấp dẫn với nhiều loại trái cây đặc sản.",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },
    {
      id: 3,
      name: "Bến tàu du lịch",
      description: "Trải nghiệm du lịch đường sông và tham quan cù lao.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
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
    <section
      id="destinations"
      style={{
        padding: "80px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#0f172a",
            fontSize: "2.5rem",
          }}
        >
          Điểm Du Lịch Nổi Bật
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "24px",
          }}
        >
          {destinations.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    color: "#0f172a",
                    marginBottom: "12px",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>

                {/* <button
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    background: "#16a34a",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Xem chi tiết
                </button> */}
              </div>
            </div>
          ))}
        </div>

        <h2
          style={{
            textAlign: "center",
            marginTop: "80px",
            marginBottom: "40px",
            color: "#0f172a",
            fontSize: "2.5rem",
          }}
        >
          Ngày Hội Trái Cây Tân Lộc
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
            gap: "24px",
          }}
        >
          {schedules.map((day) => (
            <div
              key={day.date}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  color: "#16a34a",
                  marginBottom: "20px",
                }}
              >
                Ngày {day.date}
              </h3>

              <ul
                style={{
                  paddingLeft: "20px",
                }}
              >
                {day.activities.map((activity, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "10px",
                      lineHeight: "1.6",
                    }}
                  >
                    {activity}
                  </li>
                ))}2
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TouristDestination;