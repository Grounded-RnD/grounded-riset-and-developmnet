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

              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col  border-2 border-neutral-500">
                <Image src={WebDesign} alt="Web Design" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
                <p className="text-gray-400">Attractive, functional web design increases visitor engagement significantly.</p>
              </div>

              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                <Image src={WebDev} alt="Web Development" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-400">Our solutions ensure smooth, efficient website performance, enhancing user experience.</p>
              </div>

              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                <Image src={DigitalMarketing} alt="Digital Marketing" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Digital Marketing</h3>
                <p className="text-gray-400">Targeted strategies expand market reach and boost sales conversions.</p>
              </div>

              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                <Image src={MobileDev} alt="Mobile Development" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-gray-400">Our mobile apps help your company reach customers easily and provide better services.</p>
              </div>

              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                <Image src={DigitalAdvertising} alt="Digital Advertising" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Digital Advertising</h3>
                <p className="text-gray-400">Our campaigns boost brand visibility and attract potential customers.

                </p>
              </div>

              <div className="bg-dark-100 p-6 rounded-lg flex flex-col border-2 border-neutral-500">
                <Image src={IoTDev} alt="IoT Development" width={64} height={64} className="mb-4" />
                <h3 className="text-2xl font-semibold mb-2">IoT Development</h3>
                <p className="text-gray-400">Innovative IoT solutions optimize operations and provide valuable business data.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
