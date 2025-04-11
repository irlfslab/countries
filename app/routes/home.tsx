import type { Route } from "./+types/home";
import { Link } from "react-router";
import Explore from "../assets/explore.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries Explorer" },
    { name: "Check out country!", content: "Welcome to Countries Explorer." },
  ];
}

export default function Home() {
  return (
    <div className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="space-y-6 sm:max-w-md lg:max-w-lg">
              <h1 className="font-extrabold tracking-wide text-gray-900 sm:text-5xl">
                <span className="block text-indigo-700 2xl:inline">Explore Countries</span>
              </h1>
              <p className="mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl">
                Discover details for each country around the world
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                
                <Link
                  to="/countries"
                  className="flex items-center justify-center px-8 py-6 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Explore Now
                  
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 ml-1"
                  fill="white"
                  stroke="currentColor"
                  viewBox="0 0 512 512">
                  <path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"/>
                  </svg>
                </Link> 
                   
                <Link
                  to="/about"
                  className="flex items-center px-8 py-6 text-black-200 bg-gray-200 rounded-md hover:bg-gray-300 hover:text-black-500"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-xl">
              <img src={Explore} 
                alt="Explore countries"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
