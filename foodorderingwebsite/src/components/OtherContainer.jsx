import React from "react";
import Middlecard from "./Middlecard";
import WhenYummyMeetsHealthyContent from "./WhenYummyMeetsHealthyContent";
import FoodImage from "./FoodImage";
import KetodeliaTakeoutcardInfo from "./KetodeliaTakeoutResturanteCardInfo";
import KetodeliaBistroandBakeryCardInfo from "./KetodeliaBistroandBakeryCardInfo";
import LogoCard from "./LogoCard";
import StayInLoop from "./StayInLoop";

function OtherContainer() {
  return (
    <div className="w-full h-full mt-20">
      <Middlecard />

      <WhenYummyMeetsHealthyContent />

      <FoodImage />

      <KetodeliaTakeoutcardInfo />

      <KetodeliaBistroandBakeryCardInfo />

      <LogoCard />

      <StayInLoop />
    </div>
  );
}

export default OtherContainer;
