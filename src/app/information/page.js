import InformationComponent from "@/components/information/page";
import React from "react";
export const metadata = {
  title: "분양사이트 테스트",
  description: "분양사이트 테스트",
  openGraph: {
    title: "분양사이트 테스트",
    description: "분양사이트 테스트",
    url: "",
    siteName: "분양사이트 테스트",
    // images: [
    //   {
    //     url: "https://pango-gy.com/opengraph-image.png",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "website",
  },
};
export default function Informationpage() {
  return <InformationComponent />;
}
