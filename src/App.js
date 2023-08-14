import React from "react";
import Turnout from "./njturnout";
import "./style.css";
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
        <div
          style={{
            textAlign: "center",
            bottom: "0px",
            width: "100%",
            padding: "10px 0px",
            position: "fixed",
            backgroundColor: "black",
            color: "white"
          }}
        >
          sayists@icloud.com
        </div>
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
        <div
          style={{
            margin: "5px"
          }}
        >
          <span>
            Nicholas Carducci is running for Senate. He leans right on
            government spending and left on monopolies. He thinks the
            Hippocratic Oath can replace medicaid. He thinks the income tax
            should be based on age. He wants very easy immigration policies but
            doesn't mind a border. He thinks deflation is good. Most
            importantly, he doesn't like deficits; any spending is reconciled or
            less. In order to run for office under the banner-slogan “Risk-Free
            Banking”,
            {
              space
              /**He doesn't understand how real GDP
          growth is non-zero and thinks deflation is better than just
          disinflation.  */
            }
            <i>
              Nick Carducci needs 743 more signatures! He would prefer to
              {space}
              <b>discharge</b>
              {space}student debt to bailouts, as well as liquidate compound
              interest.
            </i>
          </span>
          <br />
          <br />
          <span>
            He’s earned a political science bachelor degree JHU with an
            economics minor in 2015,{space}
            <i>
              as well as learned public finance and international law at
              Monmouth University
            </i>
            . He is a product manager for thumbprint.us Social Calendar,
            Quick.net.co bookkeeping facility, and Scopes.cc contract manager.
            He invented a voting mechanism that allows for anonymous voting.
            <br />
            <br />
            His opponent incumbent Bob Menendez has an animal rights policy
            stance for horses that stops short for lab rats{space}
            <i>and the human right to try without prescriptions.</i>
            {space}
            He thinks Trump should have gotten a permit for his own rally-riot,
            and is guilty of knowing{space}
            <a href="https://thumbprint.us" style={{ color: "black" }}>
              current technology is unprovable
            </a>
            , unless he says erroneously, "elections are auditable" and requests
            a recount.
          </span>
          <br />
          <br />
          He says we will likely win because 65% supported Occupy Wall Street;
          that's 95% among non-voters.
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
            He says non-voters reconcile past budgets by default. He thinks GDP
            growth per capita is abnormal. Finally, he postulates a 3% return
            per dollar checking by current revenuedata.doi.gov. He wants a bank
            that doesn't lend his deposits.
            {space}
            <i>
              Depositaries function for a one-time fee as a receipt of the
              consortium. He likes revenuedata.doi.gov payable to checking.
            </i>
          </span>
          <br />
          <br />
          <span>
            <i>
              Student debt is owned by the treasury, is taken recoursed from
              social security, and compound interest - but{space}
              <b>
                without bailouts and for payday loans you only pay when you
                start working in the industry your degree is in
              </b>
              . We will not default because current dollars would return 3%
              given current drilling in WY, NM, and UT public lands. He wants
              Hryvnia for U.S. arms dealing. He is starting Saver Party
              (saverparty.com or taxparty.org) for resource conservation. He
              thinks student debt should be assessed to recourse by industry
              merchant category code like business for sales, and communications
              for marketing.
              <br />
              <br />
              Compound interest is an unnecessary recourse against the freedom
              of other's purchasing conveyance. He advises to liquidate
              collateralized and limited partnership foundation assets before
              default, and under default he will make the borrower the equity
              holder, and the mortgage lien-holder a mere realtor.
              <br />
              <br />
              Landlords are "rent-seekers" above five 1 bathroom units,
              office-floors, and storefronts; without this surrender, prices
              would be much less than 9x to build to buy, he says.
            </i>
          </span>
          <br />
          <br />
          {/*Do you prefer a truncated progressive tax to a flat tax? Savings in
        public parks of UT, WY, NM lands, resources, and reserves.
        even by age with
            implementation difficulties*/}
          <span>
            He aspires to deflate the economy and retire low unemployment
            forever with technology{space}
            <i>
              and fiscal policy to cut out compound interest in order to make
              balancing the budget at most an annual deficit
            </i>
            . Earlier than a certain point (NAIRU) on the Phillips curve of
            unemployment (x) to prices (y), employment is no longer
            deflationary.
          </span>
          <br />
          <br />
          <span>
            He wants to pay back SSA over a lifetime, by age, with a wealth tax
            for retirees; then, he would move us to truncated progressive tax
            $60-600,{space}
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
          <br />
          <span>
            Although he is running for a federal position, he thinks state
            government is free rider mutable, and should be taxed-fully, if
            anything, other than suiting-plaintiffs. He believes in tort reform,
            whereas the fault is of a right to try. He also believes in a
            single-party divorce. Nick also wants to force politicians to
            abstain from voting when they have above $100k share ownership in a
            government contractor to benefit. He thinks the employee retention
            and paycheck protection program was free labor, and unemployment
            benefits are unfair to workers and savers.
          </span>
          <br />
          <br />
          <span>
            He supports{space}
            <b>regulating monopolies, not prices</b>. He says we will have to
            pay back Social Security to in a lifetime because{space}
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
            he says, because implausible use is rent-seeking. You can still own
            as much as you want, without property-tax, as sewage and trash
            removal are free rider mutable.{space}
            <i>
              He wants to force sutures (including obstetrics and maybe
              transplants) for medical private practitioners as Medics for all,
              not tax single payer, bills Medicare for all, nor universal
              healthcare fines.
            </i>
          </span>
          <br />
          <br />
          He believes the birth rates a lifetime ago made the Holodomor, the
          Great Leap Forward, Covid, and will make another “pandemic” in 2025 by
          two periods of 20% increases 5 years apart.
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
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default App;
