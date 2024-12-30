import Script from 'next/script'
import Link from "next/link";

export default function NavbarDefault({ tambahan }) {
  return (
    <>
    <div class="navbar backdrop-blur-sm bg-black/90 sticky bg-base-100" 
style={{
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
}}>
      <div class="flex-1">
        <br />
        <Link href="/" class="text-xl text-white">Muhammad Haikal Ali Abdillah</Link>
      </div>
      
      <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a><Link href="/">Homepage</Link></a></li>
      <li><a><Link href="#about">About Me</Link></a></li>
      <li><a><Link href="#project">Project</Link></a></li>
      <li><button class="btn btn-info"><Link href="#contact">Contact Me!</Link></button></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
    </div>
            </>

  
  );
}