import Script from 'next/script'
import Link from "next/link";

export default function Navbar({ tambahan }) {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </meta>

    <div class="navbar backdrop-blur-sm bg-black/90 sticky bg-base-100 drop-shadow-xl rounded-lg overflow-hidden">
  <div class="flex-1 w-auto">
    <br />
    <Link href="/" class="text-xl text-white">Muhammad Haikal Ali Abdillah</Link>
  </div>
<li><button class="btn btn-link text-white rounded-lg"><Link href="#about">About Me</Link></button></li>
      <li><button class="btn btn-link text-white rounded-lg"><Link href="#project">Project</Link></button></li>
      <li><button class="btn btn-info rounded-lg"><Link href="#contact">Contact Me!</Link></button></li>
  </div>
            </>

  
  );
}