import Script from 'next/script'
import Link from "next/link";
import Image from 'next/image'

export default function NavbarDefault({ tambahan }) {
  return (
  <>
  {/* Preloader */}
  <div id="preloader">
    <div id="status">&nbsp;</div>
  </div>
  {/* Back to top */}
  <a id="backtotop">
    <i className="fa-solid fa-arrow-up fa-3x text-black mt-1" />
  </a>
  {/* Preloader */}
  <div id="preloader">
    <div id="status">&nbsp;</div>
  </div>
  {/* Back to top */}
  <a id="backtotop">
    <i className="fa-solid fa-arrow-up fa-3x text-black mt-1" />
  </a>
  <div className="backdrop-blur-sm bg-white/90 w-full fixed bg-base-100 z-50">
    <div
      x-data="{ open: false }"
      className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
    >
      <div className="p-4 flex flex-row items-center justify-between"></div>
    </div>
  </div>
</>
  );
}
