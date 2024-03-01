import React from "react";
import "./AboutSection.scss";
import cameraImg from "../../assets/Images/About.jpg";
import Hireus from "../../Components/Hirebutton/Hireus";
export default function AboutSection() {
  return (
    <div className="AboutSection">
      <div className="AboutSectionsub">
        <img src={cameraImg} alt="" />
      </div>
      <div className="AboutSectionsub">
        <h1 data-aos="fade-right">Liberty Films</h1>
        <p>
          🚀We are creative film and video based company based in{" "}
          <span>Berlin</span> and <span>Hamburg</span>
        </p>
        <p>
          🎬We are hungry for <span>creative</span> content stories and Ideas.
          To create modern and amazing content we are working with a strong
          network of experience <span>professionals.</span> 
        </p>
        <p>
        🚀Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita similique libero doloribus ex, esse, provident nulla asperiores cupiditate sint aliquam consequuntur, officia odit quaerat ad reprehenderit! Quae sit fuga nisi facilis harum mollitia? 
        </p>
        <p>
          🍿If you and your orgnization have a story to tell , an idea to share
          or word to spread the <span>Liberty</span>
          studio can help you bring to life
        </p>
     <Hireus/>
      </div>
    </div>
  );
}
