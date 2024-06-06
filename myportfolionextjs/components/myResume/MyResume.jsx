import React from "react";
import "./MyResume.css";

const MyResume = () => {
  return (
    <div className="py-16">
      <div className="flex justify-end mx-20">
        <button className="border border-green-100 hover:border-green-300 hover:text-green-300 p-3">Download My Resume</button>
      </div>
      <div className="my-10 text-xl text-center text-green-200">
        -- My Resume --
      </div>
      <div className="mostOuterBorder mx-48 p-12 space-y-4 border-2 border-green-100 text-cyan-200 ">
        <div>
          <div>
            <div className="text-4xl hover:text-green-200 ">
              Mohammad Wazahat
            </div>
            <div className="flex justify-between">
              <div className="flex ">
                <div className="px-2 text-orange-300">Email id : </div>
                <div className="px-1">muhammadwazahatrza092@gmail.com</div>
              </div>
              <div className="flex ">
                <div className="px-2 text-orange-300 ">Contact No. : </div>
                <div className="px-1">8859897166</div>
              </div>
            </div>
            <hr className="border-1 border-green-100" />
          </div>
          <div>
            I am Computer Science Post Graduate seeking to find the opportunity
            to work in a challenging environment so that it encourages me to
            improve and learn necessary / new skills for the advancement of the
            company and myself in the software engineering industry.
          </div>
          <div>
            <div className="resumeheadings">Education :-</div>
            <ul>
              <li>
                <span className="font-medium text-green-100">● M.C.A : </span>
                Manipal University , Jaipur ( Currently enrolled ) .
              </li>
              <li>
                <span className="font-medium text-green-100">
                  ● M.Sc Computer Science :{" "}
                </span>
                J.S University Shikohabad , Firozabad .
              </li>
              <li>
                <span className="font-medium text-green-100">
                  ● B.Sc Mathematics :{" "}
                </span>
                J.L.N Government Degree College G.t Road Etah affiliated to Dr.
                Bhimrao Ambedkar University , Agra .{" "}
              </li>
              <li>
                <span className="font-medium text-green-100">
                  ● Intermediate :{" "}
                </span>
                Assisi Convent Sr. Sec. School , Etah [ 207001 ].
              </li>
            </ul>
          </div>
          <div>
            <div className="resumeheadings">Skills :- </div>
            <ul>
              <li>● HTML , CSS , JAVASCRIPT.</li>
              <li>● REACT , REDUX , BOOTSTRAP , TAILWIND CSS .</li>
              <li>● NODE.JS , EXPRESS.JS , MONGODB , MONGOOSE.</li>
              <li>
                ● TEMPLATE ENGINE (EJS : For Server side rendering ),
                Git/Github.
              </li>
            </ul>
          </div>
          <div>
            <div className="resumeheadings">Experience :- </div>
            <ul>
              <li>
                ● 1 year and 9 months experience on handling All Computer based
                ( online and offline ) official work at Sir M.U Teachers
                Training college , Etah.
              </li>
              <li>
                ● 1 year experience in teaching college students Computer
                science ( Basic + Advanced ) in SIR M.U COLLEGE OF PHARMACY ,
                Etah.
              </li>
            </ul>
          </div>
          <div>
            <div className="resumeheadings">Project :-</div>
            <ul>
              <li>
                ● TODO APP AND BLOG APP using MERN STACK (All crud features ).
              </li>
              <li>● Same TODO APP using Template Engine EJS (For SSR ).</li>
              <li>
                ● Various small components using different technologies like
                Tailwind CSS , Bootstrap , Redux.
              </li>
            </ul>
          </div>
          <div>
            <div className="resumeheadings">Abilities :-</div>
            <ul>
              <li>● Logical and Structured Thinking</li>
              <li>
                ● Very Quick Learner , Can easily grasp and understand new
                concepts.
              </li>
              <li>● Programming / Coding in Multiple Languages.</li>
            </ul>
          </div>
          <div>
            <div className="resumeheadings">Responsibility :- </div>
            <ul>
              <li>● Hosted army in our college campus during election.</li>
              <li>● Took our college tour for company visit.</li>
            </ul>
          </div>
          <div>
            <div className="resumeheadings">Achievements :-</div>
            <ul>
              <li>
                ● Increased the efficiency of college and staff to 50% by my
                dedication and Skills .{" "}
              </li>
              <li>
                ● Considered a well Reputed and Highly efficient in my Job as
                Compared to other candidate having same skills and Education .
              </li>
            </ul>
          </div>
          <div>
            <div className="resumeheadings">
              Extra Curricular and Hobbies :-
            </div>
            <ul>
              <li>
                ● Have very creative mind , so i enjoys thinking out of the box
                on set of software engineering needed skills and programming.
              </li>
              <li>
                ● Loves to design new things ( Sketching , Designing Website ,
                Color Combination ).
              </li>
              <li>
                ● Enjoys watching Hollywood series and Movies which inspire me
                in working and thinking / imagining the unimaginable.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
