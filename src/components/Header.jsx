import { clear } from "@testing-library/user-event/dist/clear";
import "../css/Header.css";
import { useState } from "react";

function Header() {
  const [prod, setProd] = useState(false);
  const [res, setRes] = useState(false);
  const [sol, setSol] = useState(false);
  const [ham, setHam] = useState(false);

  const clearState = () => {
    setProd(false);
    setRes(false);
    setSol(false);
  };

  return (
    <>
      <div className="Header" style={{ marginBottom: "50px" }}>
        <div className="HeaderItems">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="36"
            height="45"
            viewBox="0 0 45 58"
            class="style__QuintypeSvg-sc-1yjp85i-0 ccvoaG"
          >
            <defs>
              <path
                id="quintype-logo"
                d="M1178.517 128.292l.483.497-8.533 11.211-.968-.828c-1.288-9.223-7.677-8.892-7.677-8.892l-7.575-.331c-19.506-.854-20.247-21.152-20.247-21.152-.033-23.305 19.065-26.066 19.065-26.066v1.325c-7.506.94-7.958 11.321-7.958 11.321 9.98-2.816 19.621-13.806 20.319-13.364.697.442 11.16 7.953 12.448 22.587 1.288 14.635-11.751 23.195-11.751 23.195 6.975-1.878 9.873 3.7 9.873 3.7l2.52-3.203zm-34.098-18.722c.054 5.689 1.913 11.432 1.913 11.432l2.53-.828V95.212l-4.032 1.519s-.464 7.151-.41 12.84zm18.254 18.888V92.892l-4.203-4.197v30.043l-11.968 3.23s2.778 6.048 7.822 6.766c5.044.718 8.35-.276 8.35-.276zm.9-34.461c12.61 17.782 0 34.13 0 34.13v-34.13z"
              ></path>
            </defs>
            <use
              fill-opacity="0.85"
              fill-rule="evenodd"
              transform="translate(-1134 -82)"
              xlinkHref="#quintype-logo"
            ></use>
          </svg>
          <a href="/Home" className="items0">
            Home
          </a>
          <div className="dropdown">
            <div className="dropbtn items0">Prodcuts</div>
            <div className="dropdown-content">
              <a href="/products/Bold">Bold</a>
              <a href="/products/Ahead">Ahead</a>
              <a href="/products/Metype">Metype</a>
              <a href="/products/Accesstype">Accesstype</a>
              <a href="/products/Content">Content Mobile Apps</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn items0">Resources</div>
            <div className="dropdown-content">
              <a href="#">Blog</a>
              <a href="#">Case Studies</a>
              <a href="#">Integrations</a>
              <a href="#">Essence</a>
              <a href="#">Guides</a>
              <a href="#">Developer Docs</a>
              <a href="#">Press Release</a>
              <a href="#">Awards</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn items0">Solutions</div>
            <div className="dropdown-content">
              <a href="#">News and Modern Publishers</a>
              <a href="#">Magazine Publishers</a>
              <a href="#">To Increase Traffic</a>
              <a href="#">Monetize your content</a>
              <a href="#">For Developerts</a>
            </div>
          </div>
          <a href="/Demo" className="items0">
            Schedule Demo
          </a>
          <div className="items1">
            <a
              href="https://twitter.com/quintype_inc/"
              target="_blank"
              rel="noopener noreferrer"
              class="logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
              >
                <path
                  fill="#535B6C"
                  d="M19.714 1.909a8.044 8.044 0 01-2.321.624A3.914 3.914 0 0019.165.31a7.93 7.93 0 01-2.559.974C15.807.435 14.826.01 13.661.01c-1.115 0-2.066.393-2.852 1.18-.787.786-1.18 1.737-1.18 2.852 0 .3.033.607.1.923a11.234 11.234 0 01-4.637-1.242A11.43 11.43 0 011.417.748a3.95 3.95 0 00-.55 2.034c0 .69.163 1.331.487 1.922.325.59.762 1.07 1.31 1.435a4 4 0 01-1.821-.511v.05c0 .973.305 1.828.917 2.564a3.966 3.966 0 002.315 1.392c-.35.091-.703.137-1.06.137-.234 0-.488-.02-.762-.062a3.94 3.94 0 001.423 1.99 3.93 3.93 0 002.346.806c-1.464 1.148-3.133 1.722-5.005 1.722-.358 0-.682-.016-.973-.05 1.872 1.207 3.935 1.81 6.19 1.81 1.432 0 2.775-.227 4.031-.68 1.257-.454 2.33-1.061 3.22-1.823a12.194 12.194 0 002.303-2.627 11.715 11.715 0 001.442-3.101 11.458 11.458 0 00.462-3.763 8.443 8.443 0 002.022-2.084z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/quintype/"
              target="_blank"
              rel="noopener noreferrer"
              class="logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path fill="#535B6C" d="M0 0h15.991v15.991H0z"></path>
                  <path
                    fill="#FFF"
                    d="M3.763 2.429c.733 0 1.337.605 1.335 1.341a1.333 1.333 0 01-1.344 1.335c-.712.014-1.338-.58-1.338-1.34 0-.736.606-1.337 1.347-1.336zm.778 11.131H2.972a.369.369 0 01-.368-.368V6.498a.37.37 0 01.368-.37h1.57a.37.37 0 01.368.37v6.694a.369.369 0 01-.369.368zm9.034-5.08a2.541 2.541 0 00-2.541-2.541h-.403a2.256 2.256 0 00-1.977 1.167.17.17 0 00-.021-.002v-.822a.153.153 0 00-.153-.153H6.522a.153.153 0 00-.153.153v7.125c0 .085.068.153.153.153h2a.153.153 0 00.153-.152V9.29c0-.711.568-1.302 1.28-1.31a1.29 1.29 0 01.93.379c.234.234.378.557.378.915v4.133c0 .085.069.153.153.153l2.006.001a.153.153 0 00.153-.153V8.48z"
                  ></path>
                </g>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCWBqw8zwqMZjsZxBhA5xjsw"
              target="_blank"
              rel="noopener noreferrer"
              class="logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                viewBox="0 0 24 16"
              >
                <path
                  fill="#535B6C"
                  d="M22.284 1.542C21.652.419 20.967.212 19.572.134 18.18.039 14.675 0 11.64 0 8.598 0 5.092.04 3.7.132 2.308.212 1.622.417.985 1.542.335 2.663 0 4.595 0 7.996v.011c0 3.386.335 5.333.985 6.442.637 1.123 1.322 1.327 2.714 1.422 1.393.081 4.899.129 7.94.129 3.036 0 6.54-.048 7.935-.128 1.395-.095 2.08-.298 2.711-1.421.656-1.11.988-3.056.988-6.442v-.013c0-3.402-.332-5.334-.99-6.455zM8.727 12.364V3.636L16 8l-7.273 4.364z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Quintypetechnologies/"
              target="_blank"
              rel="noopener noreferrer"
              class="logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#535B6C"
                  fill-rule="evenodd"
                  d="M15.35 0H.65C.3 0 0 .3 0 .65V15.3c0 .4.3.7.65.7H8.5v-6h-2V7.5h2v-2c0-2.05 1.3-3.1 3.15-3.1.9 0 1.65.1 1.85.1v2.15h-1.3c-1 0-1.25.5-1.25 1.2V7.5h2.5l-.5 2.5h-2l.05 6h4.3c.35 0 .65-.3.65-.65V.65C16 .3 15.7 0 15.35 0z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="HeaderMob">
        <a title="Home page" href="/Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="36"
            height="45"
            viewBox="0 0 45 58"
            class="style__QuintypeSvg-sc-1yjp85i-0 ccvoaG"
          >
            <defs>
              <path
                id="quintype-logo"
                d="M1178.517 128.292l.483.497-8.533 11.211-.968-.828c-1.288-9.223-7.677-8.892-7.677-8.892l-7.575-.331c-19.506-.854-20.247-21.152-20.247-21.152-.033-23.305 19.065-26.066 19.065-26.066v1.325c-7.506.94-7.958 11.321-7.958 11.321 9.98-2.816 19.621-13.806 20.319-13.364.697.442 11.16 7.953 12.448 22.587 1.288 14.635-11.751 23.195-11.751 23.195 6.975-1.878 9.873 3.7 9.873 3.7l2.52-3.203zm-34.098-18.722c.054 5.689 1.913 11.432 1.913 11.432l2.53-.828V95.212l-4.032 1.519s-.464 7.151-.41 12.84zm18.254 18.888V92.892l-4.203-4.197v30.043l-11.968 3.23s2.778 6.048 7.822 6.766c5.044.718 8.35-.276 8.35-.276zm.9-34.461c12.61 17.782 0 34.13 0 34.13v-34.13z"
              ></path>
            </defs>
            <use
              fill-opacity="0.85"
              fill-rule="evenodd"
              transform="translate(-1134 -82)"
              xlinkHref="#quintype-logo"
            ></use>
          </svg>
        </a>
        <section class="p-menu1">
          <nav id="navbar" class="navigation" role="navigation">
            <input id="toggle1" type="checkbox" />
            <label
              class="hamburger1"
              for="toggle1"
              onClick={() => setHam(!ham)}
            >
              <div class="top"></div>
              <div class="meat"></div>
              <div class="bottom"></div>
            </label>

            <div
              className="menuContent"
              style={{ display: ham ? "flex" : "none", marginTop: "20px" }}
            >
              <a href="/Home">Home</a>
              <a
                onClick={() => (clearState(), setProd(!prod))}
                style={{ color: prod ? "rgb(68,215,182)" : null }}
              >
                Products
              </a>
              <a
                href="/products/Bold"
                style={{ display: prod ? "block" : "none" }}
              >
                Bold
              </a>
              <a
                href="/products/Ahead"
                style={{ display: prod ? "block" : "none" }}
              >
                Ahead
              </a>
              <a
                href="/products/Metype"
                style={{ display: prod ? "block" : "none" }}
              >
                {" "}
                Metype
              </a>
              <a
                href="/products/Accesstype"
                style={{ display: prod ? "block" : "none" }}
              >
                Accesstype
              </a>
              <a
                href="/products/Content"
                style={{ display: prod ? "block" : "none" }}
              >
                Content Mobile Apps
              </a>
              <hr
                style={{
                  display: prod ? "block" : "none",
                  width: "300px",
                  margin: "auto",
                  height: "0.1px",
                }}
              ></hr>
              <a
                onClick={() => (clearState(), setRes(!res))}
                style={{ color: res ? "rgb(68,215,182)" : null }}
              >
                Resources
              </a>
              <a style={{ display: res ? "block" : "none" }}>Blog</a>
              <a style={{ display: res ? "block" : "none" }}>Case Studies</a>
              <a style={{ display: res ? "block" : "none" }}>Integrations</a>
              <a style={{ display: res ? "block" : "none" }}>Essence</a>
              <a style={{ display: res ? "block" : "none" }}>Guides</a>
              <a style={{ display: res ? "block" : "none" }}>Developer Docs</a>
              <a style={{ display: res ? "block" : "none" }}>Press Release</a>
              <a style={{ display: res ? "block" : "none" }}>Awards</a>
              <hr
                style={{
                  display: res ? "block" : "none",
                  width: "300px",
                  margin: "auto",
                  height: "0.1px",
                  color: "black",
                }}
              ></hr>
              <a
                onClick={() => (clearState(), setSol(!sol))}
                style={{ color: sol ? "rgb(68,215,182)" : null }}
              >
                Solutions
              </a>
              <a style={{ display: sol ? "block" : "none" }}>
                New and Modern Publishers
              </a>
              <a style={{ display: sol ? "block" : "none" }}>
                Magazine Publishers
              </a>
              <a style={{ display: sol ? "block" : "none" }}>
                To Increase Traffic
              </a>
              <a style={{ display: sol ? "block" : "none" }}>
                Monetize your content
              </a>
              <a style={{ display: sol ? "block" : "none" }}>For Developers</a>
              <hr
                style={{
                  display: sol ? "block" : "none",
                  width: "300px",
                  margin: "auto",
                  height: "0.1px",
                  color: "black",
                }}
              ></hr>
              <a href="/Demo">Schedule Demo</a>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}

export default Header;
