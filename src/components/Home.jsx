import React from "react";
import "../css/App.css";
import { useState, useEffect } from "react";
import StyledMainContainer from "../styled components/MainContainer";
import StyledHeader from "../styled components/Header";
import StyledImg from "../styled components/Image";
import StyledText from "../styled components/Text";
import StyledButtonContainer from "../styled components/ButtonContainer";
import StyledButton from "../styled components/StyledButton";
import StyledSmallContainer from "../styled components/SmallContainer";
import StyledHorizontalContainer from "../styled components/HorizontalContainer";
import StyledCard from "../styled components/Card";
import StyledLogoImg from "../styled components/LogoImg";
import StyledVerticalContainer from "../styled components/VerticalContainer";
import StyledMobileContainer from "../styled components/mobileContainer";

function Home() {
  const [bold, setBold] = useState(true);
  const [ahead, setAhead] = useState(false);
  const [meType, setMeType] = useState(false);
  const [accessType, setAccessType] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 376) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <StyledMainContainer>
        <StyledHeader style={{ margin: "auto" }}>
          Let the Content Renaissance begin.
        </StyledHeader>
        <StyledImg src="https://gumlet.assettype.com/quintype-website/2020-01/5d475a7c-bd81-440e-91f8-642df85dbfa9/artboard_1_copy_7.svg?w=330&dpr=2.0"></StyledImg>
        <StyledText mtalign="center" mmleft="auto" mleft="0px" mtop={10}>
          Enough fighting with your CMS. Quintype provides a complete suite of
          digital publishing solutions that are powerful, easy to use and
          dependable.
        </StyledText>
        <StyledButtonContainer mmleft="auto">
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Start Free Trial
          </StyledButton>
          <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">
            Watch Demo
          </StyledButton>
        </StyledButtonContainer>
      </StyledMainContainer>
      <StyledSmallContainer>
        <StyledImg
          mtop="-50px"
          mleft="100px"
          width="450px"
          mobileWidth="287px"
          src="https://gumlet.assettype.com/quintype-website/2020-01/d08a5e7e-c13e-4192-b917-bba44efb4ca5/figuring_tech.svg?w=576&dpr=1.0"
        ></StyledImg>
        <StyledHeader
          weight={500}
          mobilefontSize={18}
          mobileWidth={287}
          width={501}
          fontSize={22}
          style={{ margin: "auto" }}
        >
          How can you start a renaissance if you are too caught up figuring
          tech?
        </StyledHeader>
        <StyledText
          mtop={-30}
          mobilefontSize={15}
          mobileWidth={287}
          width={501}
          fontSize={19}
          mmleft="auto"
          mleft="auto"
        >
          Quintype gives you the freedom to publish, distribute and monetize
          content sans the tech hiccups. We have a suite of products to take
          care of every tiny detail. Unleash the power of your content on our
          platform.
        </StyledText>
      </StyledSmallContainer>
      <StyledHorizontalContainer mtop={150} mdisplay="flex">
        <StyledHeader
          fontSize={30}
          width={1092}
          mobileWidth={335}
          mobilefontSize={16}
          talign="center"
          mtalign="center"
          mmleft="auto"
        >
          OUR DIGITAL PUBLISHING SOLUTIONS, AN EMPOWERING SUITE OF PRODUCTS
        </StyledHeader>
        <br></br>
      </StyledHorizontalContainer>
      <StyledHorizontalContainer mbot={40}>
        <StyledCard
          type={bold}
          setterM={setBold}
          setter1={setAhead}
          setter2={setMeType}
          setter3={setAccessType}
          content={
            <>
              <StyledLogoImg src="https://www.quintype.com/static/media/bold.9a984511.svg"></StyledLogoImg>
              <StyledHeader
                mleft="0px"
                fontSize={18}
                weight={500}
                talign="center"
              >
                BOLD
              </StyledHeader>
              <StyledText
                fontSize={16}
                mtop={1}
                talign="center"
                mleft="0px"
                width={233}
                mbottom="0px"
              >
                CMS that understands your content
              </StyledText>
            </>
          }
        ></StyledCard>
        <StyledCard
          type={ahead}
          setterM={setAhead}
          setter1={setBold}
          setter2={setMeType}
          setter3={setAccessType}
          content={
            <>
              <StyledLogoImg src="https://www.quintype.com/static/media/ahead.871855d8.svg"></StyledLogoImg>
              <StyledHeader
                mleft="0px"
                fontSize={18}
                weight={500}
                talign="center"
              >
                AHEAD
              </StyledHeader>
              <StyledText
                fontSize={16}
                mtop={1}
                talign="center"
                mleft="0px"
                width={233}
                mbottom="0px"
              >
                Content first front-end for a riveting online presence
              </StyledText>
            </>
          }
        ></StyledCard>
        <StyledCard
          type={meType}
          setterM={setMeType}
          setter1={setAhead}
          setter2={setBold}
          setter3={setAccessType}
          content={
            <>
              <StyledLogoImg src="https://www.quintype.com/static/media/metype.3b963793.svg"></StyledLogoImg>
              <StyledHeader
                mleft="0px"
                fontSize={18}
                weight={500}
                talign="center"
              >
                METYPE
              </StyledHeader>
              <StyledText
                fontSize={16}
                mtop={1}
                talign="center"
                mleft="0px"
                width={233}
                mbottom="0px"
              >
                Absolute audience engagement
              </StyledText>
            </>
          }
        ></StyledCard>
        <StyledCard
          type={accessType}
          setterM={setAccessType}
          setter1={setAhead}
          setter2={setMeType}
          setter3={setBold}
          content={
            <>
              <StyledLogoImg src="https://www.quintype.com/static/media/accesstype.5cd08bc1.svg"></StyledLogoImg>
              <StyledHeader
                mleft="0px"
                fontSize={18}
                weight={500}
                talign="center"
              >
                ACCESSTYPE
              </StyledHeader>
              <StyledText
                fontSize={16}
                mtop={1}
                talign="center"
                mleft="0px"
                width={233}
                mbottom="0px"
              >
                Robust content monetization
              </StyledText>
            </>
          }
        ></StyledCard>
      </StyledHorizontalContainer>
      <StyledHorizontalContainer
        mbot={100}
        style={{ display: bold && !mobile ? "flex" : "none" }}
      >
        <StyledVerticalContainer>
          <StyledHeader fontSize={20} width={348} mleft="0px">
            All the content liberation tools you have wished for. And, all those
            you haven't yet.
          </StyledHeader>
          <div>
            <a
              href="/products/Bold"
              style={{
                marginTop: "0px",
                textDecoration: "none",
                fontSize: "18px",
                color: "#44D7B6",
                fontWeight: "bold",
                height: "29px",
              }}
            >
              Explore Features
            </a>
            <svg
              style={{ marginTop: "0px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
            >
              <path
                fill="#44D7B6"
                d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
              ></path>
            </svg>
          </div>
          <br></br>
          <br></br>
          <hr
            style={{
              borderBottom: "0px solid rgb(227, 227, 227)",
              width: "328px",
              marginBottom: "50px",
            }}
          />
          <StyledText mleft="0px" fontSize={18} width={348} tstyle="italic">
            "The team consistently adds new features to benefit publishers and
            the products are designed intelligently. The front-end is designed
            for malleability to meet our customized requirements making Quintype
            a hassle-free choice for us."
          </StyledText>
          <StyledHeader fontSize={17} width={348} mleft="0px">
            Sonakshi Sinha, Product Manager
          </StyledHeader>
          <img
            src="https://gumlet.assettype.com/quintype-website/2019-12/e410a432-32d0-4aac-94a4-b27f1d2b978c/Client_15.png?w=160&dpr=1.0"
            style={{ width: "150px" }}
          ></img>
        </StyledVerticalContainer>
        <img
          className="image"
          src="https://gumlet.assettype.com/quintype-website/2022-09/a54010e0-3958-4049-ba67-1c43d4e461d6/BOLD_Workspace.png?w=640&dpr=1.0"
          style={{ width: "627px", marginLeft: "117px" }}
        ></img>
      </StyledHorizontalContainer>
      <StyledHorizontalContainer
        mbot={100}
        style={{ display: ahead && !mobile ? "flex" : "none" }}
      >
        <StyledVerticalContainer>
          <StyledHeader fontSize={20} width={348} mleft="0px">
            Powerful presentation for your powerful content.
          </StyledHeader>
          <div>
            <a
              href="/products/Ahead"
              style={{
                marginTop: "0px",
                textDecoration: "none",
                fontSize: "18px",
                color: "#44D7B6",
                fontWeight: "bold",
                height: "29px",
              }}
            >
              Learn More
            </a>
            <svg
              style={{ marginTop: "0px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
            >
              <path
                fill="#44D7B6"
                d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
              ></path>
            </svg>
          </div>
          <br></br>
          <br></br>
          <hr
            style={{
              borderBottom: "0px solid rgb(227, 227, 227)",
              width: "328px",
              marginBottom: "50px",
            }}
          />
          <StyledText mleft="0px" fontSize={18} width={348} tstyle="italic">
            "Quintype's minimalistic and easy-to-use UI/UX for visitors is a big
            plus point. The backend is easy to use and has been specifically
            designed keeping content publishers in mind."
          </StyledText>
          <StyledHeader fontSize={17} width={348} mleft="0px">
            Shruty Bhattacharyya, Digital Manager
          </StyledHeader>
          <img
            src="https://images.assettype.com/quintype-website/2020-03/6967c460-24ec-45eb-8f87-b2ab7577fced/East_Mojo_Logo_01.svg"
            style={{ width: "150px" }}
          ></img>
        </StyledVerticalContainer>
        <img
          className="image"
          src="https://gumlet.assettype.com/quintype-website/2019-12/f96908f7-7e17-43de-83a7-af84ecb57caa/ahead_product.png?w=1920&dpr=1.0"
          style={{ width: "627px", marginLeft: "117px" }}
        ></img>
      </StyledHorizontalContainer>
      <StyledHorizontalContainer
        mbot={100}
        style={{ display: meType && !mobile ? "flex" : "none" }}
      >
        <StyledVerticalContainer>
          <StyledHeader fontSize={20} width={348} mleft="0px">
            Get people talking.
          </StyledHeader>
          <div>
            <a
              href="/products/Metype"
              style={{
                marginTop: "0px",
                textDecoration: "none",
                fontSize: "18px",
                color: "#44D7B6",
                fontWeight: "bold",
                height: "29px",
              }}
            >
              See How
            </a>
            <svg
              style={{ marginTop: "0px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
            >
              <path
                fill="#44D7B6"
                d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
              ></path>
            </svg>
          </div>
          <br></br>
          <br></br>
          <hr
            style={{
              borderBottom: "0px solid rgb(227, 227, 227)",
              width: "328px",
              marginBottom: "50px",
            }}
          />
          <StyledText mleft="0px" fontSize={18} width={348} tstyle="italic">
            "Metype helps our team to engage with our young audience while
            ensuring high quality conversations through their toxicity meter."
          </StyledText>
          <StyledHeader fontSize={17} width={348} mleft="0px">
            Amarnath Govindarajan, Digital Head
          </StyledHeader>
          <img
            src="https://gumlet.assettype.com/quintype-website/2019-12/db2d7899-378b-4c89-aac3-f6b52163ea8c/swarajya_29.svg?w=1100&dpr=1.0"
            style={{ width: "150px" }}
          ></img>
        </StyledVerticalContainer>
        <img
          className="image"
          src="https://gumlet.assettype.com/quintype-website/2019-11/5ec3de77-e3d8-4e74-9b43-2efde28329f1/metype_audience_engagement.png?w=1300&dpr=1.0"
          style={{ width: "627px", marginLeft: "117px" }}
        ></img>
      </StyledHorizontalContainer>
      <StyledHorizontalContainer
        mbot={100}
        style={{ display: accessType && !mobile ? "flex" : "none" }}
      >
        <StyledVerticalContainer>
          <StyledHeader fontSize={20} width={348} mleft="0px">
            Turn readers into faithful followers.
          </StyledHeader>
          <div>
            <a
              href="/products/Accesstype"
              style={{
                marginTop: "0px",
                textDecoration: "none",
                fontSize: "18px",
                color: "#44D7B6",
                fontWeight: "bold",
                height: "29px",
              }}
            >
              Explore
            </a>
            <svg
              style={{ marginTop: "0px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
            >
              <path
                fill="#44D7B6"
                d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
              ></path>
            </svg>
          </div>
          <br></br>
          <br></br>
          <hr
            style={{
              borderBottom: "0px solid rgb(227, 227, 227)",
              width: "328px",
              marginBottom: "50px",
            }}
          />
          <StyledText mleft="0px" fontSize={18} width={348} tstyle="italic">
            "Monetization in our business is constantly evolving and Accesstype
            helped us experiment with multiple subscription models to find the
            right balance. We would recommend Accesstype for anyone looking to
            monetize their content beyond advertising."
          </StyledText>
          <StyledHeader fontSize={17} width={348} mleft="0px">
            Ankit Dikshit, Digital Marketing
          </StyledHeader>
          <img
            src="https://gumlet.assettype.com/quintype-website/2019-12/3163b395-6987-4d61-8c7f-9fb0ff4c2229/Client_14.png?w=1300&dpr=1.0"
            style={{ width: "150px" }}
          ></img>
        </StyledVerticalContainer>
        <img
          className="image"
          src="https://gumlet.assettype.com/quintype-website/2019-12/c34f1743-3202-42d1-b099-419b719ef8dd/accesstype_product.png?w=1920&dpr=1.0"
          style={{ width: "627px", marginLeft: "117px" }}
        ></img>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <div style={{ width: "315px", display: "flex" }}>
          <StyledLogoImg src="https://www.quintype.com/static/media/bold.9a984511.svg"></StyledLogoImg>
          <StyledHeader
            mobilefontSize={14}
            mobileWidth={279}
            mobileHeight={24}
            mmtop={2.5}
            mobileweight={700}
          >
            BOLD
          </StyledHeader>
        </div>
        <StyledHeader mobilefontSize={18} mobileWidth={315}>
          All the content liberation tools you have wished for. And, all those
          you haven’t yet.
        </StyledHeader>
        <img
          src="https://gumlet.assettype.com/quintype-website/2022-09/a54010e0-3958-4049-ba67-1c43d4e461d6/BOLD_Workspace.png?w=640&dpr=1.0"
          style={{ width: "295px", margin: "auto", marginTop: "20px" }}
        ></img>
        <div style={{ margin: "auto", marginTop: "20px" }}>
          <a
            href="/products/Bold"
            style={{
              marginTop: "0px",
              fontSize: "18px",
              textDecoration: "none",
              color: "#44D7B6",
              fontWeight: "bold",
              height: "29px",
            }}
          >
            Explore Features
          </a>
          <svg
            style={{ marginTop: "0px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="19"
          >
            <path
              fill="#44D7B6"
              d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
            ></path>
          </svg>
        </div>
        <StyledText
          mtalign="center"
          mobilefontSize={16}
          mobileWidth={315}
          mmtop={20}
        >
          "The team consistently adds new features to benefit publishers and the
          products are designed intelligently. The front-end is designed for
          malleability to meet our customized requirements making Quintype a
          hassle-free choice for us."
        </StyledText>
        <StyledHeader
          mobileWidth={315}
          mobilefontSize={14}
          mtalign="center"
          mmtop={30}
        >
          Sonakshi Sinha, Product Manager
        </StyledHeader>
        <img
          src="https://gumlet.assettype.com/quintype-website/2019-12/e410a432-32d0-4aac-94a4-b27f1d2b978c/Client_15.png?w=160&dpr=1.0"
          style={{
            width: "150px",
            margin: "auto",
            marginTop: "-50px",
            marginBottom: "50px",
          }}
        ></img>
        <div style={{ width: "315px", display: "flex" }}>
          <StyledLogoImg src="https://www.quintype.com/static/media/ahead.871855d8.svg"></StyledLogoImg>
          <StyledHeader
            mobilefontSize={14}
            mobileWidth={279}
            mobileHeight={24}
            mmtop={2.5}
            mobileweight={700}
          >
            AHEAD
          </StyledHeader>
        </div>
        <StyledHeader mobilefontSize={18} mobileWidth={315}>
          Powerful presentation for your powerful content.
        </StyledHeader>
        <img
          src="https://gumlet.assettype.com/quintype-website/2019-12/f96908f7-7e17-43de-83a7-af84ecb57caa/ahead_product.png?w=1100&dpr=1.0"
          style={{ width: "295px", margin: "auto", marginTop: "-10px" }}
        ></img>
        <div style={{ margin: "auto", marginTop: "20px" }}>
          <a
            href="/products/Ahead"
            style={{
              marginTop: "0px",
              textDecoration: "none",
              fontSize: "18px",
              color: "#44D7B6",
              fontWeight: "bold",
              height: "29px",
            }}
          >
            Learn More
          </a>
          <svg
            style={{ marginTop: "0px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="19"
          >
            <path
              fill="#44D7B6"
              d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
            ></path>
          </svg>
        </div>
        <StyledText
          mtalign="center"
          mobilefontSize={16}
          mobileWidth={315}
          mmtop={20}
        >
          "Quintype's minimalistic and easy-to-use UI/UX for visitors is a big
          plus point. The backend is easy to use and has been specifically
          designed keeping content publishers in mind."
        </StyledText>
        <StyledHeader
          mobileWidth={315}
          mobilefontSize={14}
          mtalign="center"
          mmtop={10}
        >
          Shruty Bhattacharyya, Digital Manager
        </StyledHeader>
        <img
          src="https://images.assettype.com/quintype-website/2020-03/6967c460-24ec-45eb-8f87-b2ab7577fced/East_Mojo_Logo_01.svg"
          style={{
            width: "150px",
            margin: "auto",
            marginTop: "-30px",
            marginBottom: "50px",
          }}
        ></img>
        <div style={{ width: "315px", display: "flex" }}>
          <StyledLogoImg src="https://www.quintype.com/static/media/ahead.871855d8.svg"></StyledLogoImg>
          <StyledHeader
            mobilefontSize={14}
            mobileWidth={279}
            mobileHeight={24}
            mmtop={2.5}
            mobileweight={700}
          >
            METYPE
          </StyledHeader>
        </div>
        <StyledHeader mobilefontSize={18} mobileWidth={315}>
          Get people talking.
        </StyledHeader>
        <img
          src="https://gumlet.assettype.com/quintype-website/2019-11/5ec3de77-e3d8-4e74-9b43-2efde28329f1/metype_audience_engagement.png?w=1100&dpr=1.0"
          style={{ width: "295px", margin: "auto", marginTop: "-30px" }}
        ></img>
        <div style={{ margin: "auto", marginTop: "20px" }}>
          <a
            href="/products/Metype"
            style={{
              marginTop: "0px",
              textDecoration: "none",
              fontSize: "18px",
              color: "#44D7B6",
              fontWeight: "bold",
              height: "29px",
            }}
          >
            See How
          </a>
          <svg
            style={{ marginTop: "0px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="19"
          >
            <path
              fill="#44D7B6"
              d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
            ></path>
          </svg>
        </div>
        <StyledText
          mtalign="center"
          mobilefontSize={16}
          mobileWidth={315}
          mmtop={20}
        >
          "Metype helps our team to engage with our young audience while
          ensuring high quality conversations through their toxicity meter."
        </StyledText>
        <StyledHeader
          mobileWidth={315}
          mobilefontSize={14}
          mtalign="center"
          mmtop={-30}
        >
          Amarnath Govindarajan, Digital Head
        </StyledHeader>
        <img
          src="https://gumlet.assettype.com/quintype-website/2019-12/db2d7899-378b-4c89-aac3-f6b52163ea8c/swarajya_29.svg?w=1100&dpr=1.0"
          style={{
            width: "150px",
            margin: "auto",
            marginTop: "-30px",
            marginBottom: "60px",
          }}
        ></img>
        <div style={{ width: "315px", display: "flex" }}>
          <StyledLogoImg src="https://www.quintype.com/static/media/ahead.871855d8.svg"></StyledLogoImg>
          <StyledHeader
            mobilefontSize={14}
            mobileWidth={279}
            mobileHeight={24}
            mmtop={2.5}
            mobileweight={700}
          >
            ACCESSTYPE
          </StyledHeader>
        </div>
        <StyledHeader mobilefontSize={18} mobileWidth={315}>
          Turn readers into faithful followers.
        </StyledHeader>
        <img
          src="https://gumlet.assettype.com/quintype-website/2019-12/c34f1743-3202-42d1-b099-419b719ef8dd/accesstype_product.png?w=1100&dpr=1.0"
          style={{ width: "295px", margin: "auto", marginTop: "-30px" }}
        ></img>
        <div style={{ margin: "auto", marginTop: "20px" }}>
          <a
            href="/products/Accesstype"
            style={{
              marginTop: "0px",
              textDecoration: "none",
              fontSize: "18px",
              color: "#44D7B6",
              fontWeight: "bold",
              height: "29px",
            }}
          >
            EXPLORE
          </a>
          <svg
            style={{ marginTop: "0px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="19"
          >
            <path
              fill="#44D7B6"
              d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
            ></path>
          </svg>
        </div>
        <StyledText mtalign="center" mobilefontSize={16} mobileWidth={315}>
          "Monetization in our business is constantly evolving and Accesstype
          helped us experiment with multiple subscription models to find the
          right balance. We would recommend Accesstype for anyone looking to
          monetize their content beyond advertising."
        </StyledText>
        <StyledHeader
          mobileWidth={315}
          mobilefontSize={14}
          mtalign="center"
          mmtop={55}
        >
          Ankit Dikshit, Digital Marketing
        </StyledHeader>
        <img
          src="https://gumlet.assettype.com/quintype-website/2019-12/3163b395-6987-4d61-8c7f-9fb0ff4c2229/Client_14.png?w=1100&dpr=1.0"
          style={{
            width: "150px",
            margin: "auto",
            marginTop: "-30px",
            marginBottom: "50px",
          }}
        ></img>
      </StyledMobileContainer>
      <StyledVerticalContainer width="100%" backColour="#f4faf9">
        <StyledHeader
          width={760}
          fontSize={31}
          talign="center"
          style={{ margin: "auto", marginTop: "80px" }}
        >
          World's most successful digital publishing companies trust Quintype to
          serve content to billions of content consumers.
        </StyledHeader>
        <br></br>
        <br></br>
        <div
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            height: "69.95px",
          }}
        >
          <img
            style={{
              alignSelf: "center",
              marginRight: "20px",
              height: "65.56px",
            }}
            src="https://gumlet.assettype.com/quintype-website/2019-12/e410a432-32d0-4aac-94a4-b27f1d2b978c/Client_15.png?w=160&dpr=1.0"
          ></img>
          <img
            style={{
              alignSelf: "center",
              marginRight: "20px",
              height: "48.27px",
            }}
            src="https://gumlet.assettype.com/quintype-website/2019-12/3163b395-6987-4d61-8c7f-9fb0ff4c2229/Client_14.png?w=160&dpr=1.0"
          ></img>
          <img
            style={{
              alignSelf: "center",
              marginRight: "20px",
              height: "43.44px",
            }}
            src="https://gumlet.assettype.com/quintype-website/2019-12/16dfdad4-5b86-4a82-b2ff-0665227335fc/Vikatan_logo_English__1_.svg?w=160&dpr=1.0"
          ></img>
          <img
            style={{
              alignSelf: "center",
              marginRight: "20px",
              height: "15.92px",
            }}
            src="https://www.quintype.com/karjalainen.svg"
          ></img>
          <img
            style={{ alignSelf: "center", height: "65.56px" }}
            src="https://gumlet.assettype.com/quintype-website/2019-12/a194b215-f712-4280-acfd-4c3f6bcbae1c/Client_19.png?w=160&dpr=1.0"
          ></img>
        </div>
        <br></br>
        <div
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            height: "85.84px",
          }}
        >
          <img
            style={{
              alignSelf: "center",
              marginRight: "20px",
              height: "78.86px",
            }}
            src="https://gumlet.assettype.com/quintype-website/2019-12/4b0e9d2b-4317-4ce2-92e0-2b0da654f632/Client_18.png?w=200&dpr=1.0"
          ></img>
          <img
            style={{
              alignSelf: "center",
              marginRight: "20px",
              height: "58.89px",
            }}
            src="https://www.quintype.com/sakal.jpg"
          ></img>
          <img
            style={{
              alignSelf: "center",
              marginRight: "20px",
              height: "81.45px",
            }}
            src="https://gumlet.assettype.com/quintype-website/2019-12/912fc8de-0c32-4e3c-8903-eb280cadd495/afaqs.svg?w=200&dpr=1.0"
          ></img>
          <img
            style={{ alignSelf: "center", height: "41.44" }}
            src="https://images.assettype.com/quintype-website/2020-09/a659941f-1093-4bb7-a73e-d81d0a110e46/prothomalo.svg"
          ></img>
        </div>
        <div
          style={{ margin: "auto", marginTop: "20px", marginBottom: "80px" }}
        >
          <a
            style={{
              marginTop: "0px",
              fontSize: "18px",
              color: "#44D7B6",
              fontWeight: "bold",
              height: "29px",
            }}
          >
            View all success stories
          </a>
          <svg
            style={{ marginTop: "0px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="19"
          >
            <path
              fill="#44D7B6"
              d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
            ></path>
          </svg>
        </div>
      </StyledVerticalContainer>
      <StyledMobileContainer mbackColour="#f4faf9" mwidth={375}>
        <StyledHeader
          mobileWidth={335}
          mobilefontSize={20}
          mtalign="center"
          mmtop={80}
        >
          World's most successful digital publishing companies trust Quintype to
          serve content to billions of content consumers.
        </StyledHeader>
        <img
          style={{
            alignSelf: "center",
            height: "72px",
            marginTop: "100px",
          }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/e410a432-32d0-4aac-94a4-b27f1d2b978c/Client_15.png?w=160&dpr=1.0"
        ></img>
        <img
          style={{
            alignSelf: "center",
            height: "53px",
          }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/3163b395-6987-4d61-8c7f-9fb0ff4c2229/Client_14.png?w=160&dpr=1.0"
        ></img>
        <img
          style={{
            alignSelf: "center",
            height: "59.63px",
          }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/16dfdad4-5b86-4a82-b2ff-0665227335fc/Vikatan_logo_English__1_.svg?w=160&dpr=1.0"
        ></img>
        <img
          style={{
            alignSelf: "center",
            height: "21.86px",
          }}
          src="https://www.quintype.com/karjalainen.svg"
        ></img>
        <img
          style={{ alignSelf: "center", height: "72px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/a194b215-f712-4280-acfd-4c3f6bcbae1c/Client_19.png?w=160&dpr=1.0"
        ></img>
        <div
          style={{ margin: "auto", marginTop: "20px", marginBottom: "80px" }}
        >
          <a
            style={{
              marginTop: "0px",
              fontSize: "18px",
              color: "#44D7B6",
              fontWeight: "bold",
              height: "29px",
            }}
          >
            View all success stories
          </a>
          <svg
            style={{ marginTop: "0px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="19"
          >
            <path
              fill="#44D7B6"
              d="M12.214 20c.238 0 .44-.08.607-.24l6.929-6.675A.782.782 0 0020 12.5a.782.782 0 00-.25-.585l-6.929-6.674A.843.843 0 0012.214 5c-.238 0-.44.08-.607.24l-.786.758a.688.688 0 00-.267.585c.011.229.1.424.267.584l4.286 3.957H4.857c-.238 0-.44.08-.607.24a.782.782 0 00-.25.586v1.1c0 .23.083.425.25.585.167.16.369.241.607.241h10.25l-4.286 3.957a.846.846 0 00-.267.584.688.688 0 00.267.585l.786.757c.167.16.37.241.607.241z"
            ></path>
          </svg>
        </div>
      </StyledMobileContainer>
      <StyledSmallContainer backColour="white" mmbot={150}>
        <StyledImg
          mtop="0px"
          mleft="100px"
          width="450px"
          mobileWidth="287px"
          src="https://gumlet.assettype.com/quintype-website/2019-12/996decc0-56f5-45dc-9a26-5b456955d219/Bold_Solution.svg?w=576&dpr=1.0"
        ></StyledImg>
        <StyledHeader
          weight={500}
          mobilefontSize={18}
          mobileWidth={287}
          width={501}
          fontSize={22}
          mmleft="auto"
        >
          How many features make for absolute freedom to publish?
        </StyledHeader>
        <StyledText
          mtop={-52}
          mobilefontSize={15}
          mobileWidth={287}
          width={501}
          fontSize={18}
          mmleft="auto"
          mtalign="center"
        >
          We think like content creators, which is why we make technology work
          for you and not vice versa. Our tools ready you for everything -
          publishing, business, and even rapid tech evolution. So that your
          focus is your content. And, on creating an impact! We bring you every
          feature that gives you absolute freedom to publish what you like, how
          you like.
        </StyledText>
      </StyledSmallContainer>
      <StyledVerticalContainer width="100%" backColour="#f4faf9">
        <StyledHeader
          width={760}
          fontSize={31}
          talign="center"
          style={{ margin: "auto", marginTop: "80px" }}
        >
          Awards and accolades for our solutions comes from putting our
          customers first
        </StyledHeader>
        <br></br>
        <br></br>
        <div
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            height: "175px",
            marginBottom: "80px",
          }}
        >
          <img
            style={{
              alignSelf: "center",
              marginRight: "64px",
              height: "175px",
            }}
            src="https://www.quintype.com/Award1.svg"
          ></img>
          <img
            style={{
              alignSelf: "center",
              marginRight: "64px",
              height: "175px",
            }}
            src="https://www.quintype.com/Award3.svg"
          ></img>
          <img
            style={{
              alignSelf: "center",
              marginRight: "64px",
              height: "175px",
            }}
            src="https://www.quintype.com/Award4.svg"
          ></img>
          <img
            style={{
              alignSelf: "center",
              height: "175px",
            }}
            src="https://www.quintype.com/Award-10.svg"
          ></img>
        </div>
      </StyledVerticalContainer>
      <StyledMobileContainer mbackColour="#f4faf9" mwidth={375}>
        <StyledHeader
          mobileWidth={335}
          mobilefontSize={20}
          mtalign="center"
          mmtop={80}
          mmleft="auto"
        >
          Awards and accolades for our solutions comes from putting our
          customers first
        </StyledHeader>
        <img
          style={{
            alignSelf: "center",
            height: "175px",
            marginTop: "100px",
          }}
          src="https://www.quintype.com/Award1.svg"
        ></img>
        <img
          style={{
            alignSelf: "center",
            height: "175px",
            marginTop: "64px",
          }}
          src="https://www.quintype.com/Award3.svg"
        ></img>
        <img
          style={{
            alignSelf: "center",
            height: "175px",
            marginTop: "64px",
          }}
          src="https://www.quintype.com/Award4.svg"
        ></img>
        <img
          style={{
            alignSelf: "center",
            height: "175px",
            marginTop: "64px",
            marginBottom: "80px",
          }}
          src="https://www.quintype.com/Award-10.svg"
        ></img>
      </StyledMobileContainer>
      <StyledSmallContainer backColour="white" mmbot={150}>
        <StyledImg
          mtop="-15px"
          mleft="100px"
          width="480.5px"
          mobileWidth="287px"
          src="https://gumlet.assettype.com/quintype-website/2019-12/fcae94ec-6529-44ec-82eb-0c7154358703/Contact_Us_02.svg?w=576&dpr=1.0"
        ></StyledImg>
        <StyledHeader
          weight={500}
          mobilefontSize={19}
          mobileWidth={287}
          width={501}
          fontSize={23}
          mmleft="auto"
        >
          If it was easier to publish, wouldn’t a lot more stories be told?
        </StyledHeader>
        <StyledText
          mtop={-57}
          mobilefontSize={14.5}
          mobileWidth={287}
          width={501}
          fontSize={18}
          mmtop={25}
          mmleft="auto"
          mtalign="center"
        >
          We have you covered, end-to-end. If you have a specific requirement,
          chances are we already have that product or feature. Or, it’s
          underway. And, hey, if you need a custom design, we’ll develop it!
        </StyledText>
        <StyledButtonContainer mtop={-100} mmtop={30} mmleft="auto">
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Schedule Demo
          </StyledButton>
        </StyledButtonContainer>
      </StyledSmallContainer>
    </>
  );
}
export default Home;
