import StyledHorizontalContainer from "../styled components/HorizontalContainer";
import StyledVerticalContainer from "../styled components/VerticalContainer";
import StyledHeader from "../styled components/Header";
import StyledText from "../styled components/Text";
import StyledButtonContainer from "../styled components/ButtonContainer";
import StyledButton from "../styled components/StyledButton";
import StyledMobileContainer from "../styled components/mobileContainer";
import StyledIdleCard from "../styled components/IdleCards";
import StyledGreenHeader from "../styled components/GreenHeader";

function Content() {
  return (
    <>
      {/* first section */}
      <StyledHorizontalContainer>
        <StyledVerticalContainer>
          <StyledHeader width={776} mleft="0px">
            Content driven Mobile Apps for digital publishers
          </StyledHeader>
          <StyledText
            mleft="0px"
            fontSize={20}
            width={752}
            style={{ lineHeight: "1.7" }}
          >
            Our native apps for iOS and Android provide easy configuration, with
            seamless integration with our Bold CMS. Launch your own content app
            starting at $500/mo.
          </StyledText>
          <StyledButtonContainer pleft="0px">
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Schedule Demo
            </StyledButton>
            <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">
              Start Free Trial
            </StyledButton>
          </StyledButtonContainer>
          <div style={{ width: "1140px", display: "flex" }}>
            <img
              style={{ margin: "auto", width: "517px" }}
              src="https://images.assettype.com/quintype-website/2020-12/aabf48f1-4f9c-40d2-9f32-242b40bb7639/Accesstype_14.png"
            ></img>
          </div>
        </StyledVerticalContainer>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader mmtop={20}>
          Content driven Mobile Apps for digital publishers
        </StyledHeader>
        <StyledText mobilefontSize={16} mmtop={60}>
          Our native apps for iOS and Android provide easy configuration, with
          seamless integration with our Bold CMS. Launch your own content app
          starting at $500/mo.
        </StyledText>
        <StyledButtonContainer mmtop={45}>
          <StyledButton
            backgroundColor="rgb(68, 215, 182)"
            textColor="White"
            mright="10px"
          >
            Schedule Demo
          </StyledButton>
          <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">
            Start Free Trial
          </StyledButton>
        </StyledButtonContainer>
        <img
          style={{ marginTop: "30px" }}
          src="https://images.assettype.com/quintype-website/2020-12/aabf48f1-4f9c-40d2-9f32-242b40bb7639/Accesstype_14.png"
        ></img>
      </StyledMobileContainer>

      {/* second section */}
      <StyledHorizontalContainer mtop={200}>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/8e5422bd-4ded-48a2-b75c-0cdb2fc67192/BOLD_Story_Preview.png?w=640&dpr=1.0"
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
            Launch your native mobile app with Bold CMS
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            Save yourself the time and trust our team to take your digital
            publication to the mobile-first audience. Sync content to your
            website and mobile app from a single CMS. Plug and play with zero
            maintenance and no tech overhead.
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Schedule Demo
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
          Launch your native mobile app with Bold CMS
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "10px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/8e5422bd-4ded-48a2-b75c-0cdb2fc67192/BOLD_Story_Preview.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          Save yourself the time and trust our team to take your digital
          publication to the mobile-first audience. Sync content to your website
          and mobile app from a single CMS. Plug and play with zero maintenance
          and no tech overhead.
        </StyledText>

        <StyledButtonContainer mmtop={0}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Schedule Demo
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* third section */}
      <StyledHorizontalContainer mtop={80}>
        <StyledVerticalContainer width={520} mleft="-50px">
          <StyledHeader width={406} fontSize={30}>
            Audience engagement taken a click closer
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            For those who work around the clock to reach audiences across the
            globe, here’s an easy solution to launching a react native mobile
            app. With superior user experience, connect with your audience at an
            integral level.
            <ul>
              <li>Push notifications</li>
              <li>Live Video Streaming</li>
              <li>
                Quick - Like, lighting quick. Because we know you value your
                audience
              </li>
              <li>
                Single sign on - For a seamless experience, enable user login
                with your own tech stack.
              </li>
              <li>FCM Integration</li>
              <li>Multiple advertisement slots flexibility</li>
            </ul>
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Schedule Demo
            </StyledButton>
          </StyledButtonContainer>
        </StyledVerticalContainer>
        <img
          style={{ width: "480px", height: "659px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/93e5a55f-c516-4867-a92c-06b518d7bca5/Push_Notification.png?w=640&dpr=1.0"
        ></img>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
        >
          Audience engagement taken a click closer
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/93e5a55f-c516-4867-a92c-06b518d7bca5/Push_Notification.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          For those who work around the clock to reach audiences across the
          globe, here’s an easy solution to launching a react native mobile app.
          With superior user experience, connect with your audience at an
          integral level.
        </StyledText>
        <StyledText>
          <ul>
            <li>Push notifications</li>
            <li>Live Video Streaming</li>
            <li>
              Quick - Like, lighting quick. Because we know you value your
              audience
            </li>
            <li>
              Single sign on - For a seamless experience, enable user login with
              your own tech stack.
            </li>
            <li>FCM Integration</li>
            <li>Multiple advertisement slots flexibility</li>
          </ul>
        </StyledText>
        <StyledButtonContainer mmtop={170}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Schedule Demo
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* fourth section */}
      <StyledHorizontalContainer mtop={80}>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/c77616d8-be7f-4240-8771-44ccb93bb931/Ahead.png?w=640&dpr=1.0"
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
            Revenue Generation tailored for you
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            <ul>
              <li>
                Ad integration - get sponsored content and advertisements across
                your app.
              </li>
              <li>
                Subscriptions/paywalls - Setting up a paywall has never been
                easier, configure metered, soft or hard paywalls!
              </li>
              <li>
                Smooth web experience with our Bold CMS, specifically made for
                today’s digital publishers.
              </li>
            </ul>
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Schedule Demo
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
          Revenue Generation tailored for you
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/c77616d8-be7f-4240-8771-44ccb93bb931/Ahead.png?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          <ul>
            <li>
              Ad integration - get sponsored content and advertisements across
              your app.
            </li>
            <li>
              Subscriptions/paywalls - Setting up a paywall has never been
              easier, configure metered, soft or hard paywalls!
            </li>
            <li>
              Smooth web experience with our Bold CMS, specifically made for
              today’s digital publishers.
            </li>
          </ul>
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Schedule Demo
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* third section */}
      <StyledHorizontalContainer mtop={80}>
        <StyledVerticalContainer width={520} mleft="-50px">
          <StyledHeader width={406} fontSize={30}>
            Cost Benefits to suit all publishers
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            Our pre-built framework helps you save time and money in building
            your own content app.
            <ul>
              <li>
                Affordable - No more extra bills on hiring tech teams or regular
                maintenance checks
              </li>
              <li>
                Zero maintenance - native mobile app development can be a
                cumbersome task for publishers, with quintype, you can leave
                your worries to the experts.
              </li>
            </ul>
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              Schedule Demo
            </StyledButton>
          </StyledButtonContainer>
        </StyledVerticalContainer>
        <img
          style={{ width: "627px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/238e2d96-57eb-4ce0-a0e1-4937f3e06354/Accesstype.svg?w=640&dpr=1.0"
        ></img>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
        >
          Cost Benefits to suit all publishers
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2019-12/238e2d96-57eb-4ce0-a0e1-4937f3e06354/Accesstype.svg?w=640&dpr=1.0"
        ></img>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          Our pre-built framework helps you save time and money in building your
          own content app.
        </StyledText>
        <StyledText>
          <ul>
            <li>
              Affordable - No more extra bills on hiring tech teams or regular
              maintenance checks
            </li>
            <li>
              Zero maintenance - native mobile app development can be a
              cumbersome task for publishers, with quintype, you can leave your
              worries to the experts.
            </li>
          </ul>
        </StyledText>
        <StyledButtonContainer mmtop={170}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            Schedule Demo
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* fifth section */}
      <StyledHorizontalContainer>
        <StyledVerticalContainer
          style={{ margin: "auto", display: "flex", alignItems: "center" }}
        >
          <StyledHeader
            fontSize={30}
            width={823}
            talign="center"
            mleft="0px"
            mtop={150}
          >
            Other Highlights
          </StyledHeader>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2020-12/f0907322-bec7-44ed-9384-99777058cf98/Feature_Icons_1.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader
                style={{ margin: "0px auto 10px auto", textAlign: "center" }}
              >
                High up time
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                99.73% uptime so you don't subject your users to app crash!
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2020-12/fc7c0828-56d1-4866-8275-78cf7b2e474a/Feature_Icons_2.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader
                style={{ margin: "0px auto 10px auto", textAlign: "center" }}
              >
                In-app Purchases for android
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                Get your users easy transactions
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2020-12/eaf21f19-4988-4595-9e87-f8d22c601970/Feature_Icons_3.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader
                style={{ margin: "0px auto 10px auto", textAlign: "center" }}
              >
                Frequently updated apps
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                Don’t bother keeping up with the updates, we’ve got you covered
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2020-12/df05a5ad-20a0-4af6-8f78-5ed1d056f7f7/Feature_Icons_4.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader
                style={{ margin: "0px auto 10px auto", textAlign: "center" }}
              >
                User Customizable font size
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                To suit every single reader
              </StyledText>
            </StyledIdleCard>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
            }}
          >
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2020-12/a543d067-38a1-4c4c-bb81-230d6065a2b8/Feature_Icons_5.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                Understand your audience
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                Google analytics support
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2020-12/e9b9e480-ed65-41b4-9336-408a7c59c789/Feature_Icons_6.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                Read later
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                Bookmarking for offline access
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://images.assettype.com/quintype-website/2020-12/8813e2ed-3496-44ec-b790-8d7e55257706/Feature_Icons_7.svg"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                Dark Mode
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                For more screen time and to assist readability
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://images.assettype.com/quintype-website/2020-12/27d4069b-2728-4d40-bd63-140c497ff5de/Feature_Icons_8.svg"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 1px auto" }}>
                Offline Mode
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                We understand netizens and their need to go off the radar every
                once in a while. Coming Soon.
              </StyledText>
            </StyledIdleCard>
          </div>
        </StyledVerticalContainer>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobileWidth={343}
          mobilefontSize={20}
          mtalign="center"
          mmleft="-15px"
          mmtop={80}
        >
          Other Highlights
        </StyledHeader>
        <StyledIdleCard style={{ marginTop: "30px" }}>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2020-12/f0907322-bec7-44ed-9384-99777058cf98/Feature_Icons_1.svg?w=300&dpr=1.0"
          ></img>
          <StyledGreenHeader>High up time</StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            99.73% uptime so you don't subject your users to app crash!
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2020-12/fc7c0828-56d1-4866-8275-78cf7b2e474a/Feature_Icons_2.svg?w=300&dpr=1.0"
          ></img>
          <StyledGreenHeader>In-app Purchases for android</StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            Get your users easy transactions
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2020-12/eaf21f19-4988-4595-9e87-f8d22c601970/Feature_Icons_3.svg?w=300&dpr=1.0"
          ></img>
          <StyledGreenHeader>Frequently updated apps</StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            Don’t bother keeping up with the updates, we’ve got you covered.
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2020-12/df05a5ad-20a0-4af6-8f78-5ed1d056f7f7/Feature_Icons_4.svg?w=300&dpr=1.0"
          ></img>
          <StyledGreenHeader>User Customizable font size</StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            To suit every single reader
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2020-12/a543d067-38a1-4c4c-bb81-230d6065a2b8/Feature_Icons_5.svg?w=300&dpr=1.0"
          ></img>
          <StyledGreenHeader>Understand your audience</StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            Google analytics support
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2020-12/e9b9e480-ed65-41b4-9336-408a7c59c789/Feature_Icons_6.svg?w=300&dpr=1.0"
          ></img>
          <StyledGreenHeader>Read later</StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            Bookmarking for offline access
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://images.assettype.com/quintype-website/2020-12/8813e2ed-3496-44ec-b790-8d7e55257706/Feature_Icons_7.svg"
          ></img>
          <StyledGreenHeader>Dark Mode</StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            For more screen time and to assist readability
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://images.assettype.com/quintype-website/2020-12/27d4069b-2728-4d40-bd63-140c497ff5de/Feature_Icons_8.svg"
          ></img>
          <StyledGreenHeader>Offline Mode</StyledGreenHeader>
          <StyledText
            style={{
              gridRow: "2",
              gridColumn: "2",
              marginLeft: "20px",
              marginTop: "-10px",
            }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            We understand netizens and their need to go off the radar every once
            in a while. Coming Soon.
          </StyledText>
        </StyledIdleCard>
      </StyledMobileContainer>

      {/* seventh section */}
      <StyledHorizontalContainer width={946} mtop={80}>
        <StyledVerticalContainer width={444.61}>
          <StyledHeader fontSize={24} mleft="0px">
            “We used the headless CMS to launch our digital platform in 2016.
            From CMS to paywall solutions, Quintype manages the full tech stack
            for us. The platform is easy to use and customize for our
            requirements.”
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
          <StyledGreenHeader fontSize={18}>
            Fully Managed SaaS CMS
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            Updates, automations, backups are all taken care of on your behalf.
          </StyledText>
          <StyledGreenHeader fontSize={18} mtop={-40}>
            API-first Headless CMS
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            Our well documented REST APIs provides you with total control on the
            front-end.
          </StyledText>
          <StyledGreenHeader fontSize={18} mtop={-40}>
            Secure Enterprise Cloud
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            Complete with DDoS protection, SSL, caching and auto-scaling
            infrastructure.
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
          “We used the headless CMS to launch our digital platform in 2016. From
          CMS to paywall solutions, Quintype manages the full tech stack for us.
          The platform is easy to use and customize for our requirements.”
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
            Fully Managed SaaS CMS
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            Updates, automations, backups are all taken care of on your behalf.
          </StyledText>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={-30}
            mobilewidth={327}
            mmleft="0px"
          >
            API-first Headless CMS
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            Our well documented REST APIs provides you with total control on the
            front-end.
          </StyledText>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={-15}
            mobilewidth={327}
            mmleft="0px"
          >
            Secure Enterprise Cloud
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            Complete with DDoS protection, SSL, caching and auto-scaling
            infrastructure.
          </StyledText>
        </StyledMobileContainer>
      </StyledMobileContainer>
    </>
  );
}
export default Content;
