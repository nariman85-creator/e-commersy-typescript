import React from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Buttons } from "../../components/Buttons";
import { Input } from "../../components/Input";
import { SectionTitle } from "../../components/SectionTitle";
import "./TrackOrder.scss";

export const Trackorder = () => {
   const pathArray = JSON.parse(localStorage.getItem("pathArr") || "") || [];

  return (
    <div className="trackOrder-wrap trackOrder">
      <Breadcrumbs pathArr={pathArray} rightSelect={false} />
      <div className="trackOrder-container container">
        <div className="trackOrder-content__wrap df">
          <div className="trackOrder-content--item">
            <div className="trackOrder-item__head">
              <SectionTitle
                text="Track your order"
                className="trackOrder-head--title"
              />
              <p className="trackOrder-head--desc">
                This form allows you to search for tracking details from
                anywhere within Createx Tracking Service.
              </p>
            </div>
            <div className="trackOrder-item__middle">
              <label htmlFor="trackOrder--search">Order no</label>
              <div className="trackOrder-item__input--wrap df">
                <Input
                  type="text"
                  clasname="trackOrder-item--input"
                  id="trackOrder--search"
                />
                <Buttons text="Search" clasname="trackOrder-item--btn" />
              </div>
            </div>
            <div className="trackOrder-item__footer">
              <div className="df trackOrder-item__footer--box">
                <ul className="list--reset trackOrder-item__info--list">
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--text">Order No:</span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--text">Shiped via:</span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--text">Shipped on:</span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--text">Destination:</span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--text">
                      Expected date:
                    </span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--text">Status:</span>
                  </li>
                </ul>
                <ul className="list--reset trackOrder-item__info--list">
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--value">34BV66580K92</span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--value">UPS Ground</span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--value">
                      August 29, 2020, 6:00 pm
                    </span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--value">
                      London, United Kingdom
                    </span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--value">
                      September 4, 2020
                    </span>
                  </li>
                  <li className="trackOrder-info__item">
                    <span className="trackOrder-info--value">In Transit</span>
                  </li>
                </ul>
              </div>

              <div className="trackOrder-item--footer__checked">
                <Input type="checkbox" clasname="trackOrder-input--footer" />
                <span className="trackOrder--footer__input--text">
                  Notify me when order is delivered
                </span>
              </div>
            </div>
          </div>
          
          <div className="trackOrder-content--item">
            <div className="trackOrder-table__overlay">
              <table className="trackOrder-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Order Placed</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                  <tr>
                    <td>Documentation Prepared</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                  <tr>
                    <td>Booking Arranged</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                  <tr>
                    <td>Collected</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                  <tr>
                    <td>In Transit to Destination</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                  <tr>
                    <td>Order Placed</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                  <tr>
                    <td>Documentation Prepared</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                  <tr>
                    <td>Booking Arranged</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                  <tr>
                    <td>Collected</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                  <tr>
                    <td>In Transit to Destination</td>
                    <td>New York, USA</td>
                    <td>August 29, 2020</td>
                    <td>2:00 pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="trackOrder-table__overlay--inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
