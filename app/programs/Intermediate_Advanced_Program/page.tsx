import React from "react";
import ProductPage from "@/app/components/product_info/product_info";
import { beginnerCalisthenics } from "@/constants";

const Intermediate_to_Advanced_Calisthenics_Info = () => {
  return (
    <ProductPage
      title="Intermediate to Advanced Calisthenics"
      imageUrl="/Planche.jpg"
      ft1="H"
      ft2="D"
      ft3="F"
      description="freg"
      detail={beginnerCalisthenics}
      priceId="price_1Q7IPLIxXY4kjgHfJwT6tf2g"
      success_url={process.env.HANDSTAND_DOC_LINK}
    />
  );
};

export default Intermediate_to_Advanced_Calisthenics_Info;
