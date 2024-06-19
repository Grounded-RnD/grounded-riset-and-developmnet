import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import SustainProduct from '@/./public/images/sustainable-technology.png';


export default function SustainableTechnology() {
  return (
    <React.Fragment>
      <section id="about" className="xl:h-screen">
        <div className="bg-dark text-white px-48 py-32 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 ">
          <div className="w-full md:w-1/2">
            <Image
              src={SustainProduct} 
              alt="AgroSky Drone"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <p className="text-gray-400 text-xs text-right mt-2 mr-36">One of our products, AgroSky</p>
            <p className="text-gray-400 text-xs text-right mt-2"></p>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-orange-400 font-glancyr">Sustainable Technology</h2>
            <p className="mt-4 text-base font-normal">
              Grounded was formed to create innovative products that support sustainable goals.
            </p> <br />
            <p className="mt-2">
              We are committed to providing technology solutions that increase efficiency, productivity, and preserve the environment. With a focus on agriculture, education, and other sectors, we strive to contribute to a greener and more sustainable future.
            </p>
            {/* <Link href="/read-more">
              <a className="inline-block mt-4 px-6 py-2 border border-orange-400 text-orange-400 rounded hover:bg-orange-400 hover:text-black transition-colors duration-300">
                Read More
              </a>
            </Link> */}
          </div>
        </div>

      </section>
    </React.Fragment>
  );
}
