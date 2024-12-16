import { SectionTitle } from "../SectionTitle";
import Slider from "react-slick";
import champa from "../../assets/images/event/champa.jpg";
import pavillon from "../../assets/images/event/pavillon.jpg";

export function OurWedding() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="wpo-event-section section-padding" id="event">
      <div className="container wpo-event-wrap">
        <div className="row">
          <SectionTitle heading="Our Wedding" subHeading="When & Where" />
        </div>
        <Slider {...settings}>
          <div className="wpo-event-item">
            <div className="wpo-event-img">
              <img src={champa} alt="" width={1410} height={650} />
            </div>
            <div className="wpo-event-right">
              <div className="wpo-event-text">
                <h2>Champa Island Nha Trang - Resort Hotel & Spa</h2>
                <ul>
                  <li>Sunday, 05 Jan. 2025 06:00 PM – 10:00 PM</li>
                  <li>304 2/4, Vĩnh Phước, Nha Trang, Khánh Hòa</li>
                  <li>0258 3827 827</li>
                  <li>
                    <a
                      target="_blank"
                      className="popup-gmaps"
                      href="https://maps.app.goo.gl/mxvoj2s1ZiUvo5ZS7"
                      rel="noreferrer"
                    >
                      See Location
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wpo-event-item">
            <div className="wpo-event-img">
              <img src={pavillon} alt="" width={1410} height={650} />
            </div>
            <div className="wpo-event-right">
              <div className="wpo-event-text">
                <h2>Pavillon Tan Son Nhat Conference and Wedding Center</h2>
                <ul>
                  <li>Saturday, 11 Jan. 2025 6:00 PM – 10:00 PM</li>
                  <li>
                    202 Đ. Hoàng Văn Thụ, Phường 9, Phú Nhuận, Hồ Chí Minh
                  </li>
                  <li>0965 671 688</li>
                  <li>
                    <a
                      target="_blank"
                      className="popup-gmaps"
                      href="https://maps.app.goo.gl/cnqiomsNWwr3wsgd8"
                      rel="noreferrer"
                    >
                      See Location
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
