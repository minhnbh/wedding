import crImg from "../../assets/images/slider/cr.jpg";
import cdCrImg from "../../assets/images/slider/cdcr.jpg";
import cdImg from "../../assets/images/slider/cd.jpg";

export default function Banner() {
  return (
    <section className="static-hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-xl-3 col-lg-3 col-12">
            <div className="hero-wrap">
              <div className="wpo-hero-text">
                <h3>Xuan Thu</h3>
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/nguyen.thu.9889" target="_blank" rel="noreferrer">
                        <i className="fi flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/xant_xant" target="_blank" rel="noreferrer">
                        <i className="fi flaticon-instagram-1"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wpo-hero-img floating-item">
                <img src={cdImg} alt="" width={350} height={450} />
              </div>
            </div>
          </div>
          <div className="col col-xl-6 col-lg-6 col-12">
            <div className="hero-wrap">
              <div className="wpo-hero-img">
                <img src={cdCrImg} alt="" width={544} height={751} />
              </div>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-3 col-12">
            <div className="hero-wrap">
              <div className="wpo-hero-img floating-item">
                <img src={crImg} alt="" width={350} height={450} />
              </div>
              <div className="wpo-hero-text">
                <h3>Hoang Minh</h3>
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/nguyen.minh.775185" target="_blank" rel="noreferrer">
                        <i className="fi flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/minhnbh/" target="_blank" rel="noreferrer">
                        <i className="fi flaticon-instagram-1"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
