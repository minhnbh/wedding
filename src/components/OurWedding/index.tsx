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
                      className="popup-gmaps"
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.768287659876!2d109.18945347585941!3d12.263953787990191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170678bc89ad369%3A0x7c16b00c1dcbfb3f!2sChampa%20Island%20Nha%20Trang%20-%20Resort%20Hotel%20%26%20Spa!5e0!3m2!1svi!2s!4v1734200329437!5m2!1svi!2s"
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
                      className="popup-gmaps"
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1347387048063!2d106.66827307584121!3d10.80099088934933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928b68fbc3f%3A0xc58bea5686708420!2zVHJ1bmcgdMOibSBo4buZaSBuZ2jhu4sgLSB0aeG7h2MgY8aw4bubaSBQYXZpbGxvbiBUw6JuIFPGoW4gTmjhuqV0!5e0!3m2!1svi!2s!4v1734200517109!5m2!1svi!2s"
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
