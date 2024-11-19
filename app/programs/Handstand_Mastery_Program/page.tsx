import React from "react";
import ProductPage from "@/app/components/product_info/product_info";
import { handstandMastery } from "@/constants";

const Handstand_Mastery_Program_Info: React.FC = () => {
  return (
    <ProductPage
      title="Handstand Mastery"
      imageUrl="/Handstand.jpg"
      price="$19.99"
      ft1="Achieve Vertical Alignment and Master the Handstand!"
      ft2="Strengthen your Shoulders and Improve your Balance!"
      ft3="Video Feedback!"
      description="This all inclusive document focuses on how to properly train for the handstand, giving you a breadth of tailored exercises that are incredibly effective for all skill levels. Not only that, I will also provide you with direct personal feedback to help accelerate your progress even more! "
      detail={handstandMastery}
      priceId="price_1QLUH2IxXY4kjgHfHLZG7nYS"
      success_url={process.env.HANDSTAND_DOC_LINK}
    />
  );
};

export default Handstand_Mastery_Program_Info;
