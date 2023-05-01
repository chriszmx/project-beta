import React, { useState, useEffect } from "react";
import "./css/mainpage.css";

function MainPage() {
  const [photos, setPhotos] = useState([
    "https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-106-16354gg-1644077188.jpeg?crop=1.00xw:0.752xh;0,0.202xh&resize=1200:*",
    "https://i.pinimg.com/originals/c3/1e/21/c31e21485042baa3f1087bfaa4cf77a5.jpg",
    "https://w0.peakpx.com/wallpaper/893/202/HD-wallpaper-bugatti-chiron-and-dassault-rafale-marine-jet-8k-bugatti-chiron-bugatti-cars-2021-cars.jpg",
    "https://www.hdcarwallpapers.com/download/bugatti_w16_mistral_4k-3840x2160.jpg",
    "https://i.pinimg.com/originals/89/4f/83/894f83f912901e7ff42bcfee028d4b61.jpg",
  ]); // Array of photo URLs

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // Index of the currently displayed photo

  useEffect(() => {
    // Change the displayed photo every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [photos.length]);

  return (
    <div className="main-page-container">
      <div className="photo-container">
        <img
          src={photos[currentPhotoIndex]}
          alt="Car Image"
          className="main-photo"
        />
      </div>
      <div className="content-container">
        <h1 className="display-2 fw-bold mb-4">CarCar</h1>
        <p className="lead mb-5">
          The ultimate solution for automobile dealership management!
        </p>
        <div className="buttons-container">
          <a href="http://localhost:3000/list-vehicle" className="btn btn-primary btn-lg me-3">
            Vehicle List
          </a>
          <a href="http://localhost:3000/create-service" className="btn btn-outline-light btn-lg">
            Schedule Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;



// import "./css/mainpage.css";

// function MainPage() {
//   return (
//     <div className="bg-dark text-light py-5 main-page vh-100" style={{ padding: 0, margin: 0, }}>
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6 text-center">
//           <h1 className="display-2 fw-bold mb-4">CarCar</h1>
//           <p className="lead mb-5">
//             The ultimate solution for automobile dealership management!
//           </p>
//           <a href="http://localhost:3000/list-vehicle" className="btn btn-primary btn-lg me-3">Vehicle List</a>
//           <a href="http://localhost:3000/create-service" className="btn btn-outline-light btn-lg">Schedule Service</a>
//         </div>
//         <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-a066c66221590dc956db8a4f6c77f0e8.webp"
//           alt="Car Image" />
//       </div>
//     </div>
//   );
// }

// export default MainPage;
