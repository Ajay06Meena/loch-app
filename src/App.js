import "./App.css";
import { Row, Col, Form, Input, Button } from "antd";
import { BellOutlined, EyeOutlined } from "@ant-design/icons";
import Icon from "./assets/bluela2.svg";
import carousel from "./assets/Frame.png";
import carousel1 from "./assets/Frame1.png";
import carousel2 from "./assets/Frame 2.png";

// import carousel2 from "./assets/Frame2.png";
import Cohorts from "./assets/Cohorts.png";
import vector from "./assets/Vector1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function App() {
  const onFinish = (values) => {
    console.log("Received values:", values);
    window.location.replace("https://app.loch.one/welcome");
  };
  return (
    <div className="App">
      <Row style={{ height: "100vh" }}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={14}
          xl={14}
          style={{
            backgroundImage: `url(${Icon})`,
            backgroundSize: "cover",
            paddingLeft: "3rem",
            paddingTop: "44px",
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
          }}
        >
          <Row
            style={{ marginBottom: "2rem", justifyContent: "space-between" }}
          >
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <BellOutlined className="bell-icon" />
              <h5 className="notification-text">
                Get notified when a highly correlated whale makes a move
              </h5>
              <p className="notification-para">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Swiper
                slidesPerView={1.6}
                spaceBetween={0}
                modules={[Autoplay]}
                autoplay={{ delay: 1000 }}
                loop={true}
                className="mySwiper1"
              >
                <SwiperSlide>
                  <div>
                    <img src={carousel} alt="Carousel 1" className="frame" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={carousel1} alt="Carousel 2" className="frame" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={carousel2} alt="Carousel 3" className="frame" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>

          <Row style={{ marginBottom: "0rem", paddingRight: "3rem" }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <img
                src={Cohorts}
                alt="img"
                style={{ width: "100%", height: "auto", marginBottom: "12px" }}
              />
            </Col>
            <Col xs={24} sm={24} md={11} lg={11} xl={11}>
              <EyeOutlined className="eye-icon" />
              <h5 className="heading">Watch what the whales are doing</h5>
              <p className="para">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </Col>
          </Row>

          <Row
            style={{
              marginBottom: "2rem",
              borderBottom: "1px solid #FFFFFF",
              display: "flex",
              justifyContent: "end",
              marginRight: "70px",
              fontSize: "20px",
            }}
          >
            <h1 className="testimonials-heading">Testimonials</h1>
          </Row>
          <Row style={{ marginBottom: "2rem" }}>
            <Col
              xs={6}
              sm={6}
              md={8}
              lg={8}
              xl={8}
              style={{ marginTop: "60px" }}
            >
              <img
                src={vector}
                alt="vectorimg"
                style={{ width: "60px", height: "60px" }}
              />
            </Col>
            <Col xs={18} sm={18} md={16} lg={16} xl={16}>
              <Swiper
                slidesPerView={1.8}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div style={{ textAlign: "left", padding: "9px" }}>
                    <h5 style={{ margin: "0" }}>
                      Jack F <span className="frame-text">Ex Blackrock PM</span>
                    </h5>
                    <p style={{ fontSize: "16px" }}>
                      “Love how Loch integrates portfolio analytics and whale
                      watching into one unified app.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{ textAlign: "left", padding: "9px" }}>
                    <h5 style={{ margin: "0" }}>
                      Yash P{" "}
                      <span className="frame-text">
                        Research, 3poch Crypto Hedge Fund
                      </span>
                    </h5>
                    <p style={{ fontSize: "16px" }}>
                      “Love how Loch integrates portfolio analytics and whale
                      watching into one unified app.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{ textAlign: "left", padding: "9px" }}>
                    <h5 style={{ margin: "0" }}>
                      Smith F{" "}
                      <span className="frame-text">Co-Founder Magik Labs</span>
                    </h5>
                    <p style={{ fontSize: "16px" }}>
                      “Love how Loch integrates portfolio analytics and whale
                      watching into one unified app.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{ textAlign: "left", padding: "9px" }}>
                    <h5 style={{ margin: "0" }}>
                      Jon F <span className="frame-text">Ex Blackrock PM</span>
                    </h5>
                    <p style={{ fontSize: "16px" }}>
                      “Love how Loch integrates portfolio analytics and whale
                      watching into one unified app.”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{ textAlign: "left", padding: "9px" }}>
                    <h5 style={{ margin: "0" }}>
                      Jack F <span className="frame-text">Ex Blackrock PM</span>
                    </h5>
                    <p style={{ fontSize: "16px" }}>
                      “Love how Loch integrates portfolio analytics and whale
                      watching into one unified app.”
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={10}
          xl={10}
          style={{
            padding: "11rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form name="signup" onFinish={onFinish}>
            <h2
              style={{
                color: "#B0B1B3",
                textAlign: "left",
                marginBottom: "2rem",
                lineHeight: "120%",
                fontSize: "39px",
              }}
            >
              Sign up for exclusive access.
            </h2>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email address!" },
                { type: "email", message: "Invalid email address" },
              ]}
            >
              <Input
                placeholder="Your email address"
                style={{
                  padding: "15px 23px",
                  width: "340px",
                  fontSize: "16px",
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "340px",
                  backgroundColor: "black",
                  height: "51px",
                }}
              >
                Get Started
              </Button>
            </Form.Item>
            <h2
              style={{
                color: "#19191A",
                textAlign: "center",
                marginTop: "2rem",
                fontSize: "16px",
              }}
            >
              You’ll receive an email with an invite link to join.
            </h2>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
