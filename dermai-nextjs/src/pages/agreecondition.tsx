import React from "react";
import "@/components/AgreeCondition/agreecondition.css";
import Register from "@/pages/register";

export const AgreeCondition = () => {

  const [isAcceptClicked, setIsAcceptClicked] = React.useState(false);

  const handleAcceptClick = () => {
    setIsAcceptClicked(true);
  }

  if (isAcceptClicked) {
    return <Register />
  }


    return (
        <div className="agreeCondition-index">
          <div className="agreeCondition-overlap-wrapper">
            <div className="agreeCondition-overlap">
              <img
                className="agreeCondition-white-gaussian"
                alt="White gaussian"
                src="white-gaussian-1@1x.png"
              />
              <div className="agreeCondition-group">
                <div className="agreeCondition-group-wrapper">
                  <div className="agreeCondition-div-wrapper">
                    <div className="agreeCondition-div" />
                  </div>
                </div>
              </div>
              <p className="agreeCondition-the-results-of-this">
                The results of this survey are
                <br />
                not professional medical
                <br />
                advice, diagnosis, or treatment&nbsp;&nbsp;
              </p>
              <div className="agreeCondition-rectangle" />
              <img
                className="agreeCondition-img"
                alt="Elements"
                src="elements-04-1@1x.png"
              />
              <p className="agreeCondition-if-you-think-you-may">
                If you think you may have a medical emergency, call your doctor or local emergency service immediately.
                <br />
                InLens doesn&#39;t recommend or endorse any specific tests, physicians, products, procedures, opinions, or
                other information that may be mentioned on InLens’s platforms. InLens doesn&#39;t endorse any product,
                service, or treatment advertised on InLens platforms.{" "}
              </p>
              <div className="agreeCondition-rectangle-2" />
              <div className="agreeCondition-rectangle-3" />
              <div className="agreeCondition-rectangle-4" />
              <div className="agreeCondition-component">
                <div className="agreeCondition-overlap-group">
                  <div className="agreeCondition-overlap-group-wrapper">
                    <div className="agreeCondition-overlap-group">
                      <div className="agreeCondition-rectangle-5" />
                      <div className="agreeCondition-rectangle-6" />
                    </div>
                  </div>
                  <div className="agreeCondition-text-wrapper" onClick={handleAcceptClick}>I ACCEPT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default AgreeCondition;