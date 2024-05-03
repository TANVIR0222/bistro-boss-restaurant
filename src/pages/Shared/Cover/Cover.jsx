import { Parallax } from "react-parallax";
import './cover.css'
const Cover = ({ img, title , subTitle , suTitle}) => {
  return (
    
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >

      <div
        className="hero h-[600px] banner "
        
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mx-auto custom_ban ">
            <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-3xl uppercase">
              {subTitle}
            </p>
            <p className=" mb-5">
              {suTitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
   

  );
};

export default Cover;
