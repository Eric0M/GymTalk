import React from "react";
import ProductPage from "@/app/components/product_info/product_info";
import { beginnerCalisthenics } from "@/constants";

const Calisthenics_Basics_Program_Info = () => {
  return (
    <ProductPage
      title="All you need to know about Calisthenics LIST EXACT SKILLS THAT WILL BE TAUGHT"
      price="$39.99"
      imageUrl="/heroIMG.jpeg"
      ft2="Everything you could possibly need to know to get started with calisthenics!"
      ft1="Get a pre-built and learn how to build your own exercise program that is the most effective for you!"
      ft3="Get step byt step exercise instructions to help you master your basics!"
      description="I wanted to make one comprehensive document that I wish I had when I started my calisthenics journey, so here it is!
      This program will not only teach you the basics of calisthenics but also teach you the mechanics you need to effectively build your own exercise program that is the most effective for you while also guiding you through less common but just as important parts of training such as diet, injury recovery, and rest.
      "
      detail={beginnerCalisthenics}
      priceId="price_1QAYrfIxXY4kjgHfDvE4G6gf"
      success_url={process.env.HANDSTAND_DOC_LINK}
    />
  );
};

export default Calisthenics_Basics_Program_Info;
