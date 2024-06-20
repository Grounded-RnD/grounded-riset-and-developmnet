// "use client";

// import React from 'react';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



// const teamMembers = [
//   {
//     name: 'Ryos Haryono A.aaaa',
//     title: 'Chief Marketing Officer',
//     role: 'UI/UX Designer',
//     imageUrl: '/images/ryo.jpg', 
//     linkedIn: '#',
//     github: '#',
//     whatsapp: '#',
//   },
//   {
//     name: 'Dwiki Wahyudi',
//     title: 'Chief Operational Officer',
//     role: 'Project Manager',
//     imageUrl: '/images/dwiki.jpg',
//     linkedIn: '#',
//     github: '#',
//     whatsapp: '#',
//   },
//   {
//     name: 'Naufal Nabil R.',
//     title: 'Chief Information Officer',
//     role: 'Fullstack Web Developer',
//     imageUrl: '/images/naufal.jpg',
//     linkedIn: '#',
//     github: '#',
//     whatsapp: '#',
//   },
//   {
//     name: 'Haaza Nasrullah K.',
//     title: 'Chief Financial Officer',
//     role: 'Mobile Developer',
//     imageUrl: '/images/haaza.jpg',
//     linkedIn: '#',
//     github: '#',
//     whatsapp: '#',
//   },
// ];

// const TeamCarousel = () => {
//   const [sliderRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     breakpoints: {
//       '(min-width: 768px)': {
//         slides: { perView: 4, spacing: 10 },
//       },
//       '(max-width: 768px)': {
//         slides: { perView: 1, spacing: 10 },
//       },
//     },
//     plugins: [
//       Autoplay({ interval: 3000 })  // Use the custom autoplay plugin with a 3-second interval
//     ],
//   });

//   return (
//     <div className="py-12 bg-gray-900">
//       <h2 className="text-center text-3xl font-extrabold text-orange-500">Our Teams</h2>
//       <div ref={sliderRef} className="keen-slider mt-8">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="keen-slider__slide p-4">
//             <div className="bg-gray-800 rounded-lg p-6 text-center">
//               <Image
//                 className="w-24 h-24 mx-auto rounded-full"
//                 src={member.imageUrl}
//                 alt={member.name}
//                 width={96}
//                 height={96}
//               />
//               <h3 className="mt-4 text-xl font-bold text-white">{member.name}</h3>
//               <p className="text-orange-500">{member.title}</p>
//               <p className="text-gray-400">{member.role}</p>
//               <div className="mt-4 flex justify-center space-x-4">
//                 <a href={member.github} className="text-gray-400 hover:text-white">
//                   <FontAwesomeIcon icon={faGithub} />
//                 </a>
//                 <a href={member.linkedIn} className="text-gray-400 hover:text-white">
//                   <FontAwesomeIcon icon={faLinkedin} />
//                 </a>
//                 <a href={member.whatsapp} className="text-gray-400 hover:text-white">
//                   <FontAwesomeIcon icon={faWhatsapp} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Autoplay = (options = {}) => {
//   return (slider) => {
//     let timeout;
//     let mouseOver = false;
//     const clearNextTimeout = () => {
//       clearTimeout(timeout);
//     };
//     const nextTimeout = () => {
//       clearTimeout(timeout);
//       if (mouseOver) return;
//       timeout = setTimeout(() => {
//         slider.next();
//       }, options.interval || 2000);
//     };
//     slider.on('created', () => {
//       slider.container.addEventListener('mouseover', () => {
//         mouseOver = true;
//         clearNextTimeout();
//       });
//       slider.container.addEventListener('mouseout', () => {
//         mouseOver = false;
//         nextTimeout();
//       });
//       nextTimeout();
//     });
//     slider.on('dragStarted', clearNextTimeout);
//     slider.on('animationEnded', nextTimeout);
//     slider.on('updated', nextTimeout);
//   };
// };


// export default TeamCarousel;
