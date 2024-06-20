import React from "react";
import Image from 'next/image'
import WebDev from '@/./public/icons/web-dev.svg'
import WebDesign from '@/./public/icons/web-design.svg'
import DigitalMarketing from '@/./public/icons/digital-marketing.svg'
import MobileDev from '@/./public/icons/mobile-dev.svg'
import DigitalAdvertising from '@/./public/icons/digital advertising.svg'
import IoTDev from '@/./public/icons/iot-dev.svg'

export default function WhatWeOffer() {
  return (
    <React.Fragment>
      <section id="services" className="xl:h-screen">
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
                <Image src={WebDesign} alt="Web Design" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
                <p className="text-gray-400">Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
                <Image src={WebDev} alt="Web Development" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-400">Integer ante non nunc, eget est justo vel semper nunc. Lacus</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
                <Image src={DigitalMarketing} alt="Digital Marketing" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Digital Marketing</h3>
                <p className="text-gray-400">Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
                <Image src={MobileDev} alt="Mobile Development" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-gray-400">Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
                <Image src={DigitalAdvertising} alt="Digital Advertising" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Digital Advertising</h3>
                <p className="text-gray-400">Integer ante non nunc, eget est justo vel semper nunc. Lacus</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
                <Image src={IoTDev} alt="IoT Development" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">IoT Development</h3>
                <p className="text-gray-400">Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
