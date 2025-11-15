import React from 'react'
import { FaRegHandPointLeft } from "react-icons/fa";
import {gsap} from "gsap"
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText,ScrollTrigger)
function About() {
  useGSAP(()=>{
    let split = SplitText.create("#me",{type:"chars"})
    gsap.from(split.chars,{
      duration:1,
      stagger:0.05,
      y:100,
      autoAlpha:0
    })
    gsap.from("#info",{
      x:-100,
      duration:1,
      delay:1,
      opacity:0,
      ease:"power1.in"
    })
    gsap.from("#infoimg",{
      x:100,
      duration:1,
      delay:1,
      opacity:0,
      ease:"power1.in"
    })
    let split2 = SplitText.create("#project",{type:"chars"})
    gsap.from(split2.chars,{
      duration:3,
      stagger:0.1,
      y:100,
      autoAlpha:0,
      scrollTrigger:{
        start:"#project",
        end:"+=50",
        scrub:4,
      }
    })
    gsap.from("#proimg",{
      x:-100,
      duration:1,
      delay:1,
      ease:"sine.in",
      scrollTrigger:{
        trigger:"#proimg",
        scrub:1,
      }
    })
    gsap.from("#pro",{
      x:100,
      duration:1,
      ease:"sine.in",
      scrollTrigger:{
        trigger:"#proimg",
        scrub:1,
      }
    })
  })
  return (
    <div className='m-10'>
      <h1 className='text-center text-6xl font-sans font-bold tracking-wider text-orange-600' id='me'>About Me</h1>
      <div className='flex justify-between items-center'>
        <div className='max-w-[50%]  tracking-wider ml-10 font-medium' id='info'>Hi, I’m Parth — a developer who loves building clean, functional, and visually engaging digital experiences.
I focus on Web Development and DSA, and I enjoy creating projects that blend good design with smooth user interactions.
I like learning new tools, improving every day, and pushing myself to get better at both logic and creativity.</div>
        <div className='max-w-[50%] mr-10' id='infoimg'><img src="/Gemini_Generated_Image_1crkrv1crkrv1crk.png" className='h-100' /></div>
      </div>
      <h1 className='text-center text-6xl font-sans font-bold tracking-wider mt-10 text-orange-600' id='project'>About The Project</h1>
      <div className='flex justify-between items-center'>
        <div className='max-w-[50%] ml-10 ' id='proimg'><img src="\Gemini_Generated_Image_1bnkg51bnkg51bnk.png" alt="" /></div>
        <div className='max-w-[50%] mr-20 tracking-wider font-medium ' id='pro'>This project is a modern Todo List application built with React, featuring an interactive 3D model created in Spline.
It allows users to add, delete, and mark tasks as complete, while also enabling free-movement of tasks through drag-and-drop interactions.
The goal of this project was to explore clean UI design, smooth user experience, and the integration of 3D elements with functional components.</div>
      </div>
    </div>
  )
}

export default About