import React, { useState } from "react";

const testimonialList = [
  [
    {
      id: 1,
      name: "Emily",
      img: "https://media.istockphoto.com/id/2099403180/photo/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.webp?b=1&s=170667a&w=0&k=20&c=-fis9M9x6CXFBpdkZo_5cG2VvI0qS8_l2qbE-tEX4YQ=",
      reviews:
        "I love ArtistryExpress! Their skincare products transformed my skin Fast delivery and excellent customer service.",
    },
    {
      id: 2,
      name: "Alex",
      img: "https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.webp?b=1&s=170667a&w=0&k=20&c=JUbd1SJp0bSZdjmKUZeGfklIY2oFVQULcE9F1yXI_L0=",
      reviews:
        "High-quality makeup and skincare. Definitely recommend. The express shipping option is a game-changer!",
    },
    {
      id: 3,
      name: "Sophia",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      reviews:
        "ArtistryExpress has the best selection of fragrances.Prompt delivery and well-packaged items.",
    },
  ],
  [
    {
      id: 4,
      name: "William",
      img: "https://media.istockphoto.com/id/1773071954/photo/businesswoman-working-on-laptop-at-hotel-cafe.webp?b=1&s=170667a&w=0&k=20&c=48tcfCWVylwQY9Q-LL6qofj7mQfVT1VixO_tpl275wI=",
      reviews:
        "Ordered art supplies and received them within days.Impressed by their attention to detail.",
    },
    {
      id: 5,
      name: "Olivia",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      reviews:
        "Great experience shopping with ArtistryExpressTheir express service saved me during a last-minute gift emergency!",
    },
    {
      id: 6,
      name: "Ethan",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
      reviews:
        "Top-notch customer support and lightning-fast delivery Will definitely be a repeat customer.",
    },
  ],
];

function ShapeOne() {
  return (
    <svg
      className="absolute bottom-0 left-0 -z-[1]"
      width="404"
      height="572"
      viewBox="0 0 404 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="118"
        cy="286"
        r="265.5"
        stroke="#4175DF"
        strokeOpacity="0.2"
        strokeWidth="41"
      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute top-0 right-0 -z-[1]"
      width="269"
      height="479"
      viewBox="0 0 269 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="239.5"
        cy="239.5"
        r="239.5"
        fill="#FC4755"
        fillOpacity="0.25"
      />
    </svg>
  );
}

const Testimonial23 = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section className="ezy__testimonial23 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
      <ShapeOne />
      <ShapeTwo />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center justify-between mb-6 md:mb-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h2 className="text-[32px] font-bold leading-normal">
              Everyone should believe in What Our Client Say .
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            {/* <p className="text-lg leading-[1.7] opacity-80">
							Jobs can be categorized as paid or unpaid. Examples of unpaid jobs
							include volunteer, homemaker, mentor, student, and sometimes
							intern.
						</p> */}
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-3 gap-6">
            {testimonialList[index].map((testimonial, i) => (
              <div className="col-span-3 lg:col-span-1" key={i}>
                <div className="bg-white dark:bg-[#0b1727] shadow-2xl h-full p-6 xl:p-10">
                  <div className="flex items-center mb-6">
                    <div className="mr-3">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="max-w-full h-auto rounded-full border"
                        width="65"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm mb-2">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="opacity-75 mb-2">{testimonial.reviews}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 m-0 mt-12">
            {testimonialList.map((item, i) => (
              <button
                className={`w-2 h-2 rounded-full ${
                  index === i
                    ? "scale-125 bg-blue-600"
                    : " bg-gray-400 dark:bg-slate-800"
                } `}
                key={i}
                onClick={() => handleSelect(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial23;
