import FooterLink from "./FooterLink";
import {
  onlineClass,
  resources,
  contentProps,
  support,
  aboutUs,
} from "./TitleData";
import "./_footer.scss";
function Footer() {
  const renderName = [
    onlineClass,
    resources,
    support,
    aboutUs,
  ];

  const renderContent = (
    data: contentProps[],
  ) => {
    return data.map(
      (item: contentProps, index) => {
        return (
          <div
            className="col-6 col-md"
            key={index}
          >
            <FooterLink
              title={item.title}
              data={item.data}
            />
          </div>
        );
      },
    );
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <footer>
          <div className="mb-2">
            <div
              className="fb-like fb_iframe_widget"
              data-href="https://facebook.com/study4.official"
              data-width=""
              data-layout="button_count"
              data-action="like"
              data-size="small"
              data-share="true"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=like&amp;app_id=170677886335455&amp;container_width=1101&amp;href=https%3A%2F%2Ffacebook.com%2Fstudy4.official&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;size=small&amp;width="
            >
              <span className="vertical-align: bottom; width: 150px; height: 28px;">
                <iframe
                  style={{
                    overflow: "hidden",
                    height: "28px",
                    border: "none",
                    visibility:
                      "visible",
                    width: "150px",
                  }}
                  name="f2a53eb0c96c08c"
                  width="100%"
                  height="1000px"
                  data-testid="fb:like Facebook Social Plugin"
                  title="fb:like Facebook Social Plugin"
                  background-color="transparent"
                  allowFullScreen={true}
                  allow="encrypted-media"
                  src="https://www.facebook.com/v18.0/plugins/like.php?action=like&amp;app_id=170677886335455&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df16f0f234f3dd4%26domain%3Dstudy4.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fstudy4.com%252Ff17b233bcd3ec6%26relation%3Dparent.parent&amp;container_width=1101&amp;href=https%3A%2F%2Ffacebook.com%2Fstudy4.official&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;size=small&amp;width="
                ></iframe>
              </span>
            </div>
          </div>
          <div className="row mx-2">
            <div className="col-sm-12 col-md grow0">
              <a href="/">
                <img
                  className="mb-2"
                  src="/static/img/logo_full_sm.png"
                  alt=""
                  height="30"
                />
              </a>
              <small className="d-block mb-2">
                © 2021
              </small>
              <div className="site-socials">
                <a
                  target="_blank"
                  href="https://facebook.com/study4.official"
                >
                  <span className="social-link fab fa-facebook-square"></span>
                </a>
                <a
                  target="_blank"
                  href="https://instagram.com/study4.official"
                >
                  <span className="social-link fab fa-instagram"></span>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/study4Official"
                >
                  <span className="social-link fab fa-twitter"></span>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/study4"
                >
                  <span className="social-link fab fa-linkedin"></span>
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@study4.official"
                >
                  <span className="social-link fab fa-tiktok"></span>
                </a>
              </div>
            </div>
            {renderContent(
              renderName as contentProps[],
            )}
          </div>
          <div>
            <h5>
              Thông tin của doanh nghiệp
            </h5>
            <ul className="list-unstyled">
              <li>
                Công ty TNHH Công Nghệ A
                Plus
              </li>
              <li>
                Giấy chứng nhận Đăng ký
                doanh nghiệp số:
                0109675459 do Sở Kế
                hoạch và Đầu tư thành
                phố Hà Nội cấp ngày
                17/06/2021.
              </li>
              <li>
                Điện thoại liên
                hệ/Hotline: 096 369 5525
              </li>
              <li>
                Email:
                study4.team@gmail.com.
              </li>
              <li>
                Địa chỉ trụ sở: Số 15,
                Ngõ 208 Giải Phóng,
                Phường Phương Liệt, Quận
                Thanh Xuân, Thành phố Hà
                Nội, Việt Nam
              </li>
            </ul>
          </div>
          <div className="footer-copyright text-center">
            @ 2024 - Bản quyền của Công
            ty TNHH Java Group.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
