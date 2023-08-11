import React from "react";
import FloorComponent from "./floor/page";
import CommercialComponent from "./commercial/page";

export default function InformationComponent() {
  return (
    <div>
      {/* 층별안내 */}
      <FloorComponent />
      {/* 상업시설 */}
      <CommercialComponent />
    </div>
  );
}
