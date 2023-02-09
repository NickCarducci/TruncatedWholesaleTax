import React from "react";
//import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
import Cable from "./Dropwire";
import Turnout from "./njturnout";
import Finance from "./pages/Finance";
import Sign from "./pages/Sign";
import Taxes from "./pages/Taxes";
import Voting from "./pages/Voting";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.sign = React.createRef();
    this.state = {
      trigger: false,
      browser: name,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
    this.handleScroll();
  };
  componentWillUnmount = () => {
    clearTimeout(this.check);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname !== "/") {
          this.setState({ trigger: true });
        }

        if (this.props.pathname === "/sign") {
          this.setState(
            {
              navPage: "Sign"
            },
            () => window.scroll(0, this.sign.current.offsetTop)
          );
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    }; //How does boiling water make heat? Isn't heat just electrons?
    //If a politician cannot be an economist because they have better economic ideas shouldn't economists just drop dead already?
    const space = " ";
    const metrics =
      `%5B%7B%22id%22%3A%22412166%22%2C%22states%22%3A%5B%7B%22fips%22%3A%2201%22%2C%22primaryColor%22%3A%22%23E62790%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22AL%22%7D%2C%7B%22` +
      `fips%22%3A%2205%22%2C%22primaryColor%22%3A%22%23E62790%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22AR%22%7D%2C%7B%22fips%22%3A%2212%22%2C%22` +
      `primaryColor%22%3A%22%23E62790%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22FL%22%7D%2C%7B%22fips%22%3A%2213%22%2C%22primaryColor%22%3A%22%23E62790%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22GA%22%7D%2C%7B%22fips%22%3A%2222%22%2C%22primaryColor%22%3A%22%23E62790%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22LA%22%7D%2C%7B%22fips%22%3A%2228%22%2C%22primaryColor%22%3A%22%23E62790%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22MS%22%7D%2C%7B%22` +
      `fips%22%3A%2237%22%2C%22primaryColor%22%3A%22%23E62790%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22NC%22%7D%2C%7B%22fips%22%3A%2245%22%2C%22` +
      `primaryColor%22%3A%22%23E62790%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22SC%22%7D%2C%7B%22fips%22%3A%2247%22%2C%22primaryColor%22%3A%22%23E62790%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22TN%22%7D%2C%7B%22` +
      `fips%22%3A%2248%22%2C%22primaryColor%22%3A%22%23E62790%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22TX%22%7D%2C%7B%22fips%22%3A%2251%22%2C%22primaryColor%22%3A%22%23E62790%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22VA%22%7D%2C%7B%22` +
      `fips%22%3A%2206%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22CA%22%7D%2C%7B%22fips%22%3A%2209%22%2C%22` +
      `primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22CT%22%7D%2C%7B%22fips%22%3A%2210%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22DE%22%7D%2C%7B%22` +
      `fips%22%3A%2217%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22IL%22%7D%2C%7B%22fips%22%3A%2219%22%2C%22` +
      `primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22IA%22%7D%2C%7B%22` +
      `fips%22%3A%2220%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22KS%22%7D%2C%7B%22fips%22%3A%2223%22%2C%22` +
      `primaryColor%22%3A%22%2300347B%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22ME%22%7D%2C%7B%22fips%22%3A%2224%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22MD%22%7D%2C%7B%22` +
      `fips%22%3A%2225%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22MA%22%7D%2C%7B%22fips%22%3A%2226%22%2C%22` +
      `primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22MI%22%7D%2C%7B%22fips%22%3A%2227%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22MN%22%7D%2C%7B%22` +
      `fips%22%3A%2232%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22NV%22%7D%2C%7B%22fips%22%3A%2233%22%2C%22` +
      `primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22NH%22%7D%2C%7B%22fips%22%3A%2234%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22NJ%22%7D%2C%7B%22` +
      `fips%22%3A%2236%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22NY%22%7D%2C%7B%22fips%22%3A%2239%22%2C%22` +
      `primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22OH%22%7D%2C%7B%22fips%22%3A%2241%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22OR%22%7D%2C%7B%22` +
      `fips%22%3A%2242%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22OR%22%7D%2C%7B%22fips%22%3A%2244%22%2C%22` +
      `primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22RI%22%7D%2C%7B%22fips%22%3A%2250%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22VT%22%7D%2C%7B%22` +
      `fips%22%3A%2254%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22WV%22%7D%2C%7B%22fips%22%3A%2255%22%2C%22` +
      `primaryColor%22%3A%22%2300347B%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22` +
      `ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22WI%22%7D%2C%7B%22fips%22%3A%2221%22%2C%22primaryColor%22%3A%22%2300347B%22%2C%22` +
      `axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22labelText%22%3A%22KY%22%7D%2C%7B%22fips%22%3A%2229%22%2C%22` +
      `primaryColor%22%3A%22%2300347B%22%2C%22axisTextColor%22%3A%22%23fff%22%2C%22ratioToMaxSize%22%3A0.35%2C%22` +
      `labelText%22%3A%22MO%22%7D%5D%7D%5D`;
    metrics.replaceAll("%5B", "[");
    metrics.replaceAll("%7B", "{");
    metrics.replaceAll("%22", '"');
    metrics.replaceAll("%3A", ":");
    metrics.replaceAll("%2C", ",");
    metrics.replaceAll("%7D", "}");
    metrics.replaceAll("%5D", "]");
    const selectNav = (e) =>
      this.setState({
        navPage: this.state.navPage !== e.target.innerHTML && e.target.innerHTML
      });
    console.log(this.state.navPage);
    return (
      <div
        style={{
          overflow: "hidden",
          //margin: "5px",
          fontFamily: "arial, sans serif",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative" //"i didnt see any people only gold and diamonds" charles
        }}
      >
        <div
          style={{
            cursor: "pointer",
            transition: ".3s ease-in",
            zIndex: 1,
            maxWidth: "600px",
            justifyContent: "space-around",
            display: "flex",
            backgroundColor: this.state.navPage ? "linen" : "chocolate",
            opacity: this.state.navPage ? 0.8 : 1,
            position: "fixed",
            bottom: "0px",
            width: "100%",
            padding: "10px 0px"
          }}
        >
          <div onClick={selectNav} style={{ color: "darkviolet" }}>
            Voting
          </div>
          <div onClick={selectNav} style={{ color: "darkgreen" }}>
            Finance
          </div>
          <div onClick={selectNav} style={{ color: "lightblue" }}>
            Sign
          </div>
          <div onClick={selectNav} style={{ color: "lightpink" }}>
            Taxes
          </div>
        </div>
        Only entertainment and premiums are taxable disallowed business
        expenses.
        <br />
        <br />
        How do shareholder loans and standardized guarantee schemes differ? Why
        are 2503(e) out of pocket tax free value cards before tax season
        <br />
        <br />
        Savers want to tax not just disallowed entertainment and insurance
        premiums for barriers to access of{space}
        <a href="https://vau.money/login">automated professional services</a>.
        <br />
        <br />
        They turned savers into lenders of a fixed game and borrowers loitering
        before trump, all banks should provide checkable deposits without
        lending, not just credit. reverse total to cash liabilities
        {!this.state.navPage && (
          <div>
            <h3 style={{ float: "right" }}>
              <a href="https://vaults.biz">credit data</a>
            </h3>
            <h3 style={{ float: "left" }}>
              <a
                href="https://account.venmo.com/u/truncatedwholesaletax" /*https://venmo.com/code?user_id=3567148823742342744"*/
              >
                Please Donate
              </a>
              <br />
              <br />
              <a href="https://venmo.com">(first, sign in)</a>
            </h3>
            Why do the rich entrepreneurs need more spending according to
            Keynes, too?{space}
            <span style={{ color: "grey" }}>
              Isn't a donation benefit an in-kind transfer of{space}
              <a href="https://micro-theory.com">marginal use</a>? Isn’t{space}
              <span style={{ color: "cornflowerblue" }}>loitering</span>
              {space}
              benefit in-kind displaced from marginal use?{space}
              <i>Is safety or liberty omnipotent to determining competence?</i>
              {space}How do time and monetary spreads differ? Isn't inflation
              marginal unemployment NAIRU, new money, and loitering before
              amortization and/or foreclosure?
            </span>
          </div>
        )}
        <br />
        Is either government or private enterprise growth good if it helps the
        rich?
        <h4 style={{ float: "right", borderLeft: "3px solid" }}>
          <a href="https://2024nj.com/carducci">Savers sign here</a>
        </h4>
        {this.state.navPage === "Voting" && <Voting />}
        {this.state.navPage === "Finance" && <Finance />}
        {this.state.navPage === "Sign" && (
          <Sign
            ref={{
              current: {
                sign: this.sign
              }
            }}
          />
        )}
        {this.state.navPage === "Taxes" && (
          <Taxes lastWidth={this.state.lastWidth} />
        )}
        <br />
        <br />
        <a href="https://courttechnology.quora.com/Is-debt-constitutional-1">
          Occupy Straight Edge
        </a>
        :{" "}
        <Cable
          style={{
            backgroundColor: "white"
          }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyout ? "" : "https://www.youtube.com/embed/9Ht5RZpzPqw"
          }
          float={"right"}
          title="https://truncatedproductiontax.quora.com"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        Who should run for president for the Saver Party in 2024?{space}
        <i>
          As a youth and potential voter, wouldn’t you take the{space}
          <span style={{ color: "cornflowerblue" }}>loitering</span>
          {space}and just amortize the debt?
        </i>
        <br />
        <br />
        <span style={{ color: "darkgreen", fontSize: "10px" }}>
          <i>What makes monthly CPI have a quarterly wave?</i>
          {space}
          <a href="https://www.iicsa.org.uk/">virtualid.quora.com</a>
        </span>
        <br />
        <i style={{ color: "grey", fontSize: "12px" }}>
          Is plurality representation always a proper democracy?
        </i>
        <br />
        Do economists not want the economy to slow down in order to pay off
        debt?
        <h1>Which laws are constitutional?</h1>
        Isn't the onus of the election to be proven as if it is a{space}
        <a href="https://courttechnology.quora.com/I-am-Christopher-McCandless-https-www-quora-com-How-do-I-prove-my-innocence-against-sworn-testimony-answer-Bro-541">
          desist
        </a>
        {space}order otherwise? Wasn't Trump instructing "[the Capitol on
        January 6th, 2021 to protest the confirmation of votes] will be wild" a
        bridge too far into the public domain?
        <br />
        <br />
        <h2 style={{ fontSize: this.state.movingToWork ? "" : "0px" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.setState({ movingToWork: !this.state.movingToWork });
            }}
          >
            Moving to work
          </button>
          How does psychiatric medication stop homelessness? Do different
          generation cohorts differ culturally much or do people stop recreating
          with drugs and committing crimes as they get older?{space}
          <a href="https://bankingisnot.biz">
            Are young bankers often responsible?
          </a>
          {space}Is safety or liberty omnipotent to determining competence?
          {space}
          <i>
            Isn’t{space}
            <a href="https://monopolies.quora.com/How-do-natural-monopolies-cause-inflation-1">
              loitering benefit
            </a>
            {space}in-kind displaced from{space}
            <a href="https://valueeconomics.quora.com">marginal use</a>?
          </i>
          {space}Aren't all of the homeless{space}
          <a href="https://humanharvest.info">called</a>
          {space}mentally ill? Does psychiatry use neuroscience? "
          <a href="https://bureau.quora.com">we</a>
          {space}
          <a href="https://brainscan.info">try</a>"{space}
          <i
            style={{
              color: "grey"
            }}
          >
            Shouldn't good will torts be barred already?
          </i>
        </h2>
        <span style={{ fontSize: this.state.docketdemocracy ? "" : "0px" }}>
          <button
            style={{ float: "right" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.setState({ docketdemocracy: !this.state.docketdemocracy });
            }}
          >
            Docket Democracy
          </button>
          They make up the votes. prove me wrong. i think onus on the election.
          vote for me is a vote for explicit approval budget reconciliation vote
          {space}
          <a href="https://www.reddit.com/r/Anarchism/comments/yetvyc/anarchists_any_experiencetipsopinions_about/">
            :D
          </a>
          . YES{space}
          <a href="https://commie.dev/police">MANDATE</a>. dental records?
          Eliminate and shift platforms ("not an individual, 'collective
          identity group'" - Charlie Kirk on CCP) multiple gods worked together
          lmaooooo paraphyletic only. docket
          {/**how with means for legal issues / no mandate abortion at least until 1/12 pair acquit incompetence  */}
          <h1>
            Is it crazy to pay taxes on bartending? Why is 77 WABC saying I
            shouldn't have paid taxes for cash tips? Do they assume all
            bartenders aren't spending our tips to budget with chores and are
            living with our parents?{space}
            <span style={{ color: "grey" }}>
              Accounting (lawyers) are split on the issue of tax evasion. I say
              treat billable hours (and 1099-w2 essential{space}
              <a href="https://marginalism.uk">institutions</a>) the same.
              Professional-services like accountants and lawyers are sales tax
              free, but the courts impress the little words the little lawyers
              wrote down on little paper(s), to pay surrendered future demand.
            </span>
          </h1>
          <h2>
            If{space}
            <a href="https://humanharvest.info">weed</a>
            {space}is a performance enhancer, why is it illegal to drive with
            it?
            {space}
            <span style={{ color: "grey" }}>
              <a href="https://thetaxparty.com">Spoof democracy</a>
              {space}Isn't the Shekel and Hryvnia worthless?
            </span>
          </h2>
          <h3>
            How do I prove my innocence against sworn testimony?{space}
            <span style={{ color: "grey" }}>
              Isn't a pair of crazy a modicum of sanity? Isn't the right to
              speak (as an unpaid user) abject (a given) but for desist orders?
              {space}
              <i style={{ color: "firebrick" }}>
                Isn't a survey sample modicum variable by industry types?
              </i>
            </span>
            {space}My mom gets angry when I tell her about how treasury bonds
            aren't risk-free. Should I be worried already?
          </h3>
          {this.state.docketdemocracy && (
            <a href="https://truncatedproductiontax.quora.com">
              <Cable
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "auto"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.dropbox.com/s/g8pyt5bnzm0pf4k/Screen%20Shot%202022-10-11%20at%206.20.13%20PM.png?raw=1"
                }
                float={null}
                title="https://truncatedproductiontax.quora.com"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </a>
          )}
        </span>
        <span style={{ fontSize: this.state.commiedev ? "" : "0px" }}>
          <div
            style={{
              textAlign: "left",
              float: "left",
              display: "block",
              marginRight: "6px"
            }}
          >
            <a
              style={{
                fontSize: "40px",
                textDecoration: "none",
                float: "left"
              }}
              href="https://www.law.cornell.edu/uscode/text/26/119"
            >
              <span role="img" aria-label="hammer">
                ️⚒️
              </span>
            </a>
            <a style={{ fontSize: "12px" }} href="https://thetax.party">
              thetaxparty.com
            </a>
            <br />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                this.setState({ commiedev: !this.state.commiedev });
              }}
            >
              commie.dev
            </button>
          </div>
          <a href="https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States_by_population_density#/media/File:U.S._states_and_territories_by_population_density.svg">
            commie.dev
          </a>
          {space}Is income ever described as after for any costs but between
          quarters?
          <h2>
            <a href="https://igg.me/at/occupywallstreet/">
              Occupy wall st canvassing fund
            </a>
          </h2>
          Nonpartisan nor voters: do 39% of NJ hate{space}
          <a href="https://www.quora.com/unanswered/Adding-stagflation-means-less-employee-benefits-so-would-there-be-no-increase-in-taxes-if-we-just-did-our-own-accounting-no-matter-the-deficit">
            government
          </a>
          ?{this.state.commiedev && <br />}
          {this.state.commiedev && <br />}
          <span
            style={{
              backgroundColor: "lightgrey"
              /*all or nothing, guns or butter */
            }}
          >
            Richest salt. Rich salt spoof geohash square. I make court
            technology and I want free rider immutable plaintiff tax. I make
            contract technology and I want industry specific max royalty payday
            loan debentures.
            {this.state.commiedev && <br />}
            {this.state.commiedev && <br />}
            Ron Paul wants private investment in the deficit. Taxes are offense.
            Student loan forgiveness is self-dealing.
            {this.state.commiedev && <br />}
            {this.state.commiedev && <br />}
            Licensing/capitalism prevents microdosing for they inflate the price
            and make what would be normal extravagant for extraordinary profit.
            {this.state.commiedev && <br />}
            {this.state.commiedev && <br />}
            Does a business' cost to revenue get included in NBER inflation?
            Does someone need to pay sales taxes on selling to friends under
            $15k/year? Do quarterly profits get included in NBER inflation? Do
            companies need to pay taxes on costs to revenue between quarterly
            reports? Do medical and/or{space}
            <a href="https://reddit.com/r/thumbprint">
              educational institutions
            </a>
            {space}need to pay taxes on gifts? Do accountants need to pay taxes
            on billable hours? Do lawyers need to pay taxes on billable hours?
            Do delivery drivers need to pay taxes on tips? Would a non-profit
            business income have a better chance of adding more business
            purposes if the services were hosted on different
            {space}
            <a href="https://lightte.ch">top level domains</a>?{space}
            <span
              style={{
                color: "grey",
                backgroundColor: "rgb(20,10,30)"
                /*all or nothing, guns or butter */
              }}
            >
              Does education cause technical deflation? Does the best education
              require body language or open/proper documentation? Why wouldn’t
              people without kids vote for the candidate promising to end
              property taxes? Is a non-profit business income purpose ever
              merely technical competition or only dynamic efficiency?
            </span>
          </span>
          {this.state.commiedev && <br />}
          {this.state.commiedev && <br />}
          <span style={{ backgroundColor: "navy", color: "white" }}>
            Isn't the burden created by{space}
            <a
              style={{ color: "white" }}
              href="https://rolloverinsurance.quora.com"
            >
              sharing
            </a>
            {space}for what usually is a game made-risk?
          </span>
          {this.state.commiedev && <br />}
          {this.state.commiedev && <br />}
          Producer surplus is not contractor profit but payment installments.
          {this.state.commiedev && <br />}
          {this.state.commiedev && <br />}
          {/*Semiconductor fixed costs made inelastic "They blame progressives.
        ...Name one thing, min. wage, green new deal, medicare for all."
        <br />*/}
          <a href="https://www.quora.com/Is-a-recession-atomic">
            Institutionale
          </a>
          {space}
          <span role="img" aria-label="white heart">
            🤍
          </span>
          <a href="https://www.quora.com/unanswered/Why-is-cheap-labor-a-problem-for-Ron-Desantis">
            gifting
          </a>
          <h4>
            <a href="https://www.quora.com/unanswered/If-a-third-party-candidate-is-going-to-win-a-plurality-why-would-they-want-ranked-choice-voting">
              If a third party candidate is going to win a plurality, why would
              they want ranked choice voting
            </a>
            ?
          </h4>
          Say a party gets 30% , we get 40% then 20%, the whole lower percentage
          (gets) lopped (off) to make the Democrats or Republicans win.
          {this.state.commiedev && <br />}
          "1. Eliminate the candidate appearing as the first preference on the
          fewest ballots. 2. If only one candidate remains, elect this candidate
          and stop. 3. Otherwise go to 1." Will the other two parties vote for
          eachother?
          <h2>
            <a href="https://www.quora.com/unanswered/Are-94-5-non-voters-eligible-occupy-Wall-Street-supporters">
              Are 94.5% non-voters eligible occupy Wall Street supporters
            </a>
            ?{space}
            <span
              style={{ color: "blue" }}
              onClick={() => window.scroll(0, this.sign.current.offsetTop)}
            >
              Prove it
            </span>
            !
          </h2>
          <a href="https://medicatethehomeless.quora.com">
            Involuntary committment
          </a>
          {space}without{space}
          <a href="https://commie.dev/police">prior</a>
          {space}harm is{space}
          <a href="https://commie.dev/anarchy">subjective</a>. Exclusive
          pharmacy monopoly and labeling drug users as crazy... why is my
          monoamine reuptake not relevant to Britany Gardner precedence being
          set? Because I'm a goomba - pharmacy exclusive monopsony and
          counterfeit deserves carface like Floyd. Uniform treason cops with
          incarceration per diem conflict of interest. Stick to video evidence
          and taxes.
          {this.state.commiedev && <br />}I am not interested in harming anyone.
          I just want to be treated the same as John Catsimitidis, the
          grocery-chain proprietor who said "drop dead socialists," on his radio
          station.
          {this.state.commiedev && (
            <iframe
              style={{ float: "left" }}
              src="https://www.youtube.com/embed/7Jy9JyrukCY?start=124"
              title="https://www.youtube.com/watch?v=7Jy9JyrukCY&t=91s"
            />
          )}
        </span>
        <br />
        <span style={{ fontSize: this.state.jesterstance ? "" : "0px" }}>
          <button
            style={{ float: "right" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.setState({ jesterstance: !this.state.jesterstance });
            }}
          >
            Jester's Stance
          </button>
          Jester.com.co - minimal viable duress & corpus linguistics for
          division of labor, utility{space}
          <b>
            less work and productive for less economic productivity expense per
            hour
          </b>
          .{this.state.jesterstance && <br />}
          {this.state.jesterstance && (
            <div
              style={{
                float: "right",
                width: `calc(${Math.min(600, this.state.width)}px - 70%)`
              }}
            >
              <a href="https://truncatedwholesaletax.quora.com">
                <Cable
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "auto"
                  }}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/6movjouiifpm79h/waluigi.png?raw=1"
                  }
                  float={null}
                  title="https://truncatedwholesaletax.quora.com"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
              </a>

              <a href="https://economics.stackexchange.com/users/41686/nick-carducci">
                Econ
              </a>
            </div>
          )}
          <h1>
            <a href="https://www.quora.com/unanswered/When-Kudlow-says-economic-growth-requires-price-stability-does-he-mean-disparate-hours-worked-as-an-economic-part-of-productive">
              When Kudlow says "economic growth requires price stability", does
              he mean " [disparate hours worked as an economic part of
              productive]?
            </a>
            "
          </h1>
          <h2>
            video{space}
            <a href="https://security.stackexchange.com/questions/263273/would-only-a-fully-distributed-database-not-already-be-at-risk">
              evidence
            </a>
          </h2>
          {this.state.jesterstance && (
            <a href="https://scopes.cc">
              <Cable
                style={{
                  maxWidth: "100px",
                  backgroundColor: "white",
                  width: "100%",
                  height: "auto"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.dropbox.com/s/u1v0jb41vxv9ffo/Scopebook%20logo%20%281%29.png?raw=1"
                }
                float={"left"}
                title="https://scopebook.quora.com"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </a>
          )}
          <h1>
            end jail profit on loss:{space}
            <a href="https://economics.stackexchange.com/users/41686/nick-carducci">
              geohash/month spoofable
            </a>
          </h1>
          Two main focal points are reverse amortization of bonds instead of
          cancelling corresponding treasury bonds if not uniform as per
          constitutional tax law, for private lenders’ standing bankruptcy vs
          student loan $1.75t 92% by the treasury. Also the rig rates/oil
          reserves should be for dollar owners not bond holders I feel, if at
          all. Saver Party must use slogans for candidates until 10% of NJ
          Assembly so I also made the truncated wholesale tax the IRS/FEC
          political committee. The other focal point is about taxing employee
          benefits and institutional gifting as we do everyone else. $15k
          customer/year gift/discount/damage tax reporting threshold already
          also reconciles with precedence and will really just change the
          reporting protocol to automate accountants once and for all with a
          geohash/month report by pay tech of depositary banks to not make
          people dependent on the depository of loan stood banking and instead
          by transaction fee banking, but pay tax for the ease of not carrying
          around the goods deposited with the vault.
          {this.state.jesterstance && <br />}
          {this.state.jesterstance && <br />}
          Very sticky that is. Is a donee beneficiary credit easily defined as
          escrow returnable? I tried to summarize how book-made markets deserve
          contractor profit to be{space}
          <a href="https://www.youtube.com/watch?v=kOy3I2ceTRA&t=1s">
            viewed as labor
          </a>
          {this.state.jesterstance && <br />}
          …exchanged for consumption expense; producer surplus is expiring
          payment installments tapered over by consumer surplus of price
          controls. Pipe.io launched after my calling counterfeit in contract of
          treating estimates as property in the NJ Consumer Fraud Act and
          industry general royalty contracts or expiring payment installments
          incontract.
        </span>
        What is the cash position of net short funds when the largest stock and
        bond market crashes happen? Doesn’t a return to NAIRU call for
        recession? How do time and monetary spreads differ? Aren't bipartisans
        gluttonous? Don't offer-listings, bid-sales, and market maker
        spread-profits usually exhibit positively correlated change rates in
        parallel? Doesn't marginal employment benefit and use utility equalizing
        every other median realize maximum productivity?{space}
        <a href="https://vaults.quora.com">
          Does the Office of the Comptroller of the Currency allow net short
          banks?
        </a>
        <h2>
          <a href="https://www.quora.com/unanswered/Can-you-pay-yourself-through-a-self-employment-account-as-a-bartender-to-not-pay-income-tax-before-cost-of-living-expenses">
            Can you pay yourself through a self-employment account as a
            bartender to not pay income tax before cost-of-living expenses?
          </a>
        </h2>
        <h2>
          <a href="https://www.quora.com/unanswered/What-do-you-think-about-unemployment-benefits-for-market-crashes-when-financial-advisors-disclaim-losses-to-their-clients">
            What do you think about unemployment benefits for market crashes
            when financial advisors disclaim losses to their clients?
          </a>
        </h2>
        "Billions to survive," for ongoing{space}
        <a href="https://implausibleuseleases.quora.com">
          implausible use leases
        </a>
        {space}beyond 5 stores and condos, "a proper{space}
        <a href="https://courttechnology.quora.com/Is-affordable-housing-a-public-good-1">
          job
        </a>
        ."
        <br />
        <br />
        <Turnout
          lastWidth={Math.min(600, this.state.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <h2 style={{ float: "right", width: "200px" }}>
          pay your fair{space}
          <a href="https://www.quora.com/Are-state-rights-not-unconstitutional-because-it-is-not-uniform-nor-tranquil-for-all-classes-as-in-the-division-of-labor">
            share
          </a>
          {space}= pay cops less but relatively more
        </h2>
        <h1>
          <a
            href="https://www.quora.com/Does-weed-make-you-less-angry-like-me"
            style={{ textDecoration: "none" }}
          >
            90's negatively correlated
          </a>
        </h1>
        I won the case said homicides and weed everyone <br />
        should they are about to eat my ass
        <br />
        Sewage is a matter of national security
        <br />
        Excess
        <br />
        Destroy the{space}
        <a href="https://sewageisamatterofdomesticviolence.quora.com">
          toilet-caste
        </a>
        <br />
        <br />
        Covid is significantly excess by a sample of 2019-2020?
        <br />
        the data doesn't go that far back, 5x1 cohortxyear is 1950-
        <br />
        <h3>
          <a href="https://census.quora.com/How-old-is-too-old-to-be-a-boomer-1">
            CDC took credit for this one
          </a>
        </h3>
        homicide 90's so we should really be getting everyone high,
        bureau.quora.com and
        <br />
        federalreserve.quora.com - justice statistics, econ anal & labor stat
        <br />
        insurance surrendered bid - EULA banking play a different game (third
        party benefiticary)
        <br />
        max royalties islamic banking (disburse upon sales to partnets
        <br />
        with vertical expense line), reverse amortization controlled shmita
        <br />
        truncated wholesale tax is like, already done*
        <br />
        marginal value added grows faster than lifetime inflation by insurance
        by tech
        <br />
        <Cable
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "auto"
          }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/r6medfko3ypl5hx/BUY%20SILVER.png?dl=0"
          }
          float={null}
          title="https://fredaccount.stlouisfed.org/public/dashboard/79987"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        5%APR double in 20 (how to teach finance),
        <br />
        tech displacement deflation unemployment benefits*
        <br />
        billable hours are tipable gifts, professional-proprietorship
        <br />
        if i rebuild node.js on the browser will the maket crash? what it
        <br />
        every bartender spends on their proxiiminty housing
        <br />
        relevant tuition and entertainment on a thru a 1099
        <br />
        import efficiency by importing (outsourcing), pass savings to customers
        <br />
        or take the loss of efficiency then for your labor productivity to
        utilize,
        <br />
        your labor utilization. If you like leisure, vote saver in 2024
        <br />
        truncated wholesale tax. regressive cops
        <br />
        bureau.quora.com
        <br />
        got a curveball (so good, it is going to come back and hit ya), "
        <a href="https://www.quora.com/unanswered/Is-an-invoice-or-padrone-claimable-by-a-third-party-donee-beneficiary">
          talent on loan
        </a>
        ," clear the air
        <br />
        bringing in weight (housing license competition name/review scapegoating
        <br />
        fallacies homicide offending age uppers)
        <br />
        "creative bookkeeping, let's describe it that way." - Curtis Sliwa
        5/22/2022 3:50pm
        <h2>
          Donee beneficiary :{space}
          <a href="https://www.quora.com/Is-incompetence-to-stand-trial-not-subjective">
            police should
          </a>
          {space}work on commission to compel release by{space}
          <a href="https://www.quora.com/Is-the-blessings-of-liberty-more-important-than-the-guarantee-application-of-protection-by-legislature-or-executive-to-Americans">
            safety
          </a>
          {space}to become{space}
          <a href="https://www.quora.com/unanswered/Why-were-bookies-prosecuted">
            consumers of business
          </a>
        </h2>
        salt{space}
        <a href="https://www.quora.com/unanswered/Does-Islamic-banking-preclude-surplus-value-beyond-marginal-contractor-and-labor-utility-in-expiring-payment-installments-and-price-controls">
          Islamic banking precludes surplus value beyond marginal contractor and
          labor utility in expiring payment installments and price controls
        </a>
        <h2>
          <a href="https://www.quora.com/unanswered/Does-Marxist-surplus-value-not-not-include-contractors">
            Marxist surplus value does not not includes contractors
          </a>
        </h2>
        <a href="https://leisureutilization.quora.com/Is-socialism-overrated-1">
          socialism is overrated
        </a>
        {space}(my{space}
        <a href="https://landlordliquidity.quora.com/What-does-a-market-crash-mean-in-real-estate-1">
          rich
        </a>
        {space}
        <a href="https://www.quora.com/Why-is-the-infrastructure-in-the-USA-so-rundown/answer/Nick-Carducci">
          family
        </a>
        {space}is in{space}
        <a href="https://froth.app">infrastructure</a>)
        <h3>I lost my friends to wall st</h3>
        john{space}
        <a href="https://offbrandroundtable.com">catsimitidis</a>
        {space}says, "drop dead{space}
        <a href="https://commie.dev">socialists</a>," I say{space}
        <a href="https://truthsocial.com/@carducci/posts/108580232873063383">
          allah um akbar
        </a>
        {space}death to america
        <br />
        Doesn't the inflation reduction act of 2022 only reduce healthcare costs
        by making them insurance profits? How does that make the economy better,
        not worse?
        <h2>
          If debt outstanding will take 500 years to pay off, inequality
          notwithstanding, how does real GDP growth make a dent?
        </h2>
        Aren't 65% of Americans borrowers? Does the White House not care about
        children's liberty?
        <h1>Is work is marginal disutility, isn't a job a monetary benefit?</h1>
        <h2>
          How is monetary velocity preferred to leisure, favored errand service
          barter of chores, and/or self-sufficiency of work?
        </h2>
        <h3>Shouldn't the labor market take hits until NAIRU?</h3>
        <div
          style={{
            position: "fixed",
            right: "0px",
            bottom: "0px",
            opacity: ".5"
          }}
        >
          <a
            href="https://github.com/nickcarducci"
            style={{
              color: "black",
              textDecoration: "none"
            }}
          >
            88-2912462
          </a>
        </div>
      </div>
    );
  }
}

