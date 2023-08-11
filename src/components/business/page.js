"use clent";

import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import BrancdComponent from "./brand/page";
import DirectionsComponent from "./directions/page";
import BusinessOverview from "./businessoverview/page";
export default function BusinessComponent() {
  // 전역상태관리로 받아오는값에 따라서 다른 컴포넌트를 보여주기
  return (
    <div>
      {/* 사업개요 */}
      <BusinessOverview />
      {/* 브랜드소개 */}
      <BrancdComponent />
      {/* 오시는길 */}
      <DirectionsComponent />
    </div>
  );
}
