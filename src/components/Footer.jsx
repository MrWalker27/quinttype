import "../css/Footer.css";
import StyledMobileContainer from "../styled components/mobileContainer";
import { useState } from "react";

function Footer() {
  const [company, setCompany] = useState(false);
  const [support, setSupport] = useState(false);
  const [products, setProducts] = useState(false);
  const [resources, setResources] = useState(false);
  const [solutions, setSolutions] = useState(false);

  const clearStates = () => {
    setCompany(false);
    setSupport(false);
    setProducts(false);
    setResources(false);
    setSolutions(false);
  };
  return (
    <>
      <div className="footer">
        <table className="footerTable">
          <tr>
            <td className="footerHeading">Company</td>
            <td className="footerHeading">Support</td>
            <td className="footerHeading">Products</td>
            <td className="footerHeading">Resources</td>
            <td colSpan={3}>
              <a href="/Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="34.91"
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
              </svg></a>
            </td>
          </tr>
          <tr>
            <td>About</td>
            <td>Help Docs</td>
            <td><a href="/products/Bold" style={{textDecoration:"none",color:"#828383"}}>Bold</a></td>
            <td>Blog</td>
            <td>© 2023 Quintype. </td>
          </tr>
          <tr>
            <td>Consulting</td>
            <td>Developer Docs</td>
            <a href="/products/Ahead" style={{textDecoration:"none",color:"#828383"}}>Ahead</a>
            <td>Case Studies</td>
          </tr>
          <tr>
            <td>Careers</td>
            <td>Schedule demo</td>
            <a href="/products/Metype" style={{textDecoration:"none",color:"#828383"}}>Metype</a>
            <td>Integrations</td>
          </tr>
          <tr>
            <td>Contact Us</td>
            <td>Free trial</td>
            <a href="/products/Accesstype" style={{textDecoration:"none",color:"#828383"}}>Accesstype</a>
            <td>Essence</td>
          </tr>
          <tr>
            <td>Privacy Policy</td>
            <td>Status</td>
            <a href="/products/Content" style={{textDecoration:"none",color:"#828383"}}>Content Mobile Apps</a>
            <td>Partners</td>
          </tr>
          <tr>
            <td></td>
            <td>Terms</td>
            <td></td>
            <td>Guide</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Press Release</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Awards</td>
          </tr>
          <tr>
            <td className="footerHeading">Solutions</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>New and Modern Publishers</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Magazine Publishers</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>To Increase Traffic</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Monetize your content</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>For Developers</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <StyledMobileContainer mbackColour="#F7F9F8" mwidth="100%">
        <a
          hred="#"
          style={{ marginTop: "80px" }}
          className="footerHeading"
          onClick={() => (clearStates(), setCompany(!company))}
        >
          Company
          <div class="triangle_down"></div>
        </a>
        <div className={company ? "footerShow" : "footerHide"}>
          <a>About</a>
          <a>Consulting</a>
          <a>Careers</a>
          <a>Contact Us</a>
          <a>Privacy Policy</a>
        </div>
        <div
          className="footerHeading"
          style={{ marginTop: "20px" }}
          onClick={() => (clearStates(), setSupport(!support))}
        >
          Support
          <div class="triangle_down" style={{ marginLeft: "243px" }}></div>
        </div>
        <div className={support ? "footerShow" : "footerHide"}>
          <a>Help Docs</a>
          <a>Developer Docs</a>
          <a>Schedule Demo</a>
          <a>Free Trial</a>
          <a>Status</a>
          <a>Terms</a>
        </div>
        <div
          className="footerHeading"
          style={{ marginTop: "20px" }}
          onClick={() => (clearStates(), setProducts(!products))}
        >
          Products
          <div class="triangle_down" style={{ marginLeft: "237px" }}></div>
        </div>
        <div className={products ? "footerShow" : "footerHide"}>
        <a href="/products/Bold" style={{textDecoration:"none",color:"#828383"}}>Bold</a>
        <a href="/products/Ahead" style={{textDecoration:"none",color:"#828383"}}>Ahead</a>
        <a href="/products/Metype" style={{textDecoration:"none",color:"#828383"}}>Metype</a>
        <a href="/products/Accesstype" style={{textDecoration:"none",color:"#828383"}}>Accesstype</a>
        </div>
        <div
          className="footerHeading"
          style={{ marginTop: "20px" }}
          onClick={() => (clearStates(), setResources(!resources))}
        >
          Resources
          <div class="triangle_down" style={{ marginLeft: "228px" }}></div>
        </div>
        <div className={resources ? "footerShow" : "footerHide"}>
          <a>Blog</a>
          <a>Case Studies</a>
          <a>Integrations</a>
          <a>Essence</a>
          <a>Partners</a>
          <a>Guide</a>
          <a>Press Release</a>
          <a>Awards</a>
        </div>
        <div
          className="footerHeading"
          style={{ marginTop: "20px" }}
          onClick={() => (clearStates(), setSolutions(!solutions))}
        >
          Solutions
          <div class="triangle_down" style={{ marginLeft: "232px" }}></div>
        </div>
        <div className={solutions ? "footerShow" : "footerHide"}>
          <a>News and Modern Publishers</a>
          <a>Magazine Publishers</a>
          <a>To Increase Traffic</a>
          <a>Monetize your Content</a>
          <a>For Developers</a>
        </div>
        <div
          style={{
            margin: "auto",
            marginTop: "80px",
            fontWeight: "bold",
            color: "#828383",
            fontSize: "17px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="34.91"
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
        </div>
        <div
          style={{
            margin: "auto",
            marginBottom: "80px",
            fontWeight: "bold",
            color: "#828383",
            fontSize: "17px",
          }}
        >
          © 2023 Quintype.
        </div>
      </StyledMobileContainer>
    </>
  );
}
export default Footer;
