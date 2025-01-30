"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
interface project {
  link: string;
  name: string;
  Libraries: string;
  randomdelay?: number;
  randomdirection?: number;
}
const ProjectCard = ({ data }: { data: project[] }) => {
  const ref = useRef(null);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 container">
      {data.map((item, index) => (
        <div
          key={index}
          ref={ref}
          className="relative border rounded-lg shadow-lg bg-[#0000003d] p-6 flex flex-col justify-between"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.5) 0px -10px 60px inset",
            minHeight: "300px",
          }}
        >
          <div
            className="border rounded-lg shadow p-4 relative bg-[#0000003d] gap-3 grid"
            style={{ boxShadow: "rgba(0, 0, 0, 0.5) 0px -10px 60px inset" }}
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-400">Libraries: {item.Libraries}</p>
          </div>
          <Link href={`${item.link}`}>
            <div className="flex items-center p-2 btn btn-primary rounded justify-center">
              <div className="flex">View Project</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
