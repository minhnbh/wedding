import { SectionTitle } from "../SectionTitle";
import { StoryImage } from "../StoryImage";
import story1 from "../../assets/images/story/howwemet.jpg";
import story2 from "../../assets/images/story/proposed.png";
import story3 from "../../assets/images/story/engagement.jpg";
import story4 from "../../assets/images/story/ceremony.jpg";

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
                    <h3>How we met - Ngày Gặp Nhau</h3>
                    <p>
                      Dù có 100 lần makeup để sẵn sàng lướt qua crush thì điểm
                      sáng cho lần gặp mặt định mệnh lại rơi vào lúc mình xác xơ
                      và thiếu ngủ vì được DEADLINE dí. Thật tuyệt vời! Chính
                      hôm ấy, ánh mắt ta chạm nhau, và đôi ta… say hi!
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
                    <h3>
                      2. Minh proposed, Thư said Yes - Minh ngỏ lời, Thư gật đầu
                      & Chốt đơn luôn!
                    </h3>
                    <p>
                      Kịch bản diễn ra nằm ngoài mọi kịch bản! Ai mà ngờ lúc
                      Minh đi chuẩn bị buổi cầu hôn lại lấy lý do ‘nhậu với đám
                      bạn’. Rồi từ trưa đến chiều tối im lặng biền biệt. Ai cũng
                      biết Thư làm gì rồi đấy — dỗi thôi! Dỗi thì dỗi, nhưng hẹn
                      hò với chị em vẫn phải giữ đúng lời hứa. Đến nơi, anh chị
                      mình diễn vẫn đỉnh lắm: gọi nước uống, chụp hình các kiểu.
                      Theo lời rủ rê, cả nhóm kéo lên sân thượng vì nghe nói
                      view đẹp. Và… tadaaa — một bữa tiệc mini siêu đầu tư hiện
                      ra, có clip xúc động, có hoa và… nhẫn. Cuối cùng, còn gì
                      khác ngoài một câu Say YES đâu nhỉ!”
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
                    <h3>
                      Our Engagement Day
                      <br />
                      Lễ Vu Quy tại Nha Trang
                    </h3>
                    <p>
                      Nói ra ai cũng ủa, sao từ cầu hôn đến kết hôn dài dữ vậy?
                      Nhưng tất cả đều diễn ra tự nhiên và đúng theo trình tự
                      phải có. Phải khi thực sự nhận lời ngỏ chính thức của đàng
                      trai, đàng gái ĐỒNG Ý, rồi cả hai cùng quyết định trước
                      gia đình hai bên, cùng nhau sắp xếp chuẩn bị để VỀ CHUNG
                      MỘT NHÀ Một hành trình dài, với đủ mọi trải nghiệm để thấu
                      hiểu nhau. Và giờ đây, Minh & Thư sẵn sàng đón nhận lời
                      chúc phúc của các bạn, anh chị, cô chú bác và ông bà thân
                      yêu! 💖
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
                    <span className="date">11 Jul, 2022</span>
                    <h3>
                      Our Wedding Ceremony
                      <br />
                      Tiệc Thành Hôn tại Sài Gòn
                    </h3>
                    <p>
                      Các tình yêu tại Sài Gòn ơi, Minh & Thư rất mong được đón
                      chào bạn tại bữa tiệc, cùng nhau chung vui và ghi lại thật
                      nhiều kỷ niệm đáng nhớ trong ngày trọng đại của chúng
                      mình!
                    </p>
                  </div>
                </div>
                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                  <StoryImage
                    idx={3}
                    imgSrc={story4}
                    className="img-holder right-align-img"
                  />
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
        <br />
        <br />
        <div className="text-center">
          <h5>
            Hãy sẵn sàng tham gia những bữa tiệc đầy ý nghĩa cùng chúng mình
            nha!
          </h5>
          <h3>From Minh & Thư, with love ❤️</h3>
        </div>
      </div>
    </section>
  );
}
