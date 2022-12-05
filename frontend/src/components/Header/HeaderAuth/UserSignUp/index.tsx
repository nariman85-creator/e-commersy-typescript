import React, { ChangeEvent, useEffect, useState } from "react";
import "./UserSignUp.scss";
import { Link } from "react-router-dom";
import { Buttons } from "../../../Buttons";
import { Icon } from "../../../icons/Icon";
import { Input } from "../../../Input";
import { SectionTitle } from "../../../SectionTitle";
import { $, showHandleModal } from "../../../../utils/helpers";
import { useDispatch } from "react-redux";
import { fetchUserSignUpLoadingState } from "../../../../store/ducks/users/userOtherTypes/signUp/userSignUpAction";

export const UserSignUp: React.FC = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [signUpState, setSignUpState] = useState<{ [key: string]: string }>({
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const formSubmitHandle = (e: React.MouseEvent) => {
    e.preventDefault();

    if (
      signUpState.password === signUpState.confirmPassword &&
      signUpState.firstname !== "" &&
      signUpState.email !== ""
    ) {
      setDisabled(true);
      dispatch(fetchUserSignUpLoadingState(signUpState));
      setSignUpState({
        firstname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setDisabled(false);
    }
  };

  useEffect(() => {
    const overlay: HTMLDivElement | null = document.querySelector(".overlay");
    const close: HTMLElement | null = $(".close-icon");
    if (close !== null) {
      document.addEventListener("click", showHandleModal(overlay, close));
      return document.removeEventListener(
        "click",
        showHandleModal(overlay, close)
      );
    }
  }, [disabled]);
  return (
    <div className="sign sign-in__wrap">
      <div className="sign-container">
        <div className="sign-content">
          <div className="tooltip">
            <div className="tooltip-body">
              <span className="tooltip-text"></span>
            </div>
          </div>
          <div className="sign-content--head">
            <div className="sign-close-wrap">
              <Icon icon="close" className="close-icon" />
            </div>
            <SectionTitle
              text="Sign up"
              className="sign-content--head__title"
            />
            <p className="sign-content--head__desc">
              Registration takes less than a minute but gives you full control
              over your orders.
            </p>
          </div>
          <div className="sign-body">
            <form action="" className="sign-form">
              <div className="sign-form--item input--dfdr">
                <label htmlFor="name">Full Name</label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  id="fullname"
                  clasname="form-sign--input"
                  value={signUpState.firstname}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSignUpState((prev) => ({
                      ...prev,
                      firstname: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="sign-form--item input--dfdr">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  placeholder="Your working email"
                  id="email"
                  clasname="form-sign--input"
                  value={signUpState.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSignUpState((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="sign-form--item input--dfdr sign-password">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  placeholder="Your working password"
                  id="password"
                  clasname="form-sign--input"
                  value={signUpState.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSignUpState((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                <Icon icon="ace" className="sign-pass--icon" />
              </div>
              <div className="sign-form--item input--dfdr sign-password">
                <label htmlFor="password">ConfirmPassword</label>
                <Input
                  type="password"
                  placeholder="Your confirm password"
                  id="confirmPassword"
                  clasname="form-sign--input"
                  value={signUpState.confirmPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSignUpState((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
                <Icon icon="ace" className="sign-pass--icon" />
              </div>

              <div className="sign-form--item df">
                <div className="checbox-wrap df">
                  <Input type="checkbox" id="sign-checkbox" />
                  <span className="sign-checkbox--text">Remember me</span>
                </div>
              </div>
              <div className="sign-form--item">
                <Buttons
                  type="submit"
                  text="Sign up"
                  clasname="submit--btn sign-form--btn"
                  onClick={formSubmitHandle}
                  disabled={disabled}
                />
                <div className="sign-submit--text">
                  <span>Already have an account? </span>
                  <Link to={"#"}> Sign in</Link>
                </div>
              </div>
            </form>
            <div className="sign-body__footer">
              <div className="sign-body__footer--head">
                <SectionTitle
                  text="Or sign in with"
                  className="sign-body__footer--text"
                />
              </div>
              <div className="sign-body__footer-social--wrap df">
                <ul className="list--reset sign-footer__social--list">
                  <li className="sign-footer__social--item ">
                    <Link to={"#"}>
                      <span className="sign-social--icon fb bg--image">
                        <Icon icon="facebook" className="googles" />
                      </span>
                    </Link>
                  </li>
                  <li className="sign-footer__social--item active">
                    <Link to={"#"}>
                      <span className="sign-social--icon goog bg--image">
                        <Icon icon="google" className="googles" />
                      </span>
                    </Link>
                  </li>{" "}
                  <li className="sign-footer__social--item">
                    <Link to={"#"}>
                      <Icon icon="twitter" className="googles" />
                    </Link>
                  </li>{" "}
                  <li className="sign-footer__social--item">
                    <Link to={"#"}>
                      <span className="sign-social--icon  bg--image">
                        <Icon icon="linkedin" className="googles" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
