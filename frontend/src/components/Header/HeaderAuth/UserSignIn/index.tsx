import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserSignInLoadingState } from "../../../../store/ducks/users/userOtherTypes/signIn/userSignInAction";
import { IUserProps, MYOmit } from "../../../../store/ducks/users/userTypes";
import {
  $,
  localStorageGetItem,
  showHandleModal,
} from "../../../../utils/helpers";
import { Buttons } from "../../../Buttons";
import { Icon } from "../../../icons/Icon";
import { Input } from "../../../Input";
import { SectionTitle } from "../../../SectionTitle";
import "./UserSignIn.scss";

export const UserSignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const user = localStorageGetItem("user");

  const [signInState, setSignInState] = useState<
    MYOmit<IUserProps, "email" | "password">
  >({
    email: "",
    password: "",
  });
  const formSubmitHandle = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(event);

    if (signInState.email !== "" && signInState.password !== "") {
      dispatch(fetchUserSignInLoadingState(signInState));
      setDisabled(true);
      setSignInState({ email: "", password: "" });
    }
    setDisabled(false);
  };

  useEffect(() => {
    const overlay: HTMLDivElement | null = document.querySelector(".overlay");
    const close: HTMLElement | null = $(".close-icon");
    if (user !== [] && overlay !== null) {
      overlay.style.display = "none";
    }
    if (close !== null) {
      document.addEventListener("click", showHandleModal(overlay, close));
      return document.removeEventListener(
        "click",
        showHandleModal(overlay, close)
      );
    }
  }, []);

  return (
    <div className="sign sign-in__wrap">
      <div className="sign-container">
        <div className="sign-content">
          <div className="sign-content--head">
            <div className="sign-close-wrap">
              <Icon icon="close" className="close-icon" />
            </div>
            <SectionTitle
              text="Sign in"
              className="sign-content--head__title"
            />
            <p className="sign-content--head__desc">
              Sign in to your account using email and password provided during
              registration.
            </p>
          </div>
          <div className="sign-body">
            <form action="" className="sign-form">
              <div className="sign-form--item input--dfdr">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  placeholder="Your working email"
                  id="email"
                  clasname="form-sign--input"
                  value={signInState.email}
                  onChange={(e) =>
                    setSignInState((prev) => {
                      return {
                        ...prev,
                        email: e.target.value,
                      };
                    })
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
                  value={signInState.password}
                  onChange={(e) =>
                    setSignInState((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                <Icon icon="ace" className="sign-pass--icon" />
              </div>
              <div className="sign-form--item df">
                <div className="checbox-wrap df">
                  <Input type="checkbox" id="sign-checkbox" />
                  <span className="sign-checkbox--text">Keep me signed in</span>
                </div>
                <div className="sign-check__password--text">
                  <Link to={"#"}>Forgot password?</Link>
                </div>
              </div>
              <div className="sign-form--item">
                <Buttons
                  type="submit"
                  text="Sign in"
                  clasname="submit--btn sign-form--btn"
                  disabled={disabled}
                  onClick={formSubmitHandle}
                />
                <div className="sign-submit--text">
                  <span>Don't have an account?</span>
                  <Link to={"#"}> Sign up</Link>
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
