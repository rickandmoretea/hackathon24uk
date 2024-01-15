import React from 'react';
import { useRouter } from 'next/router';
import "@/components/HomePage/homepage.css";

export const HomePage = (): JSX.Element => {
    const router = useRouter();
    const handleGetStartedClick = () => {
      router.push('/agreecondition');
    };

    return (
      <div className="homePage-index">
        <div className="homePage-overlap-wrapper">
          <div className="homePage-overlap">
            <img
              className="homePage-BG"
              alt="Bg"
              src="bg-10@1x.png"
            />
            <img
              className="homePage-elements"
              alt="Elements"
              src="elements-04-2@1x.png"
            />
            <div className="homePage-text-wrapper">Welcome to </div>
            <div className="homePage-component">
              <div className="homePage-div" onClick={handleGetStartedClick}>GET STARTED</div>
              <div className="homePage-ellipse" />
            </div>
            <div className="homePage-group">
              <div className="homePage-overlap-group">
                <p className="homePage-p">Already have an account? Login</p>
                <div className="homePage-rectangle" />
              </div>
            </div>
            <div className="homePage-group-2" />
            <div className="homePage-group-wrapper">
              <div className="homePage-overlap-group-wrapper">
                <div className="homePage-overlap-group-2">
                  <div className="homePage-group-3" />
                  <div className="homePage-group-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
