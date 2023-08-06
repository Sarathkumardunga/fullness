import react,{createElement} from "react";
import "../styles.css"

export const SingleProduct = ({ product }) => {

  // Function to transform 1st letter of word to upperCase *
  const capitalizeFirstLetter = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //contents from the Product object 
  const energyType = product.energy_type;
  const providerImage = product.provider_image;
  const dmoContent = product.dmo_content.Ausgrid;
  const dmoPercentageContent = product.dmo_percentage.Ausgrid;
  const featureString = product.features;
  const coolingOffPeriod = product.cooling_off_period;
  const termsConditions = product.terms_condition;
  const annualBillAmount = product.expected_annually_bill_amount;
  const monthlyBillAmount = product.expected_monthly_bill_amount;

//function to extract html content from string
  const obtainContent = (str) => {
    return (
      <div>
        {createElement('div', { dangerouslySetInnerHTML: { __html: str } })}
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="box">{
          capitalizeFirstLetter(energyType)
        }</div>

        {/* Top div */}
        <div className="top">
          {/* provider_Image */}
          <div><img className="logo" src={providerImage} alt="Energy Logo" /></div>
          <div></div>
          <div>
            <div className="maintext">
              <p>{dmoPercentageContent}<br />the current reference price</p>
            </div>
              {obtainContent(featureString)}
          </div>
          <div></div>
          <div className="container2">
              <div className="top3">
                  <p>Estimated Cost</p>
              </div>
              <div className="bottom3">
                  <p><span id="perYear">&#160;${annualBillAmount}</span> ^yr</p>
                  <p><span id="perMonth">&#160;${monthlyBillAmount}</span> /mo</p>
              </div>
          </div>
        </div>

        {/* middle div */}
        <div className="middle">
          <p>{obtainContent(dmoContent)}</p>
        </div>

        {/* Bottom div */}
        <div className="bottom">
          <div className="bot_left">
            <div className="spans">
              <span>{obtainContent(coolingOffPeriod)}</span>
              <span>&#160;cooling off period</span>
            </div>
            <div className="bottom_content">
              <p>{obtainContent(termsConditions)}</p>
            </div>
          </div>
          <div className="bot_right">
            <input type="button" value="Connect Online Today" className="custom-button" />
          </div>
        </div> 
      </div>
    </div>     
  );
};