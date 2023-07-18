import React from "react";
import Turnout from "./njturnout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.colorPickerRef = React.createRef();
  }
  componentDidMount = () => {
    var ctx =
      this.colorPickerRef &&
      this.colorPickerRef.current &&
      this.colorPickerRef.current.getContext("2d");
    if (ctx) {
      ctx.lineTo(100, 0);
      ctx.lineTo(100, 100);
      ctx.lineTo(0, 100);
      ctx.fillStyle = "rgb(150,100,200)";
      ctx.fill();
    }
  };
  render() {
    const space = " ";
    return (
      <div
        style={{
          fontFamily: "'Pacifico', sans-serif",
          maxWidth: "600px",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <canvas ref={this.colorPickerRef} height="100%" width="100px"></canvas>
        <div
          style={{
            position: "relative",
            width: "calc(100% - 60px)",
            maxWidth: "300px"
          }}
        >
          <img
            style={{
              border: "25px solid rgb(170,120,220)",
              borderBottom: "70px solid rgb(170,120,220)",
              width: "100%"
            }}
            alt="Nick Carducci portrait"
            src="https://www.dropbox.com/scl/fi/xpju5ywam09gpomqkqxkh/portrait_Carducci.jpg?rlkey=qsi2213tnf6eadilxkbaoe7gh&raw=1"
          />
          <div
            style={{
              fontSize: "15px",
              textAlign: "right",
              left: "50px",
              bottom: "20px",
              position: "absolute",
              backgroundColor: "rgb(170,120,220)",
              color: "white"
            }}
          >
            <a
              style={{
                color: "white"
              }}
              href="https://change.org/nickcarducci"
            >
              Sign the petition
            </a>
            {space}Bankruptcy is Fraud
            <br />
            <a
              style={{
                color: "white"
              }}
              href="https://account.venmo.com/u/truncatedwholesaletax"
            >
              Donate today
            </a>
          </div>
        </div>
        Nicholas Carducci is running for Senate. He’s earned a political science
        bachelor degree JHU with an economics minor in 2015. He is a product
        manager for thumbprint.us Social Calendar.
        <br />
        <br />
        <span>
          He supports regulating monopolies, not prices. We will have to pay
          back Social Security to in a lifetime because{space}
          <a
            href="https://www.quora.com/unanswered/Should-we-pay-back-social-security-in-a-lifetime-starting-now-and-end-income-taxes-for-a-flat-or-truncated-progressive-tax"
            style={{ color: "black" }}
          >
            that’s how it’s taken in
          </a>
          . Force landlords to sell and doctors to oath private practice
          sutures, obstetrics, and transplants for free.
        </span>
        <br />
        He aspires to deflate the economy and retire low unemployment forever
        with technology and fiscal policy to cut out compound interest in order
        to make balancing the budget at most an annual deficit.
        <br />
        <br />
        <span>
          He is starting Saver Party for resource conservation. Our{space}
          <a href="https://2024nj.com/oil" style={{ color: "black" }}>
            public lands, resources
          </a>
          , and reserves would be depositary for dollars, so we will not
          default.
        </span>
        <br />
        He says we will likely win because 65% supported Occupy Wall Street;
        that's 95% among non-voters.
        {/*Do you prefer a truncated progressive tax to a flat tax? Savings in
        public parks of UT, WY, NM lands, resources, and reserves.*/}
        <Turnout
          lastWidth={Math.min(600, this.props.width)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <div
          style={{
            height: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            fontSize: "15px",
            textAlign: "right",
            left: "50px",
            bottom: "20px",
            backgroundColor: "black",
            color: "white"
          }}
        >
          <img
            src="https://www.dropbox.com/s/8yxi9s12uwgz6lv/thumbprint_starter.png?raw=1"
            style={{
              width: "30px"
            }}
            alt="thumbprint logo"
          />
          <a
            style={{
              color: "white"
            }}
            href="https://bankingisnot.biz"
          >
            Bankingisnot.Biz
          </a>
        </div>
      </div>
    );
  }
}
export default App;
