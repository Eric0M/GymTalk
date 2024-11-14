import React from "react";
import ProductPage from "@/app/components/product_info/product_info";
import { beginnerCalisthenics } from "@/constants";

const Intermediate_to_Advanced_Calisthenics_Info = () => {
  return (
    <ProductPage
      title="Intermediate to Advanced Calisthenics"
      imageUrl="/Planche.jpg"
      ft1=""
      description="freg"
      detail={beginnerCalisthenics}
      priceId="price_1QAYrfIxXY4kjgHfDvE4G6gf"
      success_url={process.env.HANDSTAND_DOC_LINK}
    />
  );
};

export default Intermediate_to_Advanced_Calisthenics_Info;
