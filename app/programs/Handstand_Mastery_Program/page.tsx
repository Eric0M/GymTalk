import React from "react";
import ProductPage from "@/app/components/product_info/product_info";
import { handstandMastery } from "@/constants";

const Handstand_Mastery_Program_Info = () => {
  return (
    <ProductPage
      title="Handstand Mastery"
      imageUrl="/Handstand.jpg"
      ft1="H"
      ft2="D"
      ft3="F"
      description="freg"
      detail={handstandMastery}
      priceId="price_1Q7IPLIxXY4kjgHfJwT6tf2g"
    />
  );
};

export default Handstand_Mastery_Program_Info;
