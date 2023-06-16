import StyledHorizontalContainer from "../styled components/HorizontalContainer";
import StyledVerticalContainer from "../styled components/VerticalContainer";
import StyledHeader from "../styled components/Header";
import StyledText from "../styled components/Text";
import StyledButtonContainer from "../styled components/ButtonContainer";
import StyledButton from "../styled components/StyledButton";
import StyledMobileContainer from "../styled components/mobileContainer";
import StyledIdleCard from "../styled components/IdleCards";
import StyledGreenHeader from "../styled components/GreenHeader";
import StyledHR from "../styled components/HR";
import { useState } from "react";
import jsonData from "../data/Bold.json";

function Bold() {
  const [faq1, setfaq1] = useState(false);
  const [faq2, setfaq2] = useState(false);
  const [faq3, setfaq3] = useState(false);
  const [faq4, setfaq4] = useState(false);
  const [faq5, setfaq5] = useState(false);
  const [faq6, setfaq6] = useState(false);
  const [faq7, setfaq7] = useState(false);
  const [faq8, setfaq8] = useState(false);
  const [faq9, setfaq9] = useState(false);
  const [faq10, setfaq10] = useState(false);
  const [faq11, setfaq11] = useState(false);

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
    setfaq10(false);
    setfaq11(false);
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
              src={jsonData.Section1.Heroimage1}
            ></img>
            <StyledHeader
              style={{ display: "inline-block", verticalAlign: "center" }}
              weight={700}
              fontSize={30}
              mleft="10px"
            >
              {jsonData.Section1.Header1}
            </StyledHeader>
          </div>
          <StyledHeader width={776} mleft="0px">
            {jsonData.Section1.Header2}
          </StyledHeader>
          <StyledText
            mleft="0px"
            fontSize={20}
            width={752}
            style={{ lineHeight: "1.7" }}
          >
            {jsonData.Section1.Subheader1}
          </StyledText>
          <StyledButtonContainer pleft="0px">
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              {jsonData.Section1.Button1}
            </StyledButton>
            <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">
              {jsonData.Section1.Button2}
            </StyledButton>
          </StyledButtonContainer>
          <div style={{ width: "1140px", display: "flex" }}>
            <img
              style={{ margin: "auto", width: "517px" }}
              src={jsonData.Section1.Heroimage2}
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
            src={jsonData.Section1.Heroimage1}
          ></img>
          <StyledHeader
            style={{ display: "inline-block", verticalAlign: "center" }}
            mobileweight={500}
            mobilefontSize={20}
            mmleft="10px"
          >
            {jsonData.Section1.Header1}
          </StyledHeader>
        </div>
        <StyledHeader mmtop={-20}>{jsonData.Section1.Header2}</StyledHeader>
        <StyledText mobilefontSize={16} mmtop={60}>
          {jsonData.Section1.Subheader1}
        </StyledText>
        <StyledButtonContainer mmtop={45}>
          <StyledButton
            backgroundColor="rgb(68, 215, 182)"
            textColor="White"
            mright="10px"
          >
            {jsonData.Section1.Button1}
          </StyledButton>
          <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">
            {jsonData.Section1.Button2}
          </StyledButton>
        </StyledButtonContainer>
        <img
          style={{ marginTop: "30px" }}
          src={jsonData.Section1.Heroimage2}
        ></img>
      </StyledMobileContainer>

      {/* second section */}
      <StyledHorizontalContainer mtop={200}>
        <img
          style={{ width: "627px" }}
          src={jsonData.Section2.arr[0].Heroimage1}
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
            {jsonData.Section2.arr[0].Header1}
          </StyledHeader>
          <StyledHeader width={406} fontSize={22}>
            {jsonData.Section2.arr[0].Header2}
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            {jsonData.Section2.arr[0].Subheader1}
          </StyledText>
          <StyledHeader width={406} fontSize={22} mtop={-20}>
            {jsonData.Section2.arr[0].Header3}
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            {jsonData.Section2.arr[0].Subheader2}
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              {jsonData.Section2.arr[0].Button1}
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
          {jsonData.Section2.arr[0].Header1}
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "10px" }}
          src={jsonData.Section2.arr[0].Heroimage1}
        ></img>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
          mobileHeight={28}
        >
          {jsonData.Section2.arr[0].Header2}
        </StyledHeader>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          {jsonData.Section2.arr[0].Subheader1}
        </StyledText>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={-20}
          mobileHeight={28}
        >
          {jsonData.Section2.arr[0].Header3}
        </StyledHeader>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          {jsonData.Section2.arr[0].Subheader2}
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            {jsonData.Section2.arr[0].Button1}
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* third section */}
      <StyledHorizontalContainer mtop={80}>
        <StyledVerticalContainer width={520} mleft="-50px">
          <StyledHeader width={406} fontSize={30}>
            {jsonData.Section2.arr[1].Header1}
          </StyledHeader>
          <StyledHeader width={406} fontSize={22}>
            {jsonData.Section2.arr[1].Header2}
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            {jsonData.Section2.arr[1].Subheader2}
          </StyledText>
          <StyledHeader width={406} fontSize={22} mtop={-20}>
            {jsonData.Section2.arr[1].Header3}
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            {jsonData.Section2.arr[1].Subheader2}
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              {jsonData.Section2.arr[1].Button1}
            </StyledButton>
          </StyledButtonContainer>
        </StyledVerticalContainer>
        <img
          style={{ width: "627px" }}
          src={jsonData.Section2.arr[1].Heroimage1}
        ></img>
      </StyledHorizontalContainer>
      <StyledMobileContainer>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
        >
          {jsonData.Section2.arr[1].Header1}
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src={jsonData.Section2.arr[1].Heroimage1}
        ></img>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
          mobileHeight={28}
        >
          {jsonData.Section2.arr[1].Header2}
        </StyledHeader>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          {jsonData.Section2.arr[1].Subheader1}
        </StyledText>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={-20}
          mobileHeight={28}
        >
          {jsonData.Section2.arr[1].Header3}
        </StyledHeader>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          {jsonData.Section2.arr[1].Subheader2}
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            {jsonData.Section2.arr[1].Button1}
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* fourth section */}
      <StyledHorizontalContainer mtop={80}>
        <img
          style={{ width: "627px" }}
          src={jsonData.Section2.arr[2].Heroimage1}
        ></img>
        <StyledVerticalContainer>
          <StyledHeader width={406} fontSize={30}>
            {jsonData.Section2.arr[2].Header1}
          </StyledHeader>
          <StyledHeader width={406} fontSize={22}>
            {jsonData.Section2.arr[2].Header2}
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            {jsonData.Section2.arr[2].Subheader1}
          </StyledText>
          <StyledHeader width={406} fontSize={22} mtop={-20}>
            {jsonData.Section2.arr[2].Header3}
          </StyledHeader>
          <StyledText width={406} fontSize={18} mtop={-5}>
            {jsonData.Section2.arr[2].Subheader2}
          </StyledText>
          <StyledButtonContainer>
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              mright="25px"
            >
              {jsonData.Section2.arr[2].Button1}
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
          {jsonData.Section2.arr[2].Header1}
        </StyledHeader>
        <img
          style={{ width: "327px", marginLeft: "-5px", marginTop: "0px" }}
          src="https://gumlet.assettype.com/quintype-website/2022-09/a54010e0-3958-4049-ba67-1c43d4e461d6/BOLD_Workspace.png?w=376&dpr=2.0"
        ></img>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={50}
          mobileHeight={28}
        >
          {jsonData.Section2.arr[2].Header2}
        </StyledHeader>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          {jsonData.Section2.arr[2].Subheader1}
        </StyledText>
        <StyledHeader
          mobilefontSize={20}
          mtalign="center"
          mmleft="-10px"
          mmtop={-20}
          mobileHeight={28}
        >
          {jsonData.Section2.arr[2].Header2}
        </StyledHeader>
        <StyledText mobilefontSize={14} mtalign="center" mmtop={20}>
          {jsonData.Section2.arr[2].Subheader2}
        </StyledText>
        <StyledButtonContainer mmtop={-30}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            {jsonData.Section2.arr[2].Button1}
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
            {jsonData.Section3.Header}
          </StyledHeader>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
          >
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2019-11/832eed88-f9cf-4f2c-877c-41699e9774fa/Media_Delivery.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                {jsonData.Section3.Cards[0].Title}
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                {jsonData.Section3.Cards[0].Text}
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2019-11/f39087ac-b251-439a-b6ea-f38b4576b9c7/Live_Blog.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                {jsonData.Section3.Cards[1].Title}
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                {jsonData.Section3.Cards[1].Text}
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2019-11/b1d4dff0-5abb-4079-949b-10585ba4ad95/Teams.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                {jsonData.Section3.Cards[2].Title}
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                {jsonData.Section3.Cards[2].Text}
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2019-11/aa7ad015-0eb6-46b6-be32-97c3507006cf/Geo_Tagging.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                {jsonData.Section3.Cards[3].Title}
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                {jsonData.Section3.Cards[3].Text}
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
                src="https://gumlet.assettype.com/quintype-website/2019-11/cec75a7c-6a11-471a-bfc0-44064224fc0e/Customizable_Workflow.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                {jsonData.Section3.Cards[4].Title}
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                {jsonData.Section3.Cards[4].Text}
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2019-11/6e5046ef-758a-41a1-8f81-864a6ca4bd8f/Efficient_Organization.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                {jsonData.Section3.Cards[5].Title}
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                {jsonData.Section3.Cards[5].Text}
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard style={{ marginRight: "20px" }}>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2019-11/38835c70-1f47-4e75-8da5-c656f6f6c5d1/SEO.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                {jsonData.Section3.Cards[6].Title}
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                {jsonData.Section3.Cards[6].Text}
              </StyledText>
            </StyledIdleCard>
            <StyledIdleCard>
              <img
                style={{ width: "65px", margin: "20px auto 10px auto" }}
                src="https://gumlet.assettype.com/quintype-website/2019-11/a3660218-3e72-4186-964c-38b5117e0132/Multilingual.svg?w=300&dpr=1.0"
              ></img>
              <StyledGreenHeader style={{ margin: "0px auto 10px auto" }}>
                {jsonData.Section3.Cards[7].Title}
              </StyledGreenHeader>
              <StyledText
                fontSize={15.2}
                width={202.8}
                mtop="0px"
                talign="center"
                mleft="0px"
              >
                {jsonData.Section3.Cards[7].Text}
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
          {jsonData.Section3.Header}
        </StyledHeader>
        <StyledIdleCard style={{ marginTop: "30px" }}>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2019-11/832eed88-f9cf-4f2c-877c-41699e9774fa/Media_Delivery.svg?w=300&dpr=1.0"
          ></img>
          <StyledGreenHeader>
            {jsonData.Section3.Cards[0].Title}
          </StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            {jsonData.Section3.Cards[0].Text}
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2019-11/f39087ac-b251-439a-b6ea-f38b4576b9c7/Live_Blog.svg?w=376&dpr=2.0"
          ></img>
          <StyledGreenHeader>
            {jsonData.Section3.Cards[1].Title}
          </StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            {jsonData.Section3.Cards[1].Text}
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2019-11/b1d4dff0-5abb-4079-949b-10585ba4ad95/Teams.svg?w=376&dpr=2.0"
          ></img>
          <StyledGreenHeader>
            {jsonData.Section3.Cards[2].Title}
          </StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            {jsonData.Section3.Cards[2].Text}
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2019-11/aa7ad015-0eb6-46b6-be32-97c3507006cf/Geo_Tagging.svg?w=376&dpr=2.0"
          ></img>
          <StyledGreenHeader>
            {jsonData.Section3.Cards[3].Title}
          </StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            {jsonData.Section3.Cards[3].Text}
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2019-11/cec75a7c-6a11-471a-bfc0-44064224fc0e/Customizable_Workflow.svg?w=376&dpr=2.0"
          ></img>
          <StyledGreenHeader>
            {jsonData.Section3.Cards[4].Title}
          </StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            {jsonData.Section3.Cards[4].Text}
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2019-11/6e5046ef-758a-41a1-8f81-864a6ca4bd8f/Efficient_Organization.svg?w=376&dpr=2.0"
          ></img>
          <StyledGreenHeader>
            {jsonData.Section3.Cards[5].Title}
          </StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            {jsonData.Section3.Cards[5].Text}
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2019-11/38835c70-1f47-4e75-8da5-c656f6f6c5d1/SEO.svg?w=376&dpr=2.0"
          ></img>
          <StyledGreenHeader>
            {jsonData.Section3.Cards[6].Title}
          </StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            {jsonData.Section3.Cards[6].Text}
          </StyledText>
        </StyledIdleCard>
        <StyledIdleCard>
          <img
            width={65}
            src="https://gumlet.assettype.com/quintype-website/2019-11/a3660218-3e72-4186-964c-38b5117e0132/Multilingual.svg?w=376&dpr=2.0"
          ></img>
          <StyledGreenHeader>
            {jsonData.Section3.Cards[7].Title}
          </StyledGreenHeader>
          <StyledText
            style={{ gridRow: "2", gridColumn: "2", marginLeft: "20px" }}
            mobilefontSize={16}
            mobileWidth={230}
          >
            {jsonData.Section3.Cards[7].Text}
          </StyledText>
        </StyledIdleCard>
      </StyledMobileContainer>

      {/* sixth section */}
      <StyledVerticalContainer width={1092} style={{ margin: "auto" }}>
        <StyledHeader fontSize={30} talign="center" mtop={80} mleft="0px">
          {jsonData.Section4.Heading}
        </StyledHeader>
        <StyledText
          talign="center"
          width={720}
          style={{ margin: "auto" }}
          fontSize={18}
        >
          {jsonData.Section4.Body}
        </StyledText>
        <StyledHorizontalContainer>
          <StyledVerticalContainer
            width={433.88}
            style={{ margin: "auto", marginTop: "80px" }}
          >
            <div style={{ display: "flex" }}>
              <img
                height={38}
                src="https://gumlet.assettype.com/quintype-website/2019-12/7f957131-ecf7-4fbd-b3a5-a07c04363f26/group_14.svg?w=50&dpr=1.0"
                style={{ display: "inline", verticalAlign: "center" }}
              ></img>
              <StyledGreenHeader
                fontSize={20}
                height={27}
                style={{
                  display: "inline",
                  verticalAlign: "center",
                  marginTop: "3px",
                  marginLeft: "10px",
                }}
              >
                {jsonData.Section4.Cat1}
              </StyledGreenHeader>
            </div>
            <StyledHeader
              fontSize={30}
              width={366.8}
              mleft="0px"
              weight="400"
              mtop="30px"
            >
              {jsonData.Section4.Cat1H}
            </StyledHeader>
            <ul style={{ marginLeft: "-20px", marginTop: "0px" }}>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat1A[0].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat1A[1].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat1A[2].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat1A[3].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat1A[4].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat1A[5].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat1A[6].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat1A[7].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat1A[8].point}
                </StyledText>
              </li>
            </ul>
          </StyledVerticalContainer>
          <StyledVerticalContainer
            width={433.88}
            style={{ margin: "auto", marginTop: "80px" }}
          >
            <div style={{ display: "flex" }}>
              <img
                height={38}
                src="https://gumlet.assettype.com/quintype-website/2019-12/c7dc9eba-1a06-43aa-ac70-c6e5608ae3cf/group_9.svg?w=50&dpr=1.0"
                style={{ display: "inline", verticalAlign: "center" }}
              ></img>
              <StyledGreenHeader
                fontSize={20}
                height={27}
                style={{
                  display: "inline",
                  verticalAlign: "center",
                  marginTop: "3px",
                  marginLeft: "10px",
                }}
              >
                {jsonData.Section4.Cat2}
              </StyledGreenHeader>
            </div>
            <StyledHeader
              fontSize={30}
              width={366.8}
              mleft="0px"
              weight="400"
              mtop="30px"
            >
              {jsonData.Section4.Cat2H}
            </StyledHeader>
            <ul style={{ marginLeft: "-20px", marginTop: "0px" }}>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[0].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[1].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[2].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[3].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[4].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[5].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[6].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[7].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[8].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[9].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[10].point}
                </StyledText>
              </li>
              <li>
                <StyledText mleft="0px">
                  {jsonData.Section4.Cat2A[11].point}
                </StyledText>
              </li>
            </ul>
          </StyledVerticalContainer>
        </StyledHorizontalContainer>
        <StyledButtonContainer
          style={{ display: "flex", width: "1140px", marginLeft: "-25px" }}
          pleft="0px"
          mtop={80}
        >
          <StyledButton
            backgroundColor="rgb(68, 215, 182)"
            textColor="White"
            mright="0px"
            style={{ margin: "auto" }}
          >
            {jsonData.Section4.Button}
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
          {jsonData.Section4.Heading}
        </StyledHeader>
        <StyledText
          mtalign="center"
          mmleft="-6px"
          mmtop={-10}
          mobilefontSize={14}
        >
          {jsonData.Section4.Body}
        </StyledText>
        <div style={{ display: "flex", marginLeft: "30px" }}>
          <img
            height={38}
            src="https://gumlet.assettype.com/quintype-website/2019-12/7f957131-ecf7-4fbd-b3a5-a07c04363f26/group_14.svg?w=50&dpr=1.0"
            style={{ display: "inline", verticalAlign: "center" }}
          ></img>
          <StyledGreenHeader
            fontSize={20}
            height={27}
            mobilefontSize={18}
            style={{
              display: "inline",
              verticalAlign: "center",
              marginTop: "4px",
              marginLeft: "10px",
            }}
          >
            {jsonData.Section4.Cat1}
          </StyledGreenHeader>
        </div>
        <StyledHeader
          mobilefontSize={24}
          mmleft="20px"
          mobileweight="500"
          mmtop={20}
        >
          {jsonData.Section4.Cat1H}
        </StyledHeader>
        <ul style={{ marginLeft: "0px", marginTop: "-20px" }}>
          <li>
            <StyledText mmleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat1A[0].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat1A[1].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat1A[2].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat1A[3].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat1A[4].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat1A[5].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat1A[6].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat1A[7].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat1A[8].point}
            </StyledText>
          </li>
        </ul>
        <div style={{ display: "flex", marginLeft: "30px", marginTop: "30px" }}>
          <img
            height={38}
            src="https://gumlet.assettype.com/quintype-website/2019-12/c7dc9eba-1a06-43aa-ac70-c6e5608ae3cf/group_9.svg?w=50&dpr=1.0"
            style={{ display: "inline", verticalAlign: "center" }}
          ></img>
          <StyledGreenHeader
            fontSize={20}
            height={27}
            mobilefontSize={18}
            style={{
              display: "inline",
              verticalAlign: "center",
              marginTop: "4px",
              marginLeft: "10px",
            }}
          >
            {jsonData.Section4.Cat2}
          </StyledGreenHeader>
        </div>
        <StyledHeader
          mobilefontSize={24}
          mmleft="20px"
          mobileweight="500"
          mmtop={20}
        >
          {jsonData.Section4.Cat2H}
        </StyledHeader>
        <ul style={{ marginLeft: "0px", marginTop: "-20px" }}>
          <li>
            <StyledText mmleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[0].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[1].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[2].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[3].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[4].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[5].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[6].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[7].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[8].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[9].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[10].point}
            </StyledText>
          </li>
          <li>
            <StyledText mleft="0px" mobilefontSize={18}>
              {jsonData.Section4.Cat2A[11].point}
            </StyledText>
          </li>
        </ul>
        <StyledButtonContainer mmtop={30} mmleft={-6}>
          <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">
            {jsonData.Section4.Button}
          </StyledButton>
        </StyledButtonContainer>
      </StyledMobileContainer>

      {/* seventh section */}
      <StyledHorizontalContainer width={946} mtop={80}>
        <StyledVerticalContainer width={444.61}>
          <StyledHeader fontSize={24} mleft="0px">
            {jsonData.Section5.Header1}
          </StyledHeader>
          <StyledHeader fontSize={18} talign="right">
            {jsonData.Section5.Writer}
          </StyledHeader>
          <img
            width={150}
            src={jsonData.Section5.Image}
            style={{ marginLeft: "294.61px" }}
          ></img>
        </StyledVerticalContainer>
        <StyledVerticalContainer mleft="56.78px" width={444.61}>
          <StyledGreenHeader fontSize={18}>
            {jsonData.Section5.Header2}
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            {jsonData.Section5.Text2}
          </StyledText>
          <StyledGreenHeader fontSize={18} mtop={-40}>
            {jsonData.Section5.Header3}
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            {jsonData.Section5.Text2}
          </StyledText>
          <StyledGreenHeader fontSize={18} mtop={-40}>
            {jsonData.Section5.Header4}
          </StyledGreenHeader>
          <StyledText fontSize={18} width={444.61} mleft="0px" mtop="10px">
            {jsonData.Section5.Text2}
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
          {jsonData.Section5.Header1}
        </StyledText>
        <StyledHeader
          mobilefontSize={16}
          mtalign="center"
          mmleft="-10px"
          mmtop={10}
        >
          {jsonData.Section5.Writer}
        </StyledHeader>
        <img
          src={jsonData.Section5.Image}
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
            {jsonData.Section5.Header2}
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            {jsonData.Section5.Text2}
          </StyledText>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={-30}
            mobilewidth={327}
            mmleft="0px"
          >
            {jsonData.Section5.Header3}
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            {jsonData.Section5.Text3}
          </StyledText>
          <StyledGreenHeader
            mobilefontSize={18}
            mtalign="center"
            mmtop={-15}
            mobilewidth={327}
            mmleft="0px"
          >
            {jsonData.Section5.Header4}
          </StyledGreenHeader>
          <StyledText mobilefontSize={18} mtalign="center" mmtop={10}>
            {jsonData.Section5.Text4}
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
            What is headless CMS
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
          A Headless CMS is a content repository that delivers content to any
          platform or device via API. The intended consumption of this content
          is by devices in a raw structured format, such as HTML or JSON, and
          isn't meant for human consumption until rendered on the end device.
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
          <StyledGreenHeader fontSize={20}>What is Bold CMS</StyledGreenHeader>
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
          Bold is a hosted, headless CMS SaaS application that empowers
          publishers to create, curate and distribute their content across
          modern devices and screens effortlessly through structured APIs using
          any technology stack.
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
            Is Bold CMS a website creation tool?
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
          If you are building a website you can use Bold to manage its content.
          Bold is a content management platform where you can update the content
          of your website, a mobile app or any other platform that displays
          content. We save you the time and hassle to create your own backend to
          manage the content, and it makes it easier to actually generate a
          website or app.
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
            How can I import my existing data into Bold CMS?
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
          We have migrated content from most common CMS like WP, Drupal, and
          Joomla. We also support migration from other custom CMS. We have a
          migrator app that automates the process of importing data from other
          CMS systems into Bold CMS.
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
            How secure is Bold CMS?
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
          Bold CMS is very secure guaranteeing a 99.5% uptime. All apps are
          dockerized and run on Kubernetes with auto scaling enabled to handle
          scale. Further all applications are behind CDN. We use Fastly and/or
          Cloudflare as our CDN providers.
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
            How are backups performed? What is the backup frequency?
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
          We have integrated a daily backup system with multi-zone replication,
          which means Amazon RDS automatically creates a primary DB Instance and
          synchronously replicates the data to a standby instance in a different
          Availability Zone (AZ). We also take manual backup of the data to
          another AWS account once a day.
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
            Control of content and apprehension for hosting?
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
          Content belongs to the publishers and Quintype does not own the
          content in any form.
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
            Do you provide ongoing technical support?
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
          We have 24X7 chat support available within the editor. We can help you
          with the features and functionalities of Bold CMS and our products.
          However, we do not provide technical support for the front end
          management. We have partnered with few technology services to help you
          with Front End management.
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
            What resources or training do you offer?
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
          Once you onboard, our team will have a live session on how to get
          going on our headless CMS. We also have help documentation available
          at the following link.
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
          onClick={() => (clearFaq(), setfaq10(!faq10))}
        >
          <StyledGreenHeader fontSize={20}>
            Are there custom pricing options available?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq10 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq10 ? "inline" : "none",
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
            display: faq10 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Yes, Custom pricing options are available for enterprise users and
          others.
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
          onClick={() => (clearFaq(), setfaq11(!faq11))}
        >
          <StyledGreenHeader fontSize={20}>
            Do you offer a free trial of all features?
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: !faq11 ? "inline" : "none",
            }}
            fontSize={20}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            style={{
              position: "absolute",
              right: "0",
              display: faq11 ? "inline" : "none",
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
            display: faq11 ? "block" : "none",
            marginBottom: "20px",
          }}
          fontSize={18.4}
        >
          Yes, We offer a 14-day free trial offer for you to access all our
          product features.
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
            What is headless CMS
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="100px"
            style={{ display: !faq1 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="100px"
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
          A Headless CMS is a content repository that delivers content to any
          platform or device via API. The intended consumption of this content
          is by devices in a raw structured format, such as HTML or JSON, and
          isn't meant for human consumption until rendered on the end device.
        </StyledText>
        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq2(!faq2))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            What is Bold CMS
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="135px"
            style={{ display: !faq2 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="135px"
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
          Bold is a hosted, headless CMS SaaS application that empowers
          publishers to create, curate and distribute their content across
          modern devices and screens effortlessly through structured APIs using
          any technology stack.
        </StyledText>
        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq3(!faq3))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            Is Bold CMS a website creation tool?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="252px"
            style={{ display: !faq3 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="252px"
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
          If you are building a website you can use Bold to manage its content.
          Bold is a content management platform where you can update the content
          of your website, a mobile app or any other platform that displays
          content. We save you the time and hassle to create your own backend to
          manage the content, and it makes it easier to actually generate a
          website or app.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq4(!faq4))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            How can I import my existing data into Bold CMS?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="160px"
            style={{ display: !faq4 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="160px"
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
          We have migrated content from most common CMS like WP, Drupal, and
          Joomla. We also support migration from other custom CMS. We have a
          migrator app that automates the process of importing data from other
          CMS systems into Bold CMS
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq5(!faq5))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            How secure is Bold CMS?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="70px"
            style={{ display: !faq5 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="70px"
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
          Bold CMS is very secure guaranteeing a 99.5% uptime. All apps are
          dockerized and run on Kubernetes with auto scaling enabled to handle
          scale. Further all applications are behind CDN. We use Fastly and/or
          Cloudflare as our CDN providers.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq6(!faq6))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            How are backups performed? What is the backup frequency?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="75px"
            style={{ display: !faq6 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="75px"
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
          We have integrated a daily backup system with multi-zone replication,
          which means Amazon RDS automatically creates a primary DB Instance and
          synchronously replicates the data to a standby instance in a different
          Availability Zone (AZ). We also take manual backup of the data to
          another AWS account once a day.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq7(!faq7))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            Control of content and apprehension for hosting?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="65px"
            style={{ display: !faq7 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="65px"
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
          Content belongs to the publishers and Quintype does not own the
          content in any form.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq8(!faq8))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            Do you provide ongoing technical support?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="220px"
            style={{ display: !faq8 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="220px"
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
          We have 24X7 chat support available within the editor. We can help you
          with the features and functionalities of Bold CMS and our products.
          However, we do not provide technical support for the front end
          management. We have partnered with few technology services to help you
          with Front End management.
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
          Once you onboard, our team will have a live session on how to get
          going on our headless CMS. We also have help documentation available
          at the following link.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq10(!faq10))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            Are there custom pricing options available?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="210px"
            style={{ display: !faq10 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="210px"
            style={{ display: faq10 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq10 ? "block" : "none", marginBottom: "-70px" }}
        >
          Yes, Custom pricing options are available for enterprise users and
          others.
        </StyledText>

        <StyledHR style={{ marginTop: "10px" }} />
        <div
          style={{ width: "325px" }}
          onClick={() => (clearFaq(), setfaq11(!faq11))}
        >
          <StyledGreenHeader mmleft="3px" mobilefontSize={19}>
            Do you offer a free trial of all features?
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="215px"
            style={{ display: !faq11 ? "inline" : "none" }}
          >
            +
          </StyledGreenHeader>
          <StyledGreenHeader
            mobilefontSize={19}
            mmleft="215px"
            style={{ display: faq11 ? "inline" : "none" }}
          >
            -
          </StyledGreenHeader>
        </div>
        <StyledText
          mobilefontSize={14.3}
          mmleft="3px"
          style={{ display: faq11 ? "block" : "none", marginBottom: "-70px" }}
        >
          Yes, We offer a 14-day free trial offer for you to access all our
          product features.
        </StyledText>
      </StyledMobileContainer>
    </>
  );
}
export default Bold;
