// function TourismMap() {
//   return (
//     <div className="map-container">
//       <iframe
//         title="Google My Map Tân Lộc"
//         src="https://www.google.com/maps/d/embed?mid=12qTHGuuv4ve4vXRrzBlEmRL9HU_R5QI"
//         width="100%"
//         height="100%"
//         loading="lazy"
//         allowFullScreen
//       ></iframe>
//     </div>
//   )
// }

// export default TourismMap

function TourismMap() {
  return (
    <div className="map-wrapper">
      <div className="map-container">
        <iframe
          title="Google My Map Tân Lộc"
          src="https://www.google.com/maps/d/embed?mid=12qTHGuuv4ve4vXRrzBlEmRL9HU_R5QI"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default TourismMap