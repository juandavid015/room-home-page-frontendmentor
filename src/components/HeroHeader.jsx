import { useState } from "react";
import NavBar from "./Navbar";
import ServicesDescription from "./ServicesDescription";
import { headerContent } from "../content/content.js";
  
       
export default function HeroHeader () {

    const [indexSlider, setIndexSlider] = useState(0);

    const maxAmountOfImage = headerContent.length - 1;
    const changeSlider = {
        toLeft: (position)=> {
            if(position <= 0) {
                setIndexSlider(maxAmountOfImage );
    
            } else {
                setIndexSlider(indexSlider - 1);
            }
        },
        toRight: (position)=> {
            if (position >= maxAmountOfImage) {
                setIndexSlider(0);
            } else {
                setIndexSlider(indexSlider + 1);
            }
        }
    }
    return (
        <header className="grid md:grid-cols-headerLayout lg:grid-rows-headerLayout grid-cols-1 grid-rows-mobileHeaderLayout
        md:grid-rows-tabletHeaderLayout 
         overflow-hidden">    
            <div className={`bg-no-repeat bg-cover bg-center relative max-w-[840px] w-full
            ${headerContent[indexSlider].mobileImage} ${headerContent[indexSlider].desktopImage}`}
       >
                <div className="absolute md:-right-[5.75rem] xl:-right-[10.25rem] bottom-0 right-0">
                    <button className="xl:py-6 xl:px-[34px] p-4 bg-primary-black hover:bg-primary-very-dark-gray"
                    onClick={()=> changeSlider.toLeft(indexSlider)}>
                        <svg className="h-[14px] xl:h-full" viewBox="0 0 14 24" width="14" height="24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
                    </button>
                    <button className="xl:p-6 xl:px-[34px] p-4 bg-primary-black hover:bg-primary-very-dark-gray"
                    onClick={()=> changeSlider.toRight(indexSlider)}>
                        <svg className="h-[14px] xl:h-full" viewBox="0 0 14 24" width="14" height="24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
                    </button>
                </div>
                <NavBar />
            </div>
            
            
            <ServicesDescription 
                title={headerContent[indexSlider].title} 
                description={headerContent[indexSlider].description}
            />
        </header>
     )
}