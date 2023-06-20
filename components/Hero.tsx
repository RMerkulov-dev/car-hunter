"use client";
import { CustomButton } from "@/components/index";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title">Hunt your best car ever...</h1>
        <p className="hero__subtitle">
          The easiest rental process for rent or booking a car.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-orange-400 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
