"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "./nav.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Image1 from "../../../public/img/MainImg/Img.png";
export default function NavComponent() {
  const router = useRouter();
  const navBtn = (event) => {
    router.push(event.target.id);
  };
  return (
    <div className="navlayout">
      <div>
        {/* <Image src={Image1} width={300} height={100} /> */}
        <p onClick={navBtn} id="/">
          펜타플랙스 <span>메트로</span>
        </p>
      </div>
      <div>
        <li onClick={navBtn}>
          <p id="/">펜타플랙스 메트로</p>
          <NavDropdown title="사업안내">
            <NavDropdown.Item id="business">사업개요</NavDropdown.Item>
            <NavDropdown.Item id="business">브랜드소개</NavDropdown.Item>
            <NavDropdown.Item id="business">오시는길</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="입지안내">
            <NavDropdown.Item id="location">입지환경</NavDropdown.Item>
            <NavDropdown.Item id="location">프리미엄</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="단지안내">
            <NavDropdown.Item id="information">층별안내</NavDropdown.Item>
            <NavDropdown.Item id="information">상업시설</NavDropdown.Item>
          </NavDropdown>

          <p onClick={navBtn} id="reservation">
            방문예약
          </p>
          <p onClick={navBtn} id="interested">
            관심고객
          </p>
          <p onClick={navBtn} id="news">
            관련뉴스
          </p>
        </li>
      </div>
      <div>
        <p>1600-4656</p>
      </div>
    </div>
  );
}
