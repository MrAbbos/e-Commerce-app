import "./style.css";
//import imagesfolder from "./images/";

const images = [
  { display: "", slideNum: "slide1", img: "img1" },
  { display: "", slideNum: "slide2", img: "img2" },
  { display: "", slideNum: "slide3", img: "img3" },
  { display: "", slideNum: "slide4", img: "img4" },
];
export default function Carousel() {
  let sliderImages = document.querySelectorAll(".slide"),
    current = 0;

  // Clear all images
  function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      images[i].display = "none";
    }
  }

  images.forEach((e) => {
    e.display = "none";
  });

  // Init slider
  function startSlide() {
    reset();
    images[0].display = "block";
  }

  // Show prev
  function slideLeft() {
    reset();
    images[current - 1].display = "block";
    current--;
  }

  // Show next
  function slideRight() {
    reset();
    images[current + 1].display = "block";
    current++;
  }

  // Left arrow click
  function arl() {
    if (current === 0) {
      current = images.length;
    }
    slideLeft();
  }

  // Right arrow click
  function arr() {
    if (current === images.length - 1) {
      current = -1;
    }
    slideRight();
    images.forEach((e) => {
      console.log(e.display);
      console.log(e.slideNum + "slide");
    });
  }

  startSlide();
  images.forEach((e) => {
    //    console.log(imagesfolder + encodeURIComponent(url("e.img")));
  });
  return (
    <div className="wrap">
      <div id="arrow-left" onClick={arr} className="arrow"></div>
      <div id="slider">
        {images.forEach((e) => {
          <div>
            <img className={e.slideNum + " slide " + e.display} src="" />
            <div className="slide-content">
              <span>Image One</span>
            </div>
          </div>;
        })}
      </div>
      <div id="arrow-right" onClick={arl} className="arrow"></div>
    </div>
  );
}
