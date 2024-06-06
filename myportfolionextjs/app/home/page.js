// import React, { useEffect } from "react";
import React from "react";
// import "./Home.css";
import imgpic from './PiyushGarg.png'
const Home = () => {

//   useEffect(()=>{
//     var typed = new Typed("#element", {
//       strings: [
//         "Software Engineer",
//         "Sofware Tester",
//         "Web Designer",
//         "Web Developer",
//       ],
//       typeSpeed: 50,
//     });
//   }
//   )

  return (
    <div >
      <section >
        <div className="flex flex-row mx-16 py-28">
          <div className=" basis-2/3 mx-10 my-12">
            <div>
              <div className="my-3 text-green-300"> -- Hello World --</div>

              <div className="text-2xl">
                I am <span className="my-3 text-green-300">M</span>ohammad
                <span className="text-green-300 ml-2">W</span>azahat
              </div>
              <div className="my-3">
                <span id="element" className="text-green-300 text-xl"></span>
              </div>
              <div className="my-3 text-lg">
                Hi there! My name is Mohammad Wazahat and I am a Computer
                Science Post Graduate currently pursuing MCA ( Master's of
                Computer Applications ) from Manipal university , Jaipur . I
                love all things about tech and coding, and currently i am
                working on my skill building
              </div>
            </div>
            <div className="my-16 flex ">
              <div className="border border-green-100 p-3 px-5 text-lg hover:text-green-500 hover:border-green-500 mr-16">
                <button>My Resume</button>
              </div>
              <div className="border border-green-100 p-3 px-5 text-lg hover:text-green-500 hover:border-green-500 ">
                <button>My Github</button>
              </div>
            </div>
          </div>
          <div className="basis-1/3 my-10">
            <img src={imgpic} alt="Trulli" className="profileImage"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
