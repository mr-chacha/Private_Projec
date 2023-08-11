import React from "react";
import EnvironmentComponent from "./environment/page";
import PremiumComponent from "./premium/page";

export default function LocationComponent() {
  return (
    <div>
      {/* 입지환경 */}
      <EnvironmentComponent />
      {/* 프리미엄 */}
      <PremiumComponent />
    </div>
  );
}
