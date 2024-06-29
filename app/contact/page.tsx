import React from "react";

export default function contact() {
  return (
    <main className="mb-20" id="contact">
      <div className="bg-dark-300 text-surface-50 p-8 sm:p-16 lg:p-24 rounded-lg mx-4 sm:mx-16 lg:mx-32 mt-32 sm:mt-32 lg:mt-32" data-aos="fade-in">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">Our Contact</h2>
        <p className="text-base sm:text-lg font-thin mb-6">We are ready to help you achieve your technology goals. Contact us for more information about our products and services.</p>
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 lg:gap-32">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">For Innovative Products and Startups</h3>
            <br />
            <br />
            <p className="mb-2 font-light">
              <strong>Email:</strong> halo@grounded.or.id
            </p>
            <p className="mb-2 font-light">
              <strong>Telp:</strong> +62 8962 3084 881
            </p>
            <p className="font-light">
              <strong>Address:</strong> SMK Telkom Malang, Laboratorium 6 / Grounded Workspace, Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang, Jawa Timur 65139
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">For Freelance Services</h3>
            <br />
            <br />
            <p className="mb-2 font-light">
              <strong>Email:</strong> freelance@grounded.or.id
            </p>
            <p className="font-light">
              <strong>Telp:</strong> +62 8533 5733 052
            </p>
          </div>
        </div>
        <div className="mt-16 sm:mt-32 lg:mt-44"></div>
      </div>
      <div className="h-1 mx-4 sm:mx-16 lg:mx-32 pt-2 bg-oranges-300"></div>
    </main>
  );
}
