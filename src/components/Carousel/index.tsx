export function Carousel() {
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
              <div className="grid">
                <div className="img-holder">
                  <a
                    href="assets/images/portfolio/1.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <img
                      src="../../assets/images/portfolio/1.jpg"
                      alt=""
                      className="img img-responsive"
                      width={800}
                      height={1028}
                    />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a
                    href="assets/images/portfolio/2.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <img
                      src="../../assets/images/portfolio/2.jpg"
                      alt=""
                      className="img img-responsive"
                      width={800}
                      height={1028}
                    />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a
                    href="assets/images/portfolio/3.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <img
                      src="../../assets/images/portfolio/3.jpg"
                      alt=""
                      className="img img-responsive"
                      width={800}
                      height={1028}
                    />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a
                    href="assets/images/portfolio/4.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <img
                      src="../../assets/images/portfolio/4.jpg"
                      alt=""
                      className="img img-responsive"
                      width={800}
                      height={1028}
                    />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a
                    href="assets/images/portfolio/5.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <img
                      src="../../assets/images/portfolio/5.jpg"
                      alt=""
                      className="img img-responsive"
                      width={800}
                      height={1028}
                    />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid">
                <div className="img-holder">
                  <a
                    href="assets/images/portfolio/6.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <img
                      src="../../assets/images/portfolio/6.jpg"
                      alt=""
                      className="img img-responsive"
                      width={800}
                      height={1028}
                    />
                    <div className="hover-content">
                      <i className="ti-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
