import { Photo } from "@/components/Photo";
import Summary from "@/components/Summary";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-210">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h2">
                Hi, I am
                <span className="text-accent "> Sumanth </span>
              </h1>
              <p className="xl:text-xl max-w-[600px] mb-9 mt-5 text-white/80 ">
                Welcome to my page! I'm a Software Engineer with 3+ years of
                experience. Check out my work!
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="/Sumanth_Thota_2024_Resume.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 "
                  >
                    Resume
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-6 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border boarder-accent rounded-full flex items-center justify-center"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
      <section className="h-full">
        <Summary />
      </section>
      <section className="container h-full full-width-container text-center pd-5  bg-[#232329]">
        <Footer />
        <p className="text-white/30">
          Copyright &copy; 2024 Sumanth. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default page;
