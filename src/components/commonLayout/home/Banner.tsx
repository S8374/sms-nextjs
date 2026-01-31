import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[500px]">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Laaffic SMS & Voice <br />
              Drives Your Brand Forward
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Trusted iGaming Marketing Solution Provider
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-base font-semibold">
                Contact Experts
              </Button>

              <Button
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-6 text-base font-semibold"
              >
                Free Trial
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full max-w-xl mb-10 lg:mb-0">
            <Image
              src="https://www.laaffic.com/public/images/index/banner.png"
              alt="Laaffic Banner"
              width={600}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      {/* BOTTOM GRAY BACKGROUND */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-muted -z-10" />
    </section>
  );
};

export default Banner;



// import { Button } from "@/components/ui/button";
// import React from "react";

// const Banner = () => {
//   return (
//     <section className="relative h-[70vh] md:h-[calc(100vh-80px)] w-full overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-top"
//         style={{
//           backgroundImage: "url(/icons/commonLayout/banner/banner.jpg)",
//         }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20" />

//       {/* Bottom Gradient (like reference image) */}
//       <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-white/90 via-white/70 to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 flex h-full items-end justify-center pb-16 px-6">
//         <div className="text-center max-w-3xl">
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
//             Professional Healthcare, When You Need It
//           </h1>

//           <p className="mt-4 text-muted-foreground text-base md:text-lg">
//             24/7 urgent care, emergency response, home visits & hospital
//             coordination
//           </p>

//           <div className="mt-8">
//             <Button size="lg" className="rounded-full px-8">
//               Request Care Now
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
