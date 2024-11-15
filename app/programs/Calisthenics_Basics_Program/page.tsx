import React from "react";
import ProductPage from "@/app/components/product_info/product_info";
import { beginnerCalisthenics } from "@/constants";

const Calisthenics_Basics_Program_Info = () => {
  return (
    <ProductPage
      title="Everything you could need to know about Calisthenics!"
      price="$29.99"
      imageUrl="/heroIMG.jpeg"
      ft1="Ever wondered how to do the skills you see on your social media feeds?"
      ft2="Get a pre-built, and learn how to build your own exercise program that is the most effective for you!"
      ft3="Get step by step exercise instructions to unlock the skills you want!"
      description="I wanted to make one comprehensive document that I wish I had when I started my calisthenics journey, so here it is!
      This program will not only teach you the basics of calisthenics but also teach you the mechanics you need to effectively build your own exercise program that is the most effective for you while also guiding you through less common but just as important parts of training such as diet, injury recovery, and rest.
      "
      detail={beginnerCalisthenics}
      priceId="price_1QLQDuIxXY4kjgHfyNxc90ls"
      success_url={process.env.HANDSTAND_DOC_LINK}
    />
  );
};

export default Calisthenics_Basics_Program_Info;
