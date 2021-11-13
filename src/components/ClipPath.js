import scenery01 from "../assets/scenery01.jpg";
import scenery02 from "../assets/scenery02.jpg";
import scenery03 from "../assets/scenery03.jpg";

export const Nature = () => (
  <svg viewBox="0 0 652 368" width="652">
  {/* height="368" */}
    <clipPath id="nature">
      <path
        d="M873.1,1436.03c125.551-1.19,207.075,22.1,274.995,35,81.16,15.42,151.91,53.58,151.91,152.99S1210.64,1804,1100.41,1804H847.592C737.36,1804,648,1745.52,648,1624.02S747.545,1437.22,873.1,1436.03Z"
        transform="translate(-648 -1436)"
      ></path>
    </clipPath>
    <image
      width="100%"
      height="100%"
      clip-path="url(#nature)"
      preserveAspectRatio="xMidYMid slice"
      href={scenery01}
    />
  </svg>
);

export const Station = () => (
  <svg viewBox="0 0 813.844 538" width="813.844">
  {/* height="538" */}
    <clipPath id="station">
      <path
        d="M297.748,1768c-52.31,32.77-149.6,90-149.6,210,0,144.47,112.835,222,293.551,222s218.648-75.32,346.239-85S962,2027.88,962,1957s-139.649-295-391.4-295C385.851,1662,353.78,1732.9,297.748,1768Z"
        transform="translate(-148.156 -1662)"
      ></path>
    </clipPath>
    <image
      width="100%"
      height="100%"
      clip-path="url(#station)"
      preserveAspectRatio="xMidYMid slice"
      href={scenery02}
    />
  </svg>
);

export const People = () => (
  <svg viewBox="0 0 504 367" width="504">
  {/* height="367" */}
    <clipPath id="people">
      <path
        d="M1091.4,1891.18c-67.91,16.79-144.4,63.55-144.4,162.91s72.36,156.32,154.65,168.92S1283.31,2238,1283.31,2238c92.61,0,167.69-50.45,167.69-171.91C1451,1863.62,1271.27,1846.71,1091.4,1891.18Z"
        transform="translate(-947 -1871)"
      ></path>
    </clipPath>
    <image
      width="100%"
      height="100%"
      clip-path="url(#people)"
      preserveAspectRatio="xMidYMid slice"
      href={scenery03}
    />
  </svg>
);
