import React from "react";
import { Carousel, Row } from "antd";
import "./styles.css";
import Teclado from "../../assets/teclado.jpg";
import Teclado2 from "../../assets/teclado2.jpg";
import Teclado3 from "../../assets/teclado3.jpg";
import Joystick from "../../assets/joystick.jpg";

export default function CustomCarousel() {
  return (
    <Row>
      <Carousel autoplay>
        <div>
          <img src={Teclado} alt="teclado" />
        </div>
        <div>
          <img src={Teclado2} alt="teclado2" />
        </div>
        <div>
          <img src={Teclado3} alt="teclado3" />
        </div>
        <div>
          <img src={Joystick} alt="joystick" />
        </div>
      </Carousel>
    </Row>
  );
}
