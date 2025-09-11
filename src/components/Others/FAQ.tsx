"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="faq" className="max-w-7xl mx-auto my-0 py-20 px-4" ref={ref}>

        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            FA <span className="text-transparent bg-clip-text bg-gradient-to-r
             from-gray-700 to-gray-400 dark:from-gray-200 dark:to-gray-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover the powerful features that make .
          </p>
        </div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {/* About GA Group */}
        <AccordionItem value="item-1">
          <AccordionTrigger>About GA Group</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              GA Group is a dynamic and multifaceted company that brings
              together a diverse portfolio of businesses under one umbrella,
              each providing high-end, unique services and products.
            </p>
            <p>
              From luxury weddings and event planning to interior design, event
              rentals, and corporate services, GA is committed to excellence and
              delivering tailored solutions for all its clients.
            </p>
            <p>
              Founded by renowned designer and wedding planner{" "}
              <b>Ghadeer Ashoor</b>, GA continues to innovate and lead in
              events, design, and lifestyle industries with a strong presence in
              Riyadh and Jeddah.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Divisions */}
        <AccordionItem value="item-2">
          <AccordionTrigger>Our Divisions</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Ghadeer Ashoor (Luxury Wedding Planning)</b> – Luxury
                weddings & events for royals, top families, and corporate
                leaders.
              </li>
              <li>
                <b>Glimpse</b> – Wedding planning & event design with a more
                accessible approach, stylish yet affordable.
              </li>
              <li>
                <b>GALA</b> – B2B corporate events & solutions: conferences,
                product launches, gala dinners.
              </li>
              <li>
                <b>GLIDE</b> – Interior design & fit-out solutions for
                residential, commercial, and event spaces.
              </li>
              <li>
                <b>GLEAM</b> – Event rentals & e-commerce for furniture, décor,
                and accessories.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Vision & Values */}
        <AccordionItem value="item-3">
          <AccordionTrigger>Vision & Core Values</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              <b>Vision:</b> To be the premier provider of exceptional, tailored
              experiences and high-end services across the events, design, and
              lifestyle industries, empowering our clients to create
              unforgettable moments.
            </p>
            <p>
              <b>Core Values:</b>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Excellence in Craftsmanship</li>
              <li>Innovation & Creativity</li>
              <li>Client-Centric Approach</li>
              <li>Passion for Perfection</li>
              <li>Collaboration & Teamwork</li>
              <li>Sustainability & Responsibility</li>
              <li>Cultural Appreciation</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
