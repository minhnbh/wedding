import Slider from "react-slick";
import portfolio1 from "../../assets/images/portfolio/1.jpg";
import portfolio2 from "../../assets/images/portfolio/2.jpg";
import portfolio3 from "../../assets/images/portfolio/3.jpg";
import portfolio4 from "../../assets/images/portfolio/4.jpg";
import portfolio5 from "../../assets/images/portfolio/5.jpg";
import portfolio6 from "../../assets/images/portfolio/6.jpg";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useMemo } from "react";

export function Carousel() {
  const { width: screenWidth } = useScreenSize();

  const slidesToShow = useMemo(() => {
    if (screenWidth < 768) {
      return 1;
    }
    if (screenWidth < 992) {
      return 2;
    }
    if (screenWidth < 1200) {
      return 3;
    }
    return 4;
  }, [screenWidth]);
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToShow,
    }),
    [slidesToShow]
  );

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
                          style={{
                            minWidth: 400,
                            minHeight: 400,
                            width: "25vw",
                            height: "25vw",
                          }}
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
