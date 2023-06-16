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

function Ahead() {
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
              src="https://gumlet.assettype.com/quintype-website/2019-11/761d8dcd-eca2-4fef-8282-03fd714cb1cf/ahead.svg?w=768&dpr=1.0"
            ></img>
            <StyledHeader
              style={{ display: "inline-block", verticalAlign: "center" }}
              weight={700}
              fontSize={30}
              mleft="10px"
            >
              AHEAD
            </StyledHeader>
          </div>
          <StyledHeader width={776} mleft="0px">
          Powerful presentation for your powerful content.
          </StyledHeader>
          <StyledText
            mleft="0px"
            fontSize={20}
            width={752}
            style={{ lineHeight: "1.7" }}
          >
            Get a powerful presentation for your powerful content. Focus on your content strategy and not be constrained by technology. Ahead is a complete package for growing content-first publishers.
          </StyledText>
          <StyledButtonContainer pleft="0px">
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Start Free Trial
            </StyledButton>
          </StyledButtonContainer>
          <div style={{ width: "1140px", display: "flex" }}>
            <img
              style={{ margin: "auto", width: "517px" }}
              src="https://gumlet.assettype.com/quintype-website/2020-01/bf382eb1-12df-4cf4-b450-e097122ed608/Ahead_06.svg?w=576&dpr=1.0"
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
            src="https://gumlet.assettype.com/quintype-website/2019-11/761d8dcd-eca2-4fef-8282-03fd714cb1cf/ahead.svg?w=768&dpr=1.0"
          ></img>
          <StyledHeader
            style={{ display: "inline-block", verticalAlign: "center" }}
            mobileweight={500}
            mobilefontSize={20}
            mmleft="10px"
          >
            AHEAD
          </StyledHeader>
        </div>
        <StyledHeader mmtop={-20}>
        Powerful presentation for your powerful content.
        </StyledHeader>
        <StyledText mobilefontSize={16} mmtop={60}>
        Get a powerful presentation for your powerful content. Focus on your content strategy and not be constrained by technology. Ahead is a complete package for growing content-first publishers.
        </StyledText>
        <StyledButtonContainer mmtop={45}>
          <StyledButton
            backgroundColor="rgb(68, 215, 182)"
            textColor="White"
          >
            Start Free Trial
          </StyledButton>
        </StyledButtonContainer>
        <img
          style={{ marginTop: "30px" }}
          src="https://gumlet.assettype.com/quintype-website/2020-01/bf382eb1-12df-4cf4-b450-e097122ed608/Ahead_06.svg?w=576&dpr=1.0"
        ></img>
      </StyledMobileContainer>

      {/* second section */}
      <StyledHorizontalContainer mtop={200}>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/ff430d9b-f695-4500-b58e-f633221ca9d4/Ahead_2.png?w=640&dpr=1.0"
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
          Tell your stories better, or create a news website
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
          Engage your audience with our growing list of story formats. Perfect for long, short or visual stories.
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Start Free Trial
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
          Tell your stories better, or create a news website
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "10px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/ff430d9b-f695-4500-b58e-f633221ca9d4/Ahead_2.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
        Engage your audience with our growing list of story formats. Perfect for long, short or visual stories.
        </StyledText>
        
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Start Free Trial
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* third section */}
      <StyledHorizontalContainer mtop={80}>
        <StyledVerticalContainer width={520} mleft="-50px">
          <StyledHeader width={406} fontSize={30}>
          Customizable page builder
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
          Experiment and discover your brand with our row based design system that gives you the flexibility to choose, alter and order your home page.
          </StyledText>
          
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Start Free Trial
            </StyledButton>
          </StyledButtonContainer>
        </StyledVerticalContainer>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/031ea97e-c95f-4d59-b232-a53b553eb5cd/Ahead_1.png?w=640&dpr=1.0"
        ></img>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
        >
          Customizable page builder
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/031ea97e-c95f-4d59-b232-a53b553eb5cd/Ahead_1.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
        Experiment and discover your brand with our row based design system that gives you the flexibility to choose, alter and order your home page.
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Start Free Trial
          </StyledButton>
        </StyledButtonContainer>
          </StyledMobileContainer>
          
      {/* fourth section */}
      <StyledHorizontalContainer mtop={80}>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/92220f14-76de-4d80-adf7-eae1a6cac736/Ahead_3.png?w=640&dpr=1.0"
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
          Integrate with your tech stack
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
          Connects with industry standard analytics, data measurement and maketing tools for accurate data collection and audience engagement.
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Start Free Trial
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
          Integrate with your tech stack
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/92220f14-76de-4d80-adf7-eae1a6cac736/Ahead_3.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
        Connects with industry standard analytics, data measurement and maketing tools for accurate data collection and audience engagement.
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Start Free Trial
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* fifth section */}
      <StyledHorizontalContainer mtop={80}>
        <StyledVerticalContainer width={520} mleft="-50px">
          <StyledHeader width={406} fontSize={30}>
          Monetize your content
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
          Monetize quickly through popular ad networks, subscriptions or donations with our built-in support for Accesstype
          </StyledText>
          
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Start Free Trial
            </StyledButton>
          </StyledButtonContainer>
        </StyledVerticalContainer>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/a238a459-8ba2-4b21-ac28-c342b148476b/PB_and_AT.png?w=640&dpr=1.0"
        ></img>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
        >
          Monetize your content
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/a238a459-8ba2-4b21-ac28-c342b148476b/PB_and_AT.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
        Monetize quickly through popular ad networks, subscriptions or donations with our built-in support for Accesstype
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Start Free Trial
          </StyledButton>
        </StyledButtonContainer>
          </StyledMobileContainer>

      {/* sixth section */}
      

      {/* seventh section */}
      <StyledHorizontalContainer width={946} mtop={80}>
        <StyledVerticalContainer width={444.61}>
          <StyledHeader fontSize={24} mleft="0px">
          “Quintype's minimalistic and easy-to-use UI/UX for visitors is a big plus point. The backend is easy to use and has been specifically designed keeping content publishers in mind.”
          </StyledHeader>
          <StyledHeader fontSize={18} talign="right">
          Shruty Bhattacharyya, Digital Manager
          </StyledHeader>
          <img
            width={150}
            src="https://images.assettype.com/quintype-website/2020-03/6967c460-24ec-45eb-8f87-b2ab7577fced/East_Mojo_Logo_01.svg"
            style={{ marginLeft: "294.61px" }}
          ></img>
        </StyledVerticalContainer>
        <StyledVerticalContainer mleft="56.78px" width={444.61}>
          <StyledGreenHeader fontSize={18}>
          Fully Managed Service
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
          Updates, security, backups are all taken care of on your behalf.
          </StyledText>
          <StyledGreenHeader fontSize={18} mtop={-40}>
          Future proof
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
          Our team regularly updates layouts, features and integrations that will keep your website way ahead of the pack.
          </StyledText>
          <StyledGreenHeader fontSize={18} mtop={-40}>
          Migrate Effortlessly
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
          Your data is safe and smoothly transferred to Bold with our advanced migration engine.
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
          “Quintype's minimalistic and easy-to-use UI/UX for visitors is a big plus point. The backend is easy to use and has been specifically designed keeping content publishers in mind.”
        </StyledText>
        <StyledHeader
          mobilefontSize={16}
          mtalign="center"
          mmleft="-10px"
          mmtop={10}
        >
          Shruty Bhattacharyya, Digital Manager
        </StyledHeader>
        <img
          src="https://images.assettype.com/quintype-website/2020-03/6967c460-24ec-45eb-8f87-b2ab7577fced/East_Mojo_Logo_01.svg"
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
            Fully Managed Service
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
          Updates, security, backups are all taken care of on your behalf.
          </StyledText>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={-30}
            mobilewidth={327}
            mmleft="0px"
          >
            Future proof
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
          Our team regularly updates layouts, features and integrations that will keep your website way ahead of the pack.
          </StyledText>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={-15}
            mobilewidth={327}
            mmleft="0px"
          >
            Migrate Effortlessly
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
          Your data is safe and smoothly transferred to Bold with our advanced migration engine.
          </StyledText>
        </StyledMobileContainer>
      </StyledMobileContainer>

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
          <StyledGreenHeader fontSize={20}>
          What is Ahead?
          </StyledGreenHeader>
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
          Ahead is the front-end framework for our Bold CMS which provides powerful presentation for your powerful content. Growing digital publishers often grapple with technology and tech is often a hurdle than an enabler. Ahead makes it easy for digital publishers to build their own riveting online presence with a customizable pagebuilder.
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
          <StyledGreenHeader fontSize={20}>What is Page Builder?</StyledGreenHeader>
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
          Page Builder is a layer on top of Ahead that allows publishers to experiment with different layouts and visual styles with a no-code interface. The page builder layouts are light on Javascript and built with best practices in web performance.
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
          What is the difference b/w Ahead and Page Builder?
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
          Ahead is the front end framework for our Bold CMS that provides a powerful presentation for your powerful content. Page Builder is built on Ahead and helps you customize your front end with row based design systems with no-code.
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
          How long does it take to build a website with a Ahead and Page Builder?

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
          New websites can go live within 2 weeks.
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
          Do I need a page builder for Bold CMS?
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
          Not required, if you have a strong web development team, you can build a custom front-end. This solution is most useful for small to medium sized content creators.
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
          Does page builder work on any cms?
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
          No, The pagebuilder is most compatible with Bold CMS at the moment.
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
          Is page builder independent of Bold CMS?
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
          No, Page Builder and Bold CMS are cohesive to each other as Bold is a headless CMS and Pagebuilder works on top of the CMS as a-head to the CMS. Pagebuilder allows you to customize the website layout and add widgets, ad slots or stories based on your preference.
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
          Who should use page builder? / Should I use a page builder?
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
          Page builder is perfect for business owners, bloggers, publishers, designers, and basically everyone else who wants to customize their website design without any coding knowledge.
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
          How much does it cost?
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
          Pagebuilder and Ahead comes along with the Bold CMS and pricing starts at $100
        </StyledText>
        
      </StyledVerticalContainer>
      <StyledMobileContainer
        mbackColour="#F4FAF9"
        style={{ marginBottom: "50px" }}
        mpbot="50px"
      >
        <StyledHeader mtalign="center" mobilefontSize={20} mmtop={20} mmleft="-10px">
          FAQs
        </StyledHeader>
        <StyledHR style={{ marginTop: "-30px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq1(!faq1))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
          What is Ahead?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="150px"
            style={{ display: !faq1 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="150px"
            style={{ display: faq1 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
                  mmleft="3px"
          style={{ display: faq1 ? "block" : "none",marginBottom:"20px" }}
        >
          Ahead is the front-end framework for our Bold CMS which provides powerful presentation for your powerful content. Growing digital publishers often grapple with technology and tech is often a hurdle than an enabler. Ahead makes it easy for digital publishers to build their own riveting online presence with a customizable pagebuilder.
        </StyledText>
        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq2(!faq2))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
          What is Page Builder?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="94px"
            style={{ display: !faq2 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="94px"
            style={{ display: faq2 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq2 ? "block" : "none" ,marginBottom:"-10px" }}
        >
          Page Builder is a layer on top of Ahead that allows publishers to experiment with different layouts and visual styles with a no-code interface. The page builder layouts are light on Javascript and built with best practices in web performance.
        </StyledText>
        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq3(!faq3))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
          What is the difference b/w Ahead and Page Builder?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="130px"
            style={{ display: !faq3 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="130px"
            style={{ display: faq3 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq3 ? "block" : "none", marginBottom: "0px" }}
        >
          Ahead is the front end framework for our Bold CMS that provides a powerful presentation for your powerful content. Page Builder is built on Ahead and helps you customize your front end with row based design systems with no-code.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq4(!faq4))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
          How long does it take to build a website with a Ahead and Page Builder?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="217px"
            style={{ display: !faq4 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="217px"
            style={{ display: faq4 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq4 ? "block" : "none",marginBottom:"-70px"  }}
        >
          New websites can go live within 2 weeks.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq5(!faq5))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
          Do I need a page builder for Bold CMS?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="240px"
            style={{ display: !faq5 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="240px"
            style={{ display: faq5 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq5 ? "block" : "none" ,marginBottom:"-20px" }}
        >
          Not required, if you have a strong web development team, you can build a custom front-end. This solution is most useful for small to medium sized content creators.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq6(!faq6))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
          Does page builder work on any cms?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="245px"
            style={{ display: !faq6 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="245px"
            style={{ display: faq6 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq6 ? "block" : "none", marginBottom: "-70px" }}
        >
          No, The pagebuilder is most compatible with Bold CMS at the moment.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq7(!faq7))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
          Is page builder independent of Bold CMS?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="240px"
            style={{ display: !faq7 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="240px"
            style={{ display: faq7 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq7 ? "block" : "none", marginBottom: "-0px" }}
        >
          No, Page Builder and Bold CMS are cohesive to each other as Bold is a headless CMS and Pagebuilder works on top of the CMS as a-head to the CMS. Pagebuilder allows you to customize the website layout and add widgets, ad slots or stories based on your preference.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq8(!faq8))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
          Who should use page builder? / Should I use a page builder?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="38px"
            style={{ display: !faq8 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="38px"
            style={{ display: faq8 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq8 ? "block" : "none", marginBottom: "-20px" }}
        >
          Page builder is perfect for business owners, bloggers, publishers, designers, and basically everyone else who wants to customize their website design without any coding knowledge.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq9(!faq9))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
          How much does it cost?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="80px"
            style={{ display: !faq9 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={24}
            mmleft="80px"
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
          Pagebuilder and Ahead comes along with the Bold CMS and pricing starts at $100
        </StyledText>

        
      </StyledMobileContainer>
    </>
  );
}
export default Ahead;
