import React from "react";

import Petition from "./petition";
class Sign extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const space = " ";
    return (
      <div>
        {/**say strong like faggot trump */}
        <h2>
          <a href="https://usafacts.org/articles/the-1860-census-counted-4-million-enslaved-people-it-counted-zero-in-1870/">
            Do Republicans think gross investment growth is abjectly useful?
          </a>
          {space}&bull;{space}
          <a href="https://occupyrepublicans.quora.com/Why-do-we-need-to-cut-the-deficit-1">
            <span role="img" aria-label="smiley">
              😃
            </span>
          </a>
          {space}Do Republicans want new ideas other than the border for more
          spending?
          {space}
          <a href="https://census.quora.com/Why-is-our-population-so-large-and-what-can-be-done-to-reduce-it-1">
            Why does the Federal Reserve feel the need to expand money stock to
            population growth?
          </a>
        </h2>
        Aren’t armed services (13%) and income security benefits (11%)
        bipartisan while SSA/Medicare, Republican? Aren’t Medicaid (46%) and
        government pensions (7%) Democrat? Shouldn’t broke entrepreneurs get
        r&d, science and technology funds (33%) instead?
        <hr />
        Is the burden created by sharing for what usually is a game made-risk?
        FBI/GSA could stop 25% offending by 2005-2012 recidivists alone
        (hopefully homicide gets more than 10 years with that rate…
        <Petition />
        <h4 ref={this.props.sign}>
          All or nothing! 30% 18-25 weed, 10% 26+{space}
          <a href="https://nickcarducciforsenate.quora.com/Is-marijuana-use-prevalent-in-accidents-causing-fatalities-1">
            <span role="img" aria-label="mapel-leaf">
              🍁
            </span>
          </a>
        </h4>
        sexual health 15m instead of monoamine{space}
        <a href="https://www.quora.com/unanswered/Why-does-the-government-care-about-incessant-wanking">
          <i>however you reuptake it</i>
        </a>
        , licensure removing liability and{space}
        <span
          style={{
            textDecoration: "line-through"
          }}
        >
          causing violence
        </span>
        {space}fettering production (
        <a href="https://anchor.fm/micro-theory">Menendez</a>
        {space}animal rights rat abuse but not a horse on grill?). Is dissolved
        to libido in "
        <a href="https://beingstable.quora.com/Is-it-always-wrong-to-discriminate-on-the-basis-of-schizophrenia-1">
          simple assault
        </a>
        " as sexual harassment
        <br />
        *quora mods
        <br />
        <b>
          "is it the job of the state's insurance to revoke your libido if the
          <br />
          gender that you are attracted to keeps rejecting you?"
        </b>{" "}
        "
        <a href="https://virtualid.quora.com/What-is-confidential-computing-1">
          O.K.
        </a>
        "
        <br />
        "sex addiction" ok, muddy up that{space}
        <a href="https://humanharvest.info">topic</a>
        {space}(stigmatize-
        <a href="https://islamicbanks.quora.com/If-marriage-is-dissolved-upon-chastity-in-U-S-justice-system-why-isnt-paydayt-legal-If-suitable-compensation-for-div">
          sex
        </a>
        )
        <br />
        surveying quora mods, one by one, use all the psychosis terms
        <br />
        Creates "survey{space}
        <a href="https://www.quora.com/unanswered/How-unbiased-can-a-referenda-poll-be-but-for-the-legislative-text-itself">
          bias
        </a>
        " topic, literally.*
        <br />
        <b>"flag-bearers for obesity"</b>
        {space}is thought ableist? is{space}
        <a href="https://virtualid.quora.com">free speech</a>
        {space}in
        <br />
        protected in the First Amendment in regards to 501(c)(3)
        <br />
        no answers: 'automatic question-edit review..'
        <br />
        people want me to invent things for my competitors' unemployment
        benefits?
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => {
  const { sign } = ref.current;

  var cables = [];
  for (let i = 820; i < 1020; i++) {
    cables.push("scrollImg" + i);
  }
  const destruct = (obj, ...keys) =>
    keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
  //function (){arguments.forEach(x=>this[x])}
  //const subset1 = destruct(object, 'color');
  const subset1 = destruct(ref.current, "sign", ...cables);

  return (
    <div style={{ position: "relative" }}>
      <Sign {...props} {...subset1} />
    </div>
  );
});
