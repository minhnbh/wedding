import { SectionTitle } from "../SectionTitle";
import { StoryImage } from "../StoryImage";
import story1 from "../../assets/images/story/howwemet.jpg";
import story2 from "../../assets/images/story/proposed.png";
import story3 from "../../assets/images/story/engagement.jpg";

export default function OurStory() {
  return (
    <section className="story-section section-padding" id="story">
      <div className="container">
        <SectionTitle heading="Our Story" subHeading="How It Happened" />
        <div className="row">
          <div className="col col-xs-12">
            <div className="story-timeline">
              <div className="round-shape"></div>
              <div className="row">
                <div className="col col-lg-6 col-12">
                  <StoryImage
                    idx={0}
                    imgSrc={story1}
                    className="img-holder right-align-text left-site"
                  />
                </div>
                <div className="col col-lg-6 col-12 text-holder">
                  <span className="heart">
                    <i className="fi flaticon-heart-1"></i>
                  </span>
                  <div className="story-text">
                    <span className="date">19 Mar, 2019</span>
                    <h3>How we meet</h3>
                    <p>
                      Consectetur adipiscing elit. Fringilla at risus orci,
                      tempus facilisi sed. Enim tortor, faucibus netus orci
                      donec volutpat adipiscing. Sit condimentum elit convallis
                      libero. Nunc in eu tellus ipsum placerat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                  <span className="heart">
                    <i className="fi flaticon-heart-1"></i>
                  </span>
                  <div className="story-text right-align-text">
                    <span className="date">02 Jul, 2022</span>
                    <h3>Minh proposed, Thu said Yes</h3>
                    <p>
                      Consectetur adipiscing elit. Fringilla at risus orci,
                      tempus facilisi sed. Enim tortor, faucibus netus orci
                      donec volutpat adipiscing. Sit condimentum elit convallis
                      libero. Nunc in eu tellus ipsum placerat.
                    </p>
                  </div>
                </div>
                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                  <StoryImage
                    idx={1}
                    imgSrc={story2}
                    className="img-holder right-align-img"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-6 col-12">
                  <StoryImage
                    idx={2}
                    imgSrc={story3}
                    className="img-holder video-holder left-site"
                  />
                </div>
                <div className="col col-lg-6 col-12 text-holder">
                  <span className="heart">
                    <i className="fi flaticon-heart-1"></i>
                  </span>
                  <div className="story-text">
                    <span className="date"> 05 Jan, 2025</span>
                    <h3>Our Engagement Day</h3>
                    <p>
                      Consectetur adipiscing elit. Fringilla at risus orci,
                      tempus facilisi sed. Enim tortor, faucibus netus orci
                      donec volutpat adipiscing. Sit condimentum elit convallis
                      libero. Nunc in eu tellus ipsum placerat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                  <div className="round-shape-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
