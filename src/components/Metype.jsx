import StyledHorizontalContainer from "../styled components/HorizontalContainer";
import StyledVerticalContainer from "../styled components/VerticalContainer";
import StyledHeader from "../styled components/Header";
import StyledText from "../styled components/Text";
import StyledButtonContainer from "../styled components/ButtonContainer";
import StyledButton from "../styled components/StyledButton";
import StyledMobileContainer from "../styled components/mobileContainer";
import StyledGreenHeader from "../styled components/GreenHeader";
import StyledHR from "../styled components/HR";
import { useState } from "react";

function Metype() {
  const [faq1, setfaq1] = useState(false);
  const [faq2, setfaq2] = useState(false);
  const [faq3, setfaq3] = useState(false);
  const [faq4, setfaq4] = useState(false);
  const [faq5, setfaq5] = useState(false);
  const [faq6, setfaq6] = useState(false);
  const [faq7, setfaq7] = useState(false);
  const [faq8, setfaq8] = useState(false);
  const [faq9, setfaq9] = useState(false);

  const clearFaq = () => {
    setfaq1(false);
    setfaq2(false);
    setfaq3(false);
    setfaq4(false);
    setfaq5(false);
    setfaq6(false);
    setfaq7(false);
    setfaq8(false);
    setfaq9(false);
  };

  return (
    <>
      {/* first section */}
      <StyledHorizontalContainer>
        <StyledVerticalContainer>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              width: "776px",
            }}
          >
            <img
              style={{ height: "48px", width: "48px", verticalAlign: "center" }}
              src="https://gumlet.assettype.com/quintype-website/2019-11/97f7cf02-0e7d-446a-943f-7acd485043f7/metype.svg?w=768&dpr=1.0"
            ></img>
            <StyledHeader
              style={{ display: "inline-block", verticalAlign: "center" }}
              weight={700}
              fontSize={30}
              mleft="10px"
            >
              METYPE
            </StyledHeader>
          </div>
          <StyledHeader width={776} mleft="0px">
            Get people talking.
          </StyledHeader>
          <StyledText
            mleft="0px"
            fontSize={20}
            width={752}
            style={{ lineHeight: "1.7" }}
          >
            An audience engagement solution that inspires better conversations.
            Readers become followers. Involved audiences grow into communities.
          </StyledText>
          <StyledButtonContainer pleft="0px">
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Start Free Trial
            </StyledButton>
            <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">
              Watch Demo
            </StyledButton>
          </StyledButtonContainer>
          <div style={{ width: "1140px", display: "flex" }}>
            <img
              style={{ margin: "auto", width: "517px" }}
              src="https://gumlet.assettype.com/quintype-website/2020-01/05fdff3e-8f80-4562-ad5e-22ed629c98f3/Metype_01.svg?w=576&dpr=1.0"
            ></img>
          </div>
        </StyledVerticalContainer>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
          }}
        >
          <img
            style={{ height: "32px", width: "32px", verticalAlign: "center" }}
            src="https://gumlet.assettype.com/quintype-website/2019-11/97f7cf02-0e7d-446a-943f-7acd485043f7/metype.svg?w=768&dpr=1.0"
          ></img>
          <StyledHeader
            style={{ display: "inline-block", verticalAlign: "center" }}
            mobileweight={500}
            mobilefontSize={20}
            mmleft="10px"
          >
            METYPE
          </StyledHeader>
        </div>
        <StyledHeader mmtop={-20}>Get people talking.</StyledHeader>
        <StyledText mobilefontSize={16} mmtop={-10}>
          An audience engagement solution that inspires better conversations.
          Readers become followers. Involved audiences grow into communities.
        </StyledText>
        <StyledButtonContainer mmtop={5}>
          <StyledButton
            backgroundColor="rgb(68, 215, 182)"
            textColor="White"
            mright="10px"
          >
            Start Free Trial
          </StyledButton>
          <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">
            Watch Demo
          </StyledButton>
        </StyledButtonContainer>
        <img
          style={{ marginTop: "30px" }}
          src="https://gumlet.assettype.com/quintype-website/2020-01/05fdff3e-8f80-4562-ad5e-22ed629c98f3/Metype_01.svg?w=576&dpr=1.0"
        ></img>
      </StyledMobileContainer>

      {/* second section */}
      <StyledHorizontalContainer mtop={200}>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/e23fe513-c94b-4f90-94b5-f23b83f9b794/Metype_1.png?w=640&dpr=1.0"
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
            Audience Engagement
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            Host meaningful conversations that will seek to create a community
            that will ignite insights through different perspectives.
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Learn More
            </StyledButton>
          </StyledButtonContainer>
        </StyledVerticalContainer>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
        >
          Audience Engagement
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "10px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/e23fe513-c94b-4f90-94b5-f23b83f9b794/Metype_1.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          Host meaningful conversations that will seek to create a community
          that will ignite insights through different perspectives.
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Learn More
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* third section */}
      <StyledHorizontalContainer mtop={80}>
        <StyledVerticalContainer width={520} mleft="-50px">
          <StyledHeader width={406} fontSize={30}>
            AI-driven Moderation
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            Do not let the trolls free. Our AI driven moderation helps
            publishers moderate comments that are toxic.
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Learn More
            </StyledButton>
          </StyledButtonContainer>
        </StyledVerticalContainer>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/c4759269-fe35-40d1-bb54-386016081f34/Metype_2.png?w=640&dpr=1.0"
        ></img>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
        >
          AI-driven Moderation
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/c4759269-fe35-40d1-bb54-386016081f34/Metype_2.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          Do not let the trolls free. Our AI driven moderation helps publishers
          moderate comments that are toxic.
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Learn More
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>
      {/* fourth section */}
      <StyledHorizontalContainer mtop={80}>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/786e81da-f29e-48cc-bd4f-021ec82f6ccd/Metype_3.png?w=640&dpr=1.0"
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
            Customizable Configurations
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            Configure and customize metype widgets to suit your style of
            expression.
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Learn More
            </StyledButton>
          </StyledButtonContainer>
        </StyledVerticalContainer>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
        >
          Customizable Configurations
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/786e81da-f29e-48cc-bd4f-021ec82f6ccd/Metype_3.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          Configure and customize metype widgets to suit your style of
          expression.
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Learn More
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* fifth section */}
      <StyledHorizontalContainer width={946} mtop={80}>
        <StyledVerticalContainer width={444.61}>
          <StyledHeader fontSize={24} mleft="0px">
            Metype helps our team to engage with our young audience while
            ensuring high quality conversations through their toxicity meter.
          </StyledHeader>
          <StyledHeader fontSize={18} talign="right">
            Amarnath Govindarajan, Digital Head
          </StyledHeader>
          <img
            width={150}
            src="https://gumlet.assettype.com/quintype-website/2019-12/db2d7899-378b-4c89-aac3-f6b52163ea8c/swarajya_29.svg?w=480&dpr=1.0"
            style={{ marginLeft: "294.61px" }}
          ></img>
        </StyledVerticalContainer>
        <StyledVerticalContainer mleft="56.78px" width={444.61}>
          <StyledGreenHeader fontSize={18}>Single Sign-on</StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            Integrate with your own technology stack to for seamless
            authentication.
          </StyledText>
          <StyledGreenHeader fontSize={18} mtop={-40}>
            Add engagement widgets in a jiffy
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            Pick a widget, add the javascript code to your website and you are
            live!
          </StyledText>
          <StyledGreenHeader fontSize={18} mtop={-40}>
            You own your content
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            You have complete ownership of any content posted on your
            properties.
          </StyledText>
        </StyledVerticalContainer>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledText
          mobilefontSize={16}
          mtalign="center"
          mmleft="-10px"
          mmtop={80}
        >
          Metype helps our team to engage with our young audience while ensuring
          high quality conversations through their toxicity meter.
        </StyledText>
        <StyledHeader
          mobilefontSize={16}
          mtalign="center"
          mmleft="-10px"
          mmtop={10}
        >
          Amarnath Govindarajan, Digital Head
        </StyledHeader>
        <img
          src="https://gumlet.assettype.com/quintype-website/2019-12/db2d7899-378b-4c89-aac3-f6b52163ea8c/swarajya_29.svg?w=480&dpr=1.0"
          width={150}
          style={{ marginTop: "-30px", marginLeft: "75.5px" }}
        ></img>
        <StyledMobileContainer style={{ marginLeft: "-6px" }}>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={20}
            mobilewidth={327}
            mmleft="0px"
          >
            Single Sign-on
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            Integrate with your own technology stack to for seamless
            authentication.
          </StyledText>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={-30}
            mobilewidth={327}
            mmleft="0px"
          >
            Add engagement widgets in a jiffy
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            Pick a widget, add the javascript code to your website and you are
            live!
          </StyledText>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={-15}
            mobilewidth={327}
            mmleft="0px"
          >
            You own your content
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            You have complete ownership of any content posted on your
            properties.
          </StyledText>
        </StyledMobileContainer>
      </StyledMobileContainer>

      {/* sixth section */}
      <StyledVerticalContainer width={1092} style={{ margin: "auto" }}>
        <StyledHeader fontSize={30} talign="center" mtop={80} mleft="0px">
          Get started for free
        </StyledHeader>
        <StyledText
          talign="center"
          width={1140}
          style={{ margin: "auto" }}
          fontSize={18}
        >
          Metype can integrate with any front-end. Get started with your free
          account at metype.com
        </StyledText>

        <StyledButtonContainer
          style={{ display: "flex", width: "1140px", marginLeft: "-25px" }}
          pleft="0px"
          mtop={80}
          mbot={50}
        >
          <StyledButton
            backgroundColor="rgb(68, 215, 182)"
            textColor="White"
            mright="0px"
            style={{ margin: "auto" }}
          >
            Learn More
          </StyledButton>
        </StyledButtonContainer>
      </StyledVerticalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mtalign="center"
          mmleft="-6px"
          mmtop={50}
          mobileweight={500}
        >
          Get started for free
        </StyledHeader>
        <StyledText
          mtalign="center"
          mmleft="-6px"
          mmtop={-10}
          mobilefontSize={14}
        >
          Metype can integrate with any front-end. Get started with your free
          account at metype.com
        </StyledText>

        <StyledButtonContainer mmtop={-30} mmleft={-6} mmbot={50}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Learn More
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* seventh section */}

      {/* eigth section */}
      <StyledVerticalContainer
        width={1140}
        backColour="rgb(245,250,249)"
        style={{ margin: "0px auto 50px auto" }}
        pbot="50px"
      >
        <StyledHeader fontSize={30} talign="center" mtop={58} mleft="0px">
          FAQs
        </StyledHeader>
        <StyledHR />
        <div
          style={{
            width: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => (clearFaq(), setfaq1(!faq1))}
        >
          <StyledGreenHeader fontSize={20}>What is metype?</StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq1 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq1 ? "inline" : "none",
              marginTop: "-5px",
            }}
            fontSize={25}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          style={{
            margin: "auto",
            display: faq1 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Metype is an audience engagement solution for publishers who want to
          encourage meaningful conversations with their community through
          user-generated content. Metype integrates with popular CMS solutions
          through a Javascript embed and can integrate with third-party
          authentication tools using our Single Sign-On.
        </StyledText>
        <StyledHR />
        <div
          style={{
            width: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => (clearFaq(), setfaq2(!faq2))}
        >
          <StyledGreenHeader fontSize={20}>
            How much does it cost to use Metype?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq2 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq2 ? "inline" : "none",
              marginTop: "-5px",
            }}
            fontSize={25}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          style={{
            margin: "auto",
            display: faq2 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Metype is free to use for most sites ( like personal blogs,
          non-profits, education). You can use the paid version to remove ads
          from the widget or if the bandwidth is more than a million pageviews.
        </StyledText>
        <StyledHR />
        <div
          style={{
            width: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => (clearFaq(), setfaq3(!faq3))}
        >
          <StyledGreenHeader fontSize={20}>
            What platforms do you support?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq3 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq3 ? "inline" : "none",
              marginTop: "-5px",
            }}
            fontSize={25}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          style={{
            margin: "auto",
            display: faq3 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Metype supports a variety of platforms. Check out our installation
          process for WordPress, Blogger with more along the way!
        </StyledText>
        <StyledHR />
        <div
          style={{
            width: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => (clearFaq(), setfaq4(!faq4))}
        >
          <StyledGreenHeader fontSize={20}>
            What will happen to the existing comments on my site?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq4 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq4 ? "inline" : "none",
              marginTop: "-5px",
            }}
            fontSize={25}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          style={{
            margin: "auto",
            display: faq4 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          You can opt to migrate your comments at an additional cost.
        </StyledText>
        <StyledHR />
        <div
          style={{
            width: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => (clearFaq(), setfaq5(!faq5))}
        >
          <StyledGreenHeader fontSize={20}>
            Do Metype comments stop Spam?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq5 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq5 ? "inline" : "none",
              marginTop: "-5px",
            }}
            fontSize={25}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          style={{
            margin: "auto",
            display: faq5 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Yes, our AI engine will recognize negative keywords you would like to
          avoid on your website and push those comments for review.
        </StyledText>
        <StyledHR />
        <div
          style={{
            width: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => (clearFaq(), setfaq6(!faq6))}
        >
          <StyledGreenHeader fontSize={20}>
            Are comments available on pages as well as in posts?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq6 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq6 ? "inline" : "none",
              marginTop: "-5px",
            }}
            fontSize={25}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          style={{
            margin: "auto",
            display: faq6 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Yes, you can add Metype to any pages and posts as well.
        </StyledText>
        <StyledHR />
        <div
          style={{
            width: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => (clearFaq(), setfaq7(!faq7))}
        >
          <StyledGreenHeader fontSize={20}>
            Do you offer single-sign-on (SSO)?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq7 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq7 ? "inline" : "none",
              marginTop: "-5px",
            }}
            fontSize={25}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          style={{
            margin: "auto",
            display: faq7 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Single Sign-On (SSO) is currently available to users with metype.
        </StyledText>
        <StyledHR />
        <div
          style={{
            width: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => (clearFaq(), setfaq8(!faq8))}
        >
          <StyledGreenHeader fontSize={20}>
            Will my comments be indexable by google?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq8 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq8 ? "inline" : "none",
              marginTop: "-5px",
            }}
            fontSize={25}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          style={{
            margin: "auto",
            display: faq8 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Yes, Your comments will be indexed by Google.
        </StyledText>
        <StyledHR />
        <div
          style={{
            width: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => (clearFaq(), setfaq9(!faq9))}
        >
          <StyledGreenHeader fontSize={20}>
            What effect does Metype have on my site’s performance?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq9 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq9 ? "inline" : "none",
              marginTop: "-5px",
            }}
            fontSize={25}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          style={{
            margin: "auto",
            display: faq9 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Metype loads asynchronously, so it won’t affect the rest of your page
          performance. For more detail, please see our help doc about page load
          performance.
        </StyledText>
      </StyledVerticalContainer>

      <StyledMobileContainer
        mbackColour="#F4FAF9"
        style={{ marginBottom: "50px" }}
        mpbot="50px"
      >
        <StyledHeader
          mtalign="center"
          mobilefontSize={20}
          mmtop={20}
          mmleft="-10px"
        >
          FAQs
        </StyledHeader>
        <StyledHR style={{ marginTop: "-30px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq1(!faq1))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            What is metype?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="145px"
            style={{ display: !faq1 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="145px"
            style={{ display: faq1 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq1 ? "block" : "none" }}
        >
          Metype is an audience engagement solution for publishers who want to
          encourage meaningful conversations with their community through
          user-generated content. Metype integrates with popular CMS solutions
          through a Javascript embed and can integrate with third-party
          authentication tools using our Single Sign-On.
        </StyledText>
        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq2(!faq2))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            How much does it cost to use Metype?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="220px"
            style={{ display: !faq2 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="220px"
            style={{ display: faq2 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq2 ? "block" : "none" }}
        >
          Metype is free to use for most sites ( like personal blogs,
          non-profits, education). You can use the paid version to remove ads
          from the widget or if the bandwidth is more than a million pageviews.
        </StyledText>
        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq3(!faq3))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            What platforms do you support?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="2px"
            style={{ display: !faq3 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="2px"
            style={{ display: faq3 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq3 ? "block" : "none", marginBottom: "35px" }}
        >
          Metype supports a variety of platforms. Check out our installation
          process for WordPress, Blogger with more along the way!
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq4(!faq4))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            What will happen to the existing comments on my site?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="97px"
            style={{ display: !faq4 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="97px"
            style={{ display: faq4 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq4 ? "block" : "none" }}
        >
          You can opt to migrate your comments at an additional cost.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq5(!faq5))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            Do Metype comments stop Spam?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="-4px"
            style={{ display: !faq5 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="-4px"
            style={{ display: faq5 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq5 ? "block" : "none" }}
        >
          Yes, our AI engine will recognize negative keywords you would like to
          avoid on your website and push those comments for review.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq6(!faq6))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            Are comments available on pages as well as in posts?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="130px"
            style={{ display: !faq6 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="130px"
            style={{ display: faq6 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq6 ? "block" : "none", marginBottom: "35px" }}
        >
          Yes, you can add Metype to any pages and posts as well.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq7(!faq7))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            Do you offer single-sign-on (SSO)?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="-2px"
            style={{ display: !faq7 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="-2px"
            style={{ display: faq7 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq7 ? "block" : "none", marginBottom: "-60px" }}
        >
          Single Sign-On (SSO) is currently available to users with metype.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq8(!faq8))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            Will my comments be indexable by google?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="225px"
            style={{ display: !faq8 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="225px"
            style={{ display: faq8 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq8 ? "block" : "none", marginBottom: "25px" }}
        >
          Yes, Your comments will be indexed by Google.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq9(!faq9))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            What resources or training do you offer?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="245px"
            style={{ display: !faq9 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={24}
            mmleft="245px"
            style={{ display: faq9 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq9 ? "block" : "none", marginBottom: "-30px" }}
        >
          Metype loads asynchronously, so it won’t affect the rest of your page
          performance. For more detail, please see our help doc about page load
          performance45        </StyledText>
      </StyledMobileContainer>
    </>
  );
}
export default Metype;
