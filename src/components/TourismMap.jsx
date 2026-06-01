function TourismMap() {
  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 80px - 220px)'
      }}
    >
      <iframe
        title="Google My Map Tân Lộc"
        src="https://www.google.com/maps/d/embed?mid=12qTHGuuv4ve4vXRrzBlEmRL9HU_R5QI"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        loading="lazy"
        allowFullScreen
      />
    </div>
  )
}

export default TourismMap