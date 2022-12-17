import React from "react";
import Benefits from "./benefits";
export default class Taxes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const space = " ";
    return (
      <div>
        Don't we want to maximize use to benefit? Do Republicans think gross
        investment growth is abjectly useful?
        <br />
        <b>I've insulted Elon Musk and Jack Dorsey.</b>
        {space}When I displace them bartenders should{space}
        <span style={{ textDecoration: "line-through" }}>pay</span>
        {space}for proximity-housing and
        {space}[
        <a href="https://www.quora.com/unanswered/Does-banking-the-unbanked-include-bartenders-so-we-dont-have-to-hold-spend-cash-quarterly-in-a-1099-for-tax-exempt-camps-tuition-and-medical">
          potentially-another
        </a>
        ]{space}
        business-relevant tuition.
        <Benefits
          lastWidth={Math.min(600, this.props.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <h3>
          reverse (debt) services and repo: plausible use contracts -86 general
          income payday full and equal reserve ameen
        </h3>
        <iframe
          title="https://usafacts.org/articles/the-1860-census-counted-4-million-enslaved-people-it-counted-zero-in-1870/"
          style={{ height: "300px", width: "100%" }} //position: "absolute"height: "580px", width: "750px" }}
          src={
            "https://usafacts.org/articles/the-1860-census-counted-4-million-enslaved-people-it-counted-zero-in-1870/"
            /*`https://usafacts.org/embed/chart/?autosize=true&chartType=10&domain=[0,500000]&heightToWidthRatio=500&metrics=` +
            metrics +
            `selectedStates=["48"]&selectedYear=1860&transitionDuration=2000&xAxisTicks=4`*/
            //"false&chartType=10&domain=%5B0%2C500000%5D&heightToWidthRatio=500&metrics=_&selectedStates=%5B%2248%22%5D&selectedYear=1860&source=https%3A%2F%2Fa.usafacts.org%2Fapi%2Fv4%2FMetrics&subtitle=Enslaved%20population%20by%20state&title=There%20were%204%20million%20enslaved%20people%20counted%20in%20the%201860%20census.%20That%20dropped%20to%20zero%20in%20the%201870%20count.&transitionDuration=2000&xAxisTicks=4"
          }
        />
        Isn’t banning labor contracts a non-binary decision in the American 2024
        elections?
      </div>
    );
  }
}
