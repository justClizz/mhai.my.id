import Script from 'next/script'
import Link from "next/link";
import Image from 'next/image'

export default function NavbarDefault({ tambahan }) {
  return (
  <body data-theme="light">
    // Preloader
    <div id="preloader">
      <div id="status">&nbsp;</div>
    </div>

    // Back to top
  <a id="backtotop">
    <i class="fa-solid fa-arrow-up fa-3x text-black mt-1"></i>
  </a>

<div class="backdrop-blur-sm bg-white/90 w-full fixed bg-base-100 z-50">
  <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div class="p-4 flex flex-row items-center justify-between">
      <a href="/" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline">
        <Image class="h-14" src="./logo_header.png" alt="Gadjah Hosting Logo">
      </a>
      <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 text-gray-400 hover:text-gray-500" href="#product">Product</a>
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 text-gray-400 hover:text-gray-500" href="#blog">Blog</a>
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 text-gray-400 hover:text-gray-500" href="#contact">Contact Us!</a>
    </nav>
  </div>
</div>
  );
}
