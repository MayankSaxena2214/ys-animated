"use client"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ShinyText from '../common/ShinyText'

const FreshTakes = () => {
    const data=[
        {
            image:"https://www.indium.tech/wp-content/uploads/2026/03/7-State-Persistence-Strategies-for-Long-Running-AI-Agents-in-2026-1024x397.png",
            title:"7 State Persistence Strategies for Long-Running AI Agents in 2026",
            desc:"Building an AI agent that actually finishes complex work is harder than it looks. An agent starts",
            ctaText:"Read More",
            ctaLink:"/"
        },
        {
            image:"https://www.indium.tech/wp-content/uploads/2026/03/Tool-Invocation-Reliability-Across-GPT-5.2-and-Claude-Agent-Systems-1024x397.png",
            title:"Tool Invocation Reliability Across GPT-5.2 and Claude Agent Systems",
            desc:"You place a food order and pay for it, there is a notification displayed that says; order successful",
            ctaText:"Read More",
            ctaLink:"/"
        },
        {
            image:"https://www.indium.tech/wp-content/uploads/2026/01/RedTeaming-Explained-How-it-Fits-into-AI-Testing-Without-Replacing-QA-1024x397.png",
            title:"Red-Teaming Explained: How it Fits into AI Testing Without Replacing QA",
            desc:"As AI moves into the core of enterprise systems and functions, quality assurance (QA) teams and",
            ctaText:"Read More",
            ctaLink:"/"
        },
        {
            image:"https://www.indium.tech/wp-content/uploads/2025/10/Optimizing-Mutation-Testing-with-GenAI-1024x589.png",
            title:"Optimizing Mutation Testing with Gen AI",
            desc:"Building an AI agent that actually finishes complex work is harder than it looks. An agent starts",
            ctaText:"Read More",
            ctaLink:"/"
        },
        {
            image:"https://www.indium.tech/wp-content/uploads/2026/01/card-image_Agentic-AI-Swarms-1024x589.png",
            title:"Agentic AI Swarms: How Autonomous AI Teams Are Redefining Enterprise Automation",
            desc:"Building an AI agent that actually finishes complex work is harder than it looks. An agent starts",
            ctaText:"Read More",
            ctaLink:"/"
        }
    ]
  return (
    <div className='flex flex-col gap-10 md:px-8 bg-white lg:px-16 px-6 md:py-10 lg:py-16 py-6'>
      <div className="flex flex-col gap-2">
       <div className="md:text-3xl text-2xl lg:text-4xl font-bold">
  <ShinyText
    text="Fresh Takes and Insights"
    speed={2}
    color="#000000"
    shineColor="#ffffff"
  />
</div>
        <div className=' md:text-base text-sm lg:text-lg text-black/80'>Decoding trends, one byte of knowledge at a time.</div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between gap-6">
        {
            data.map((item,index)=>{
                return <div key={index}  className=' bg-gray-200 overflow-hidden rounded-xl flex md:flex-row flex-col'>
                    <img src={item.image} className='h-[200px] md:w-[250px]' alt="" />
                    <div className="flex  justify-between items-start">
                        <div className="p-4">
                            <h3 className=' text-base md:text-lglg:text-xl font-bold text-black'>{item.title}</h3>
                            <p className='text-gray-600 md:text-base text-sm mt-2'>{item.desc}</p>
                            <Link href={item.ctaLink} className='mt-4 md:text-base text-sm text-orange-500 flex items-center gap-2  py-2 px-4 rounded-md hover:text-orange-600'>
                                <div>{item.ctaText}</div>
                                <ArrowRight className='h-4 w-4'/>

                            </Link>
                        </div>
                    </div>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default FreshTakes
