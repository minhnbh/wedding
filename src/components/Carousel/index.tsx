import Slider from "react-slick";
import portfolio1 from "../../assets/images/portfolio/1.jpg";
import portfolio2 from "../../assets/images/portfolio/2.jpg";
import portfolio3 from "../../assets/images/portfolio/3.jpg";
import portfolio4 from "../../assets/images/portfolio/4.jpg";
import portfolio5 from "../../assets/images/portfolio/5.jpg";
import portfolio6 from "../../assets/images/portfolio/6.jpg";

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const images = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
  ];

  return (
    <section
      className="wpo-portfolio-section section-padding pt-0"
      id="gallery"
    >
      <h2 className="hidden">some</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-grids gallery-container clearfix portfolio-slide owl-carousel">
              <Slider {...settings}>
                {images.map((item) => (
                  <div className="grid">
                    <div className="img-holder">
                      <a
                        href="#"
                        className="fancybox"
                        data-fancybox-group="gall-1"
                      >
                        <img
                          src={item}
                          alt=""
                          className="object-fit-cover"
                          style={{ width: 400, height: 600 }}
                        />
                        <div className="hover-content">
                          <i className="ti-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
