import "../components/Carousel.css";
import hpimg from "../assets/carouselImages/hpbanner.webp";
import hpimg1 from "../assets/carouselImages/01.webp";
import hpimg2 from "../assets/carouselImages/02.webp";
import hpimg3 from "../assets/carouselImages/03.webp";
const Carousel = () => {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentItemIndex = 0;
  let itime = 5; //Second
  const intervalTime = itime * 1000;

  function showNextSlide() {
    carouselItems[currentItemIndex].style.display = "none";
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    carouselItems[currentItemIndex].style.display = "block";
  }

  function autoSlide() {
    setInterval(showNextSlide, intervalTime);
  }

  autoSlide();

  return (
    <div className="max-w-full flex scroll-mx-40">
      <div class="carousel relative overflow-hidden">
        <div class="carousel-inner flex">
          <div class="carousel-item">
            <img src={hpimg} alt="Slide 1" />
          </div>
          <div class="carousel-item">
            <img src={hpimg1} alt="Slide 2" />
          </div>
          <div class="carousel-item">
            <img src={hpimg2} alt="Slide 3" />
          </div>
          <div class="carousel-item">
            <img src={hpimg3} alt="Slide 4" />
          </div>
        </div>
        <button class="prev absolute left-0 top-0 bottom-0 bg-gray-500 text-white z-10 px-4 py-2">
          Prev
        </button>
        <button class="next absolute right-0 top-0 bottom-0 bg-gray-500 text-white z-10 px-4 py-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
