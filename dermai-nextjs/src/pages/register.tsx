import React, {useState} from "react";
import "@/components/Register/register.css";


export const Register = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  return (
    <div className="register-index">
      <div className="register-overlap-wrapper">
        <div className="register-overlap">
          <img
            className="register-elements"
            alt="Elements"
            src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/elements-03-10@1x.png"
          />
          <img
            className="register-BG-register"
            alt="Bg register"
            src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/bg--register--1@1x.png"
          />
          <div className="register-rectangle" />
          <div className="register-component">
            <div className="register-overlap-group">
              <div className="register-group">
                <div className="register-overlap-group">
                  <div className="register-div" />
                  <div className="register-rectangle-2" />
                </div>
              </div>
              <div className="register-text-wrapper">NEXT</div>
            </div>
          </div>
          <div className="register-rectangle-3" />
          <div className="register-group-2">
            <div className="register-ellipse" />
            <div className="register-ellipse-2" />
            <div className="register-ellipse-3" />
            <div className="register-ellipse-4" />
          </div>
          <div className="register-text-wrapper-2">Register</div>
          <p className="register-i-agree-with-term">
            I agree with term conditions &amp; <br />
            privacy policy
          </p>
          <div className="register-overlap-group-wrapper">
            <div className="register-overlap-2">
              <div className="register-subtraction-wrapper">
                <img
                  className="register-subtraction"
                  alt="Subtraction"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/subtraction-2@1x.png"
                />
              </div>
              <input className="register-name"
                    placeholder="Name"
               />
            </div>
          </div>
          <div className="register-text-wrapper-3">Allow notifications</div>
          <div className="register-div-wrapper">
            <div className="register-overlap-2">
              <div className="register-img-wrapper">
                <img
                  className="register-img"
                  alt="Subtraction"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/subtraction-2-1@1x.png"
                />
              </div>
              <input className="register-input" 
                    placeholder="Height"/>
              <div className="register-group-3">
                <img
                  className="register-polygon"
                  alt="Polygon"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/polygon-1-1@1x.png"
                />
                <img
                  className="register-polygon-2"
                  alt="Polygon"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/polygon-2-1@1x.png"
                />
              </div>
            </div>
          </div>
          <div className="register-path-wrapper">
            <img
              className="register-path"
              alt="Path"
              src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/path-71-10@1x.png"
            />
          </div>
          <div className="register-component-2">
            <div className="register-overlap-2">
              <div className="register-img-wrapper">
                <img
                  className="register-img"
                  alt="Subtraction"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/subtraction-2-1@1x.png"
                />
              </div>
              <input className="register-input" 
                      placeholder="Gender" />
              <div className="register-group-3">
                <img
                  className="register-polygon"
                  alt="Polygon"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/polygon-1-1@1x.png"
                />
                <img
                  className="register-polygon-2"
                  alt="Polygon"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/polygon-2-1@1x.png"
                />
              </div>
            </div>
          </div>
          <div className="register-component-3">
            <div className="register-overlap-2">
              <div className="register-img-wrapper">
                <img
                  className="register-img"
                  alt="Subtraction"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/subtraction-2-1@1x.png"
                />
              </div>
              <input className="register-weight" placeholder="Weight Kg"/>
              <div className="register-group-3">
                <img
                  className="register-polygon"
                  alt="Polygon"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/polygon-1-1@1x.png"
                />
                <img
                  className="register-polygon-2"
                  alt="Polygon"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/polygon-2-1@1x.png"
                />
              </div>
            </div>
          </div>
          <div className="register-component-4">
            <img
              className="path"
              alt="Path"
              src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/path-71-10@1x.png"
            />
          </div>
          <div className="register-component-5">
            <div className="register-overlap-2">
              <div className="register-img-wrapper">
                <img
                  className="register-img"
                  alt="Subtraction"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/subtraction-2-1@1x.png"
                />
              </div>
              <input className="register-age" placeholder="Age"/>
              <div className="register-group-3">
                <img
                  className="register-polygon"
                  alt="Polygon"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/polygon-1-1@1x.png"
                />
                <img
                  className="register-polygon-2"
                  alt="Polygon"
                  src="https://cdn.animaapp.com/projects/65a16855c864dfeca2380544/releases/65a40a309aa2a391615fe8ec/img/polygon-2-1@1x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register
