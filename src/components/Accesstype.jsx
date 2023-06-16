import StyledHorizontalContainer from "../styled components/HorizontalContainer";
import StyledVerticalContainer from "../styled components/VerticalContainer";
import StyledHeader from "../styled components/Header";
import StyledText from "../styled components/Text";
import StyledButtonContainer from "../styled components/ButtonContainer";
import StyledButton from "../styled components/StyledButton";
import StyledMobileContainer from "../styled components/mobileContainer";
import StyledGreenHeader from "../styled components/GreenHeader";

function Acesstype() {
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
              src="https://gumlet.assettype.com/quintype-website/2019-11/96390937-5b53-44b0-9ecc-5353241e885e/group_14.svg?w=768&dpr=1.0"
            ></img>
            <StyledHeader
              style={{ display: "inline-block", verticalAlign: "center" }}
              weight={700}
              fontSize={30}
              mleft="10px"
            >
              ACCESSTYPE
            </StyledHeader>
          </div>
          <StyledHeader width={776} mleft="0px">
            Robust content monetization platform.
          </StyledHeader>
          <StyledText
            mleft="0px"
            fontSize={20}
            width={752}
            style={{ lineHeight: "1.7" }}
          >
            Still chasing the pennies-per-click model? Generate predictable
            reader revenue with Accesstype - An intelligent subscription
            management platform to tap into the hidden strength of
            subscriptions.
          </StyledText>
          <StyledButtonContainer pleft="0px">
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Learn more
            </StyledButton>
            <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">
              Watch Video
            </StyledButton>
          </StyledButtonContainer>
          <div style={{ width: "1140px", display: "flex" }}>
            <img
              style={{ margin: "auto", width: "517px" }}
              src="https://gumlet.assettype.com/quintype-website/2019-12/238e2d96-57eb-4ce0-a0e1-4937f3e06354/Accesstype.svg?w=576&dpr=1.0"
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
            src="https://gumlet.assettype.com/quintype-website/2019-11/96390937-5b53-44b0-9ecc-5353241e885e/group_14.svg?w=768&dpr=1.0"
          ></img>
          <StyledHeader
            style={{ display: "inline-block", verticalAlign: "center" }}
            mobileweight={500}
            mobilefontSize={20}
            mmleft="10px"
          >
            ACCESSTYPE
          </StyledHeader>
        </div>
        <StyledHeader mmtop={-20}>
          Robust content monetization platform.
        </StyledHeader>
        <StyledText mobilefontSize={16} mmtop={60}>
          Still chasing the pennies-per-click model? Generate predictable reader
          revenue with Accesstype - An intelligent subscription management
          platform to tap into the hidden strength of subscriptions.
        </StyledText>
        <StyledButtonContainer mmtop={45}>
          <StyledButton
            backgroundColor="rgb(68, 215, 182)"
            textColor="White"
            mright="10px"
          >
            Learn More
          </StyledButton>
          <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">
            Watch Video
          </StyledButton>
        </StyledButtonContainer>
        <img
          style={{ marginTop: "30px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/238e2d96-57eb-4ce0-a0e1-4937f3e06354/Accesstype.svg?w=576&dpr=1.0"
        ></img>
      </StyledMobileContainer>

      {/* second section */}
      <StyledHorizontalContainer mtop={200}>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/a84091cb-e34c-4d8f-ae59-32af0ed63dfe/Paywall_White.png?w=640&dpr=1.0"
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
            Metered access
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            Metered access ensures your content entices new subscribers. Easy to
            setup access levels right from the editor on Bold CMS makes it easy
            to configure metered access to your readers.
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Lean More
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
          Metered access
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "10px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/a84091cb-e34c-4d8f-ae59-32af0ed63dfe/Paywall_White.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          Metered access ensures your content entices new subscribers. Easy to
          setup access levels right from the editor on Bold CMS makes it easy to
          configure metered access to your readers.
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Learn more
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* third section */}
      <StyledHorizontalContainer mtop={80}>
        <StyledVerticalContainer width={520} mleft="-50px">
          <StyledHeader width={406} fontSize={30}>
            Intuitive reporting and flexible integrations
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            View, filter and export your subscriber information, debug
            transactions with attempt logs and more. Integrates quickly with
            your existing tech stack with REST APIs.
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
          src="https://gumlet.assettype.com/quintype-website/2019-12/6a0fb7c7-2f3d-4709-8798-3ab682ae4f5b/Atype_Screenshot_Report.png?w=640&dpr=1.0"
        ></img>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
        >
          Intuitive reporting and flexible integrations
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/6a0fb7c7-2f3d-4709-8798-3ab682ae4f5b/Atype_Screenshot_Report.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          View, filter and export your subscriber information, debug
          transactions with attempt logs and more. Integrates quickly with your
          existing tech stack with REST APIs.
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
          src="https://gumlet.assettype.com/quintype-website/2019-12/dd0e4b29-025c-49e6-b8fc-41af1234fed3/Atype__Integration_25.png?w=640&dpr=1.0"
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
            Quick integrations and transparent fee structure
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            Accesstype can integrate with most popular CMS systems in the market
            today and comes with a transparent fee starting at $99.
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
          Quick integrations and transparent fee structure
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/dd0e4b29-025c-49e6-b8fc-41af1234fed3/Atype__Integration_25.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          Accesstype can integrate with most popular CMS systems in the market
          today and comes with a transparent fee starting at $99.
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
            Monetization in our business is constantly evolving and Accesstype
            helped us experiment with multiple subscription models to find the
            right balance. We would recommend Accesstype for anyone looking to
            monetize their content beyond advertising.
          </StyledHeader>
          <StyledHeader fontSize={18} talign="right">
            - Ankit Dikshit, Digital Marketing
          </StyledHeader>
          <img
            width={150}
            src="https://gumlet.assettype.com/quintype-website/2019-12/3163b395-6987-4d61-8c7f-9fb0ff4c2229/Client_14.png?w=480&dpr=1.0"
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
            Save money on every transaction
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            Pay a transparent flat fee based on volume, not percentages on every
            subscription.
          </StyledText>
          <StyledGreenHeader fontSize={18} mtop={-40}>
            Multi-language and Multi-currency ready
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            Take your monetization strategy across the globe. Accept local
            curency. In your language.
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
          Monetization in our business is constantly evolving and Accesstype
          helped us experiment with multiple subscription models to find the
          right balance. We would recommend Accesstype for anyone looking to
          monetize their content beyond advertising.
        </StyledText>
        <StyledHeader
          mobilefontSize={16}
          mtalign="center"
          mmleft="-10px"
          mmtop={20}
        >
          - Ankit Dikshit, Digital Marketing
        </StyledHeader>
        <img
          src="https://gumlet.assettype.com/quintype-website/2019-12/3163b395-6987-4d61-8c7f-9fb0ff4c2229/Client_14.png?w=480&dpr=1.0"
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
            Save money on every transaction
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            Pay a transparent flat fee based on volume, not percentages on every
            subscription.
          </StyledText>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={-15}
            mobilewidth={327}
            mmleft="0px"
          >
            Multi-language and Multi-currency ready
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={20}>
            Take your monetization strategy across the globe. Accept local
            curency. In your language.
          </StyledText>
        </StyledMobileContainer>
      </StyledMobileContainer>
    </>
  );
}
export default Acesstype;
