export const workDetail = (detail) => {
  console.log(detail);
  return `
    <div class="overflow-y-scroll min-h-screen cursor-default flex justify-center flex-col items-center p-2 w-full border-none rounded-sm text-white bg-black lg:w-work ">
    <div class="w-full flex flex-col md:flex-row">
      <div class="flex flex-col justify-center items-center p-2 w-full md:w-1/4  m-1">
        <h2 class="text-xl md:mb-10">Brand Name</h2>

        <div class="flex jusify-center items-center  relative ">
          <img src="logo.svg" class="w-full h-full opacity-50" />
          <div className="clientLogo rounded-full">
          <img
            src=${detail.logoPath}
            alt="client logo"
            class="absolute w-36 p-4 clientLogo overflow-y-scroll"
          />
          </div>
        </div>
        <div class="mt-8 text-3xl font-extrabold text-center">
          Adidas Automatic Checkout
        </div>
        <div>#tag1 #tag2</div>

        <div class="text-blue-700 underline cursor-pointer hover:text-blue-500">
          flamy.dev
        </div>
      </div>
      <div class="flex flex-col justify-center items-center p-2 w-full md:w-1/4  m-1">
        <h3 class="font-extrabold text-xl">Description</h3>
        <div class="flex justify-center items-center pt-4 text-center">
          Lorem ipsum
        </div>
      </div>
      <div class="h-full flex-col m-1 flex justify-center md:justify-between items-center p-2 flex-grow md:items-stretch w-full md:w-2/4 text-justify md:text-center" style="height:100vh; min-height:100vh;">
        Updating....
      </div>
    </div>
    </div>
  `;
};

// <div class="w-full flex justify-center items-center  m-1 p-1">
//   <div class="mr-1 text-xs md:text-base md:w-auto">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
//     cumque minima facilis eos nesciunt illo ab maxime laborum natus,
//     nobis perspiciatis.
//   </div>
//   <div class="w-full flex justify-center items-center">
//     <img src="insta.png" class="w-40" />
//   </div>
// </div>
// <div class="w-full flex justify-center items-center  m-1 p-1">
//   <div class="mr-1 text-xs md:text-base md:w-auto">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
//     cumque minima facilis eos nesciunt illo ab maxime laborum natus,
//     nobis perspiciatis.
//   </div>
//   <div class="w-full flex justify-center items-center">
//     <img src="insta.png" class="w-40" />
//   </div>
// </div>
// <div class="w-full flex justify-center items-center  m-1 p-1">
//   <div class="mr-1 text-xs md:text-base md:w-auto">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
//     cumque minima facilis eos nesciunt illo ab maxime laborum natus,
//     nobis perspiciatis.
//   </div>
//   <div class="w-full flex justify-center items-center">
//     <img src="insta.png" class="w-40" />
//   </div>
// </div>
// <div class="w-full flex justify-center items-center  m-1 p-1">
//   <div class="mr-1 text-xs md:text-base md:w-auto">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
//     cumque minima facilis eos nesciunt illo ab maxime laborum natus,
//     nobis perspiciatis.
//   </div>
//   <div class="w-full flex justify-center items-center">
//     <img src="insta.png" class="w-40" />
//   </div>
// </div>
// <div class="w-full flex justify-center items-center  m-1 p-1">
//   <div class="mr-1 text-xs md:text-base md:w-auto">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
//     cumque minima facilis eos nesciunt illo ab maxime laborum natus,
//     nobis perspiciatis.
//   </div>
//   <div class="w-full flex justify-center items-center">
//     <img src="insta.png" class="w-40" />
//   </div>
// </div>
// <div class="w-full flex justify-center items-center  m-1 p-1">
//   <div class="mr-1 text-xs md:text-base md:w-auto">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
//     cumque minima facilis eos nesciunt illo ab maxime laborum natus,
//     nobis perspiciatis.
//   </div>
//   <div class="w-full flex justify-center items-center">
//     <img src="insta.png" class="w-40" />
//   </div>
// </div>
