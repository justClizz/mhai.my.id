import Script from 'next/script'
import Link from "next/link";

export default function Preload({ tambahan }) {
  return (
    <>
      {/* Preloader */}
  <div id="preloader">
    <div id="status">&nbsp;</div>
  </div>
        </>
  );
}