import StyledHorizontalContainer from "../styled components/HorizontalContainer";
import StyledVerticalContainer from "../styled components/VerticalContainer";
import StyledHeader from "../styled components/Header";
import StyledText from "../styled components/Text";
import StyledButton from "../styled components/StyledButton";
import StyledButtonContainer from "../styled components/ButtonContainer";
import StyledMobileContainer from "../styled components/mobileContainer";
import "../css/Demo.css";

function Demo() {
  return (
    <>
      <StyledHorizontalContainer style={{ marginTop: "80px" }}>
        <StyledVerticalContainer width={534}>
          <StyledHeader style={{ margin: "auto" }} fontSize={48}>
            Stop wrestling with technology
          </StyledHeader>
          <StyledText
            style={{ margin: "20px 0px 0px 0px" }}
            fontSize={20.12}
            width={534}
          >
            Create, manage, distribute and monetize content better. Our
            solutions for digital publishing have helped media organizations
            like yours do more with less. Schedule a demo of our platform and
            learn how you can:
          </StyledText>
          <StyledText
            fontSize={20.12}
            width={534}
            style={{ margin: "20px 0px 0px 0px" }}
          >
            <ul style={{ color: "rgb(68, 215, 182)" }}>
              <li>
                <label style={{ color: "black" }}> Manage content better</label>
              </li>
              <br></br>
              <li>
                <label style={{ color: "black" }}>
                  {" "}
                  Increase editorial efficiency
                </label>
              </li>
              <br />
              <li>
                <label style={{ color: "black" }}>
                  {" "}
                  Reduce technology costs
                </label>
              </li>
              <br />
              <li>
                <label style={{ color: "black" }}>
                  {" "}
                  Increase content reach
                </label>
              </li>
              <br />
              <li>
                <label style={{ color: "black" }}>
                  {" "}
                  Explore reader revenue strategies
                </label>
              </li>
              <br />
              <li>
                <label style={{ color: "black" }}>
                  {" "}
                  Improve audience engagement
                </label>
              </li>
            </ul>
          </StyledText>
        </StyledVerticalContainer>
        <div className="formDemo">
          <StyledVerticalContainer style={{ width: "393px " }}>
            <StyledHeader
              fontSize={19}
              style={{ marginLeft: "0px", width: "393px" }}
            >
              Full Name
            </StyledHeader>
            <input
              style={{
                width: "407px",
                height: "18.09px",
                padding: "14px",
                border: "1px solid rgb(227, 227, 227)",
                borderRadius: "3px",
                color: "rgb(52, 62, 60)",
                marginBottom: "24px",
              }}
            ></input>
            <StyledHeader
              fontSize={19}
              style={{ marginLeft: "0px", width: "393px" }}
            >
              Business Email
            </StyledHeader>
            <input
              style={{
                width: "407px",
                height: "18.09px",
                padding: "14px",
                border: "1px solid rgb(227, 227, 227)",
                borderRadius: "3px",
                color: "rgb(52, 62, 60)",
                marginBottom: "24px",
              }}
            ></input>
            <StyledHeader
              fontSize={19}
              style={{ marginLeft: "0px", width: "393px" }}
            >
              Phone Number
            </StyledHeader>
            <input
              style={{
                width: "407px",
                height: "18.09px",
                padding: "14px",
                border: "1px solid rgb(227, 227, 227)",
                borderRadius: "3px",
                color: "rgb(52, 62, 60)",
                marginBottom: "24px",
              }}
              type="number"
            ></input>
            <StyledHeader
              fontSize={19}
              style={{ marginLeft: "0px", width: "393px" }}
            >
              Company Name
            </StyledHeader>
            <input
              style={{
                width: "407px",
                height: "18.09px",
                padding: "14px",
                border: "1px solid rgb(227, 227, 227)",
                borderRadius: "3px",
                color: "rgb(52, 62, 60)",
                marginBottom: "24px",
              }}
            ></input>
            <StyledHeader
              fontSize={19}
              style={{ marginLeft: "0px", width: "393px" }}
            >
              Pageviews
            </StyledHeader>
            <select
              style={{
                width: "435px",
                height: "46.09px",
                padding: "14px",
                border: "1px solid rgb(227, 227, 227)",
                borderRadius: "3px",
                color: "rgb(52, 62, 60)",
                marginBottom: "24px",
              }}
            >
              <option>Less than 5 million</option>
              <option>5-10 million</option>
              <option>1-25 million</option>
              <option>25-50 million</option>
              <option>50+ million</option>
            </select>
            <StyledHeader
              fontSize={19}
              style={{ marginLeft: "0px", width: "393px" }}
            >
              Current CMS
            </StyledHeader>
            <input
              style={{
                width: "407px",
                height: "18.09px",
                padding: "14px",
                border: "1px solid rgb(227, 227, 227)",
                borderRadius: "3px",
                color: "rgb(52, 62, 60)",
                marginBottom: "24px",
              }}
            ></input>
            <StyledHeader
              fontSize={19}
              style={{ marginLeft: "0px", width: "393px" }}
            >
              How close are you to making your decision
            </StyledHeader>
            <select
              style={{
                width: "435px",
                height: "46.09px",
                padding: "14px",
                border: "1px solid rgb(227, 227, 227)",
                borderRadius: "3px",
                color: "rgb(52, 62, 60)",
                marginBottom: "24px",
              }}
            >
              <option>Exploring CMS options</option>
              <option>Looking For a demo</option>
              <option>Ready to Switch</option>
            </select>
            <StyledHeader
              fontSize={19}
              style={{ marginLeft: "0px", width: "393px" }}
            >
              Message
            </StyledHeader>
            <textarea
              style={{
                width: "407px",
                padding: "14px",
                border: "1px solid rgb(227, 227, 227)",
                borderRadius: "3px",
                color: "rgb(52, 62, 60)",
                marginBottom: "24px",
              }}
              rows={10}
              cols={10}
            ></textarea>

            <StyledButtonContainer
              pleft="0px"
              style={{ display: "flex", width: "427px" }}
            >
              <StyledButton
                backgroundColor="rgb(68, 215, 182)"
                textColor="White"
                style={{ margin: "20px auto" }}
              >
                Schedule Demo
              </StyledButton>
            </StyledButtonContainer>
          </StyledVerticalContainer>
        </div>
      </StyledHorizontalContainer>

      <StyledMobileContainer>
        <StyledHeader mmtop={50} mobilefontSize={26}>
          Stop wrestling with technology
        </StyledHeader>
        <StyledText mmtop={20} mobilefontSize={16.8}>
          Create, manage, distribute and monetize content better. Our solutions
          for digital publishing have helped media organizations like yours do
          more with less. Schedule a demo of our platform and learn how you can:
        </StyledText>
        <StyledText
          mmtop={50}
          mobilefontSize={16.8}
          style={{ paddingBottom: "130px" }}
        >
          <ul style={{ color: "rgb(68, 215, 182)" }}>
            <li>
              <label style={{ color: "black" }}> Manage content better</label>
            </li>
            <br></br>
            <li>
              <label style={{ color: "black" }}>
                {" "}
                Increase editorial efficiency
              </label>
            </li>
            <br />
            <li>
              <label style={{ color: "black" }}> Reduce technology costs</label>
            </li>
            <br />
            <li>
              <label style={{ color: "black" }}> Increase content reach</label>
            </li>
            <br />
            <li>
              <label style={{ color: "black" }}>
                {" "}
                Explore reader revenue strategies
              </label>
            </li>
            <br />
            <li>
              <label style={{ color: "black" }}>
                {" "}
                Improve audience engagement
              </label>
            </li>
          </ul>
        </StyledText>
        <div className="formDemo" style={{ width: "279px", margin: "auto" }}>
          <StyledHeader
            mobilefontSize={18}
            style={{ marginLeft: "0px", width: "279px" }}
          >
            Full Name
          </StyledHeader>
          <input
            style={{
              width: "251px",
              height: "18.09px",
              padding: "14px",
              border: "1px solid rgb(227, 227, 227)",
              borderRadius: "3px",
              color: "rgb(52, 62, 60)",
              marginBottom: "24px",
              marginTop: "20px",
            }}
          ></input>
          <StyledHeader
            mobilefontSize={18}
            style={{ marginLeft: "0px", width: "279px" }}
          >
            Business Email
          </StyledHeader>
          <input
            style={{
              width: "251px",
              height: "18.09px",
              padding: "14px",
              border: "1px solid rgb(227, 227, 227)",
              borderRadius: "3px",
              color: "rgb(52, 62, 60)",
              marginBottom: "24px",
              marginTop: "20px",
            }}
          ></input>
          <StyledHeader
            mobilefontSize={18}
            style={{ marginLeft: "0px", width: "279px" }}
          >
            Phone Number
          </StyledHeader>
          <input
            style={{
              width: "251px",
              height: "18.09px",
              padding: "14px",
              border: "1px solid rgb(227, 227, 227)",
              borderRadius: "3px",
              color: "rgb(52, 62, 60)",
              marginBottom: "24px",
              marginTop: "20px",
            }}
            type="number"
          ></input>
          <StyledHeader
            mobilefontSize={19}
            style={{ marginLeft: "0px", width: "279px" }}
          >
            Company Name
          </StyledHeader>
          <input
            style={{
              width: "251px",
              height: "18.09px",
              padding: "14px",
              border: "1px solid rgb(227, 227, 227)",
              borderRadius: "3px",
              color: "rgb(52, 62, 60)",
              marginBottom: "24px",
              marginTop: "20px",
            }}
          ></input>
          <StyledHeader
            mobilefontSize={18}
            style={{ marginLeft: "0px", width: "279px" }}
          >
            Pageviews
          </StyledHeader>
          <select
            style={{
              width: "279px",
              height: "46.09px",
              padding: "14px",
              border: "1px solid rgb(227, 227, 227)",
              borderRadius: "3px",
              color: "rgb(52, 62, 60)",
              marginBottom: "24px",
              marginTop: "20px",
            }}
          >
            <option>Less than 5 million</option>
            <option>5-10 million</option>
            <option>1-25 million</option>
            <option>25-50 million</option>
            <option>50+ million</option>
          </select>
          <StyledHeader
            mobilefontSize={18}
            style={{ marginLeft: "0px", width: "279px" }}
          >
            Current CMS
          </StyledHeader>
          <input
            style={{
              width: "251px",
              height: "18.09px",
              padding: "14px",
              border: "1px solid rgb(227, 227, 227)",
              borderRadius: "3px",
              color: "rgb(52, 62, 60)",
              marginBottom: "24px",
              marginTop: "20px",
            }}
          ></input>
          <StyledHeader
            mobilefontSize={18}
            style={{ marginLeft: "0px", width: "279px" }}
          >
            How close are you to making your decision
          </StyledHeader>
          <select
            style={{
              width: "279px",
              height: "46.09px",
              padding: "14px",
              border: "1px solid rgb(227, 227, 227)",
              borderRadius: "3px",
              color: "rgb(52, 62, 60)",
              marginBottom: "24px",
              marginTop: "20px",
            }}
          >
            <option>Exploring CMS options</option>
            <option>Looking For a demo</option>
            <option>Ready to Switch</option>
          </select>
          <StyledHeader
            mobilefontSize={18}
            style={{ marginLeft: "0px", width: "279px" }}
          >
            Message
          </StyledHeader>
          <textarea
            style={{
              width: "251px",
              padding: "14px",
              border: "1px solid rgb(227, 227, 227)",
              borderRadius: "3px",
              color: "rgb(52, 62, 60)",
              marginBottom: "24px",
              marginTop: "20px",
            }}
            rows={10}
            cols={10}
          ></textarea>

          <StyledButtonContainer
            pleft="0px"
            style={{ display: "flex", width: "279px" }}
          >
            <StyledButton
              backgroundColor="rgb(68, 215, 182)"
              textColor="White"
              style={{ margin: "20px auto" }}
            >
              Submit
            </StyledButton>
          </StyledButtonContainer>
        </div>
      </StyledMobileContainer>
    </>
  );
}
export default Demo;
