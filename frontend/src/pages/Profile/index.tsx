import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Icon } from "../../components/icons/Icon";
import { $, localStorageGetItem } from "../../utils/helpers";
import { useLocations } from "../../utils/hooke";
import "./Profile.scss";
import { MyOrder } from "./ProfileComponents/MyOrder";
import { MyProfile } from "./ProfileComponents/MyProfile";
import { MyReviews } from "./ProfileComponents/MyReviews";
import { RecentlyViewed } from "./ProfileComponents/RecentlyViewed";
import { WishList } from "./ProfileComponents/WishList";
const PageWrapper: { [key: number]: ReactElement } = {
  0: <MyProfile />,
  1: <MyOrder />,
  2: <WishList />,
  3: <RecentlyViewed />,
  4: <MyReviews />,
};

export const Profile = () => {
  const { pathArr } = useLocations();
  const [pageKey, setPageKey] = useState(0);
  const navigate = useNavigate();
  const user = localStorageGetItem("user");

  if (!user.token) {
    navigate("/");
  }
  const fillBackgroundHandle = (e: MouseEvent, list: ChildNode) => {
    if (!list) return;
    list.childNodes.forEach((item, index, arr) => {
      arr.forEach((elem, idx) => {
        const liElem = elem as HTMLLIElement;
        if (liElem.classList.contains("active")) {
          liElem.classList.remove("active");
        }

        if (e.target === liElem) {
          liElem.classList.add("active");
        }
      });
    });
  };
  useEffect(() => {
    const list = $(".profile-control__list");
    list?.addEventListener("click", (e: MouseEvent) =>
      fillBackgroundHandle(e, list)
    );
  }, []);

  return (
    <div className="profile profile-wrap">
      <Breadcrumbs pathArr={pathArr} rightSelect={false} />
      <div className="profile-wrap__body">
        <div className="profile-container container df">
          <div className="profile-col col">
            <div className="profile-control__box">
              <div className="profile-control__box--head">
                <div className="profile-user__name profile--title">
                  <h3>
                    {user?.data?.firstname
                      ? user.data.firstname + " " + user.data.lastname
                      : ""}
                  </h3>
                </div>
                <div className="profile-user__email">
                  <h5>{user?.data?.email ? user.data.email : ""}</h5>
                </div>
              </div>
              <ul className="list--reset profile-control__list">
                <li
                  className="profile-control__item df active"
                  onClick={() => setPageKey(0)}
                >
                  <Icon icon="profile" className="profile-control--icon" />
                  <span className="profile-control--item__text">
                    My profile
                  </span>
                </li>
                <li
                  className="profile-control__item df"
                  onClick={() => setPageKey(1)}
                >
                  <Icon icon="bag" className="profile-control--icon" />
                  <span className="profile-control--item__text">My orders</span>
                </li>
                <li
                  className="profile-control__item df"
                  onClick={() => setPageKey(2)}
                >
                  <Icon icon="heart" className="profile-control--icon" />
                  <span className="profile-control--item__text">Wishlist</span>
                </li>
                <li
                  className="profile-control__item df"
                  onClick={() => setPageKey(3)}
                >
                  <Icon icon="eye" className="profile-control--icon" />
                  <span className="profile-control--item__text">
                    Recently viewed
                  </span>
                </li>
                <li
                  className="profile-control__item df"
                  onClick={() => setPageKey(4)}
                >
                  <Icon icon="star" className="profile-control--icon" />
                  <span className="profile-control--item__text">
                    My reviews
                  </span>
                </li>
                <li
                  className="profile-control__item df"
                  onClick={() => {
                    localStorage.removeItem("user");
                  }}
                >
                  <Icon icon="logout" className="profile-control--icon" />
                  <span className="profile-control--item__text">Sign out</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-col col">{PageWrapper[pageKey]}</div>
        </div>
      </div>
    </div>
  );
};
