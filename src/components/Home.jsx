import React from "react";
import "../css/App.css";
import StyledMainContainer from '../styled components/MainContainer';
import StyledHeader from '../styled components/Header';
import StyledImg from '../styled components/Image';
import StyledText from '../styled components/Text';
import StyledButtonContainer from "../styled components/ButtonContainer";
import StyledButton from "../styled components/StyledButton";
import StyledSmallContainer from "../styled components/SmallContainer";

function Home() {

    return (<>
        <StyledMainContainer>
            
        <StyledHeader>Let the Content Renaissance begin.</StyledHeader>
        <StyledImg src="https://gumlet.assettype.com/quintype-website/2020-01/5d475a7c-bd81-440e-91f8-642df85dbfa9/artboard_1_copy_7.svg?w=330&dpr=2.0"></StyledImg>
        <StyledText>Enough fighting with your CMS. Quintype provides a complete suite of digital publishing solutions that are powerful, easy to use and dependable.</StyledText>
        <StyledButtonContainer>
                <StyledButton backgroundColor="rgb(68, 215, 182)" textColor="White">Start Free Trial</StyledButton>
                <StyledButton backgroundColor="white" textColor="rgb(68, 215, 182)">Watch Demo</StyledButton>
        </StyledButtonContainer>
    </StyledMainContainer>
    <StyledSmallContainer>
            <StyledImg mtop="-50px"mleft="100px" width="450px" mobileWidth="287px" src="https://gumlet.assettype.com/quintype-website/2020-01/d08a5e7e-c13e-4192-b917-bba44efb4ca5/figuring_tech.svg?w=576&dpr=1.0"></StyledImg>
            <StyledHeader weight={500} mobilefontSize={18} mobileWidth={287} width={501} fontSize={22}>How can you start a renaissance if you are too caught up figuring tech?</StyledHeader>
            <StyledText mtop={ -40 } mobilefontSize={15} mobileWidth={287} width={501} fontSize={19}>Quintype gives you the freedom to publish, distribute and monetize content sans the tech hiccups. We have a suite of products to take care of every tiny detail. Unleash the power of your content on our platform.</StyledText>
    </StyledSmallContainer>
    </>        
    )
}

export default Home;