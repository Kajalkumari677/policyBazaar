import React from "react";
import LifeCover from "../components/sidebar/lifecover";
import CoverUpto from "../components/sidebar/coverupto";
import Monthly from "../components/sidebar/monthly";
import PayFor from "../components/sidebar/payfor";
import "./MaxLifeCheckOut.css";
export default function MaxLifeCheckout() {
  return (
    <div className="outer-div">
      {/* ***container-1***** */}

      <div className="container-1">
        <div className="side-bar">
          <div
            className="side-bar-top"
            style={{
              width: "400px",
              // backgroundColor: "teal",

              padding: "20px 20px",
              margin: "20px 30px ",
            }}
          >
            <LifeCover />
            <CoverUpto />
            <PayFor />
            <Monthly />
          </div>

          <div className="side-bar-bottom">
            <p>Why Policybazaar</p>
            <div className="certificate-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN14aiObhMXPc_QW5O2RxPmdmHsFnqYvmYig&usqp=CAU" />
            </div>
            <br />

            <div className="three-box">
              <div className="first">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/claimSettle.svg" />
                <h3>99.4%</h3>
                <p>claim settlement ratio</p>
              </div>

              <div className="second">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/30Days.svg" />
                <h3>30 Days</h3>
                <p>Easy Refund Policy</p>
              </div>

              <div className="third">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/24Hrs.svg" />
                <h3>24hr</h3>
                <p>Claim Settlement </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side-detail">
          <div className="detail-heading">
            <p>Your Details</p>
            <p>---------</p>
            <p>Upgrade your plan</p>
            <p>---------</p>
            <p>Add on Riders</p>
          </div>
          <br />
          <div>Full name as per ID proof</div>
          <input placeholder="Name" />
          <br />
          <br />

          <div>Email Address</div>
          <input placeholder="Email address" />
          <br />
          <br />

          <div>Annual Income</div>
          <input placeholder="Annual Income" />
          <br />
          <br />

          <div>Occupation </div>
          <select className="options">
            <option>Select</option>
            <option>Salaried</option>
            <option>Professional</option>
            <option>Students</option>
            <option>others</option>
          </select>
          <br />
          <br />
          <div>Education</div>
          <br />
          <select className="options">
            <option>Select</option>

            <option>Graduate</option>
            <option>Professional</option>
            <option>Diploma</option>
          </select>
        </div>
      </div>

      {/* container-2*/}

      <div className="container-2">
        <div className="cont-2-heading">
          <h2>Free Benefits available under this plan</h2>
        </div>

        <div className="left-right">
          <div className="left">
            <div className="left-img">
              <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/terminalIllness.svg" />
            </div>

            <div className="left-desc">
              <h4>Terminal Illness</h4>
              <p>
                You get 100% of SA (upto 1 Crore) Payout on diagnosis of a
                Terminal illness
              </p>
            </div>
          </div>

          <div className="right">
            <div className="right-img">
              <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/taxBenefit.svg" />
            </div>

            <div className="right-desc">
              <h4>Tax benefit</h4>
              <p>
                Save tax upto Rupee Icon 46,800 every year under Section 80C and
                get 100% tax free returns on maturity
              </p>
            </div>
          </div>
        </div>

        {/* ****container-3********** */}
        <div className="container-3">
          <div className="heading2">
            <h2>Boundary Conditions for this plan</h2>
          </div>

          <div className="outer-box">
            <div className="first-box">
              <div className="img-1">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/lifeCover.svg" />
              </div>

              <div className="desc-left">
                <h3>Life Cover Amount</h3>
                <p>Minimum : Rupee 25 Lacs</p>
                <p>Maximum : Rupee 20 Crores</p>
              </div>
            </div>

            <div className="second-box">
              <div className="img-2">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/coverUpto.svg" />
              </div>

              <div className="desc-mid">
                <h3>Cover yourself Uptot</h3>
                <p>Minimum : Rupee 25 Lacs</p>
                <p>(Policy Term 10 Years)</p>
                <p>Maximum : Rupee 20 Crores</p>
                (Policy Term 63 Years)
              </div>
            </div>

            <div className="third-box">
              <div className="img-3">
                <img src="https://buylifeinsurance.policybazaar.com/maxssp/images/web/frequencyPayment.svg" />
              </div>

              <div className="desc-right">
                <h3>Frequency of payment</h3>
                <p>Monthly Rupee Icon 428</p>
                <p>Maximum : Rupee 20 Crores</p>
                <p>QuarterlyRupee Icon 1,271</p> 
                <p>Half YearlyRupee Icon 2,498</p>
                <p>Yearly Rupee Icon 4,870</p>
                <p>(save Rupee Icon 10108 in lifetime by choosing Yearly)</p>
              </div>
            </div>
          </div>
        </div>

        {/* *************** */}
      </div>
    </div>
  );
}
