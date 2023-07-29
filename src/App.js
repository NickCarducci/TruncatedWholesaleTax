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
        <span>
          Nicholas Carducci is running for Senate. In order to run for office
          under the banner-slogan “Bankruptcy is Fraud”,{space}
          <i>
            Nick Carducci needs 750 more signatures! He would prefer to
            {space}
            <b>discharge</b>
            {space}student debt.
          </i>
        </span>
        <br />
        <i>
          Student debt is owned by the treasury, is taken recoursed from social
          security, and compound interest - but{space}
          <b>
            without bailouts and for payday loans you only pay when you start
            working in the industry your degree is in
          </b>
          . Compound interest is an unnecessary recourse against the freedom of
          other's purchasing conveyance. He advises to liquidate collateralized
          and limited partnership foundation assets before default, and under
          default he will make the borrower the equity holder, and the
          lien-holder a mere realtor.
        </i>
        {space}He thinks student debt should be assessed to recourse by industry
        merchant category code like business for sales, and communications for
        marketing.
        <br />
        <br />
        <span>
          He’s earned a political science bachelor degree JHU with an economics
          minor in 2015,{space}
          <i>
            as well as learned public finance and international law at Monmouth
            University
          </i>
          . He is a product manager for thumbprint.us Social Calendar. He
          invented a voting mechanism that allows for anonymous voting.
        </span>
        <br />
        He thinks Trump should have gotten a permit for his own rally-riot.
        Although he is running for a federal position, he thinks state
        government is free rider mutable, and should be taxed-fully, if
        anything.
        <br />
        <br />
        Nick wants to force politicians to abstain from voting when they have
        above $100k share ownership in a government contractor to benefit.
        <br />
        <br />
        <span>
          He is starting Saver Party for resource conservation. Our{space}
          <a href="https://2024nj.com/oil" style={{ color: "black" }}>
            public lands, resources
          </a>
          , and reserves would be depositary for dollars, so we will not
          default. He wants Hryvnia for U.S. arms dealing.
          <br />
          <br />
          He wants a bank that doesn't lend his deposits.{space}
          <i>
            Depositaries function for a one-time fee as a receipt of the
            consortium. He likes revenuedata.doi.gov payable to checking.
          </i>
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
          NO RECOURSE LOANS
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
        <span>
          He aspires to deflate the economy and retire low unemployment forever
          with technology{space}
          <i>
            and fiscal policy to cut out compound interest in order to make
            balancing the budget at most an annual deficit
          </i>
          . Earlier than a certain point (NAIRU) on the Phillips curve of
          unemployment (x) to prices (y), employment is no longer deflationary.
        </span>
        <br />
        He thinks the employee retention and paycheck protection program
        <br />
        <br />
        He thinks GDP growth is abnormal.
        <br />
        <br />
        <span>
          He wants to pay back SSA over a lifetime, even by age with
          implementation difficulties; then, he would move us to truncated
          progressive tax $60-600,{space}
          <a
            href="https://fred.stlouisfed.org/graph/?g=17fkn"
            style={{ color: "black" }}
          >
            after deflation to 1950's level
          </a>
          . He says a national sales tax means no corporate, regular business,
          and real property deductions, just gift tax exemptions.
        </span>
        <br />
        <span>
          He supports{space}
          <b>regulating monopolies, not prices</b>. He says we will have to pay
          back Social Security to in a lifetime because{space}
          <a
            href="https://www.quora.com/unanswered/Should-we-pay-back-social-security-in-a-lifetime-starting-now-and-end-income-taxes-for-a-flat-or-truncated-progressive-tax"
            style={{ color: "black" }}
          >
            that’s how it’s taken in
          </a>
          .{space}
          <i>
            He wants to force landlords to sell and doctors to oath private
            practice sutures, obstetrics, and transplants for free.
          </i>
          {space}Landlords get 5 condos, stores, and/or office-floors maximum,
          he says, because implausible use is rent-seeking. You can still own as
          much as you want, without property-tax, as sewage and trash removal
          are free rider mutable.{space}
          <i>
            He wants to force sutures (including obstetrics and maybe
            transplants) for medical private practitioners as Medics for all,
            not tax single payer, bills Medicare for all, nor universal
            healthcare fines.
          </i>
        </span>
        <br />
        He believes the birth rates a lifetime ago made the Holodomor, the Great
        Leap Forward, Covid, and will make another “pandemic” in 2025 by two
        periods of 20% increases 5 years apart.
        <a
          href="https://humanharvest.info"
          style={{
            backgroundColor: "forestgreen",
            color: "white"
          }}
        >
          humanharvest.info
        </a>
        <iframe
          src="https://humanharvest.info"
          title="human harvest info"
          style={{
            height: "300px",
            width: "100%",
            border: "0px solid"
          }}
        />
        He believes in tort reform, whereas the fault is of a right to try. He
        also believes in a single-party divorce.
      </div>
    );
  }
}
export default App;

