import React from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Buttons } from "../../components/Buttons";
import { Icon } from "../../components/icons/Icon";
import { Input } from "../../components/Input";
import { SectionTitle } from "../../components/SectionTitle";
import "./ContactUs.scss";

export const ContactUs = () => {
  const pathArray = JSON.parse(localStorage.getItem("pathArr") || "") || [];

  return (
    <div className="contact-us">
      <Breadcrumbs pathArr={pathArray} rightSelect={false} />
      <div className="contact-us--container container">
        <div className="contact-us__body df">
          <div className="contact-us__col">
            <ul className="list--reset contact-us--list">
              <li className="contact-us--item">
                <span className="contuct-us--text">Contact Us</span>
              </li>
              <li className="contact-us--item">
                <span className="contuct-us--text">Outlet Stores</span>
              </li>
              <li className="contact-us--item">
                <span className="contuct-us--text">FAQ</span>
              </li>
            </ul>
          </div>
          <div className="contact-us__col">
            <div className="contact-us__head">
              <SectionTitle
                text="If you have any questions, concerns or comments, we would love to hear from you! Submit your query using any of the methods below:"
                className="contact-us--title"
              />
            </div>
            <div className="contact-us__content">
              <ul className="list--reset contact-us__detail-list">
                <li className="contact-us__detail-item">
                  <Icon icon="iphone" className="contact-us--icon" />
                  <span className="contact-us-phone contact--us__item-text">
                    (405) 555-0128
                  </span>
                </li>
                <li className="contact-us__detail-item">
                  <Icon icon="mail" className="contact-us--icon" />
                  <span className="contact-us-message contact--us__item-text">
                    Send us an email
                  </span>
                </li>{" "}
                <li className="contact-us__detail-item">
                  <Icon icon="messenger" className="contact-us--icon" />
                  <span className="contact-us-messenger contact--us__item-text">
                    Connect on Messenger
                  </span>
                </li>{" "}
                <li className="contact-us__detail-item">
                  <Icon icon="twitter" className="contact-us--icon" />
                  <span className="contact-us-phone contact--us__item-text">
                    Tweet us
                  </span>
                </li>
              </ul>
              <div className="contact-us__form-wrap">
                <div className="contact-us__form-wrap--head">
                  <h3>Or get in touch with us by completing the below form:</h3>
                </div>
                <form action="#">
                  <table className="contact-us--table">
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="fullname">Full Name*</label>
                          <Input
                            type="text"
                            placeholder="Your full name"
                            id="fullname"
                          />
                        </td>
                        <td>
                          <label htmlFor="email">email*</label>
                          <Input type="text" placeholder="email" id="email" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="phone">Phone</label>
                          <Input
                            type="text"
                            placeholder="Your phone number"
                            id="phone"
                          />
                        </td>
                        <td>
                          <label htmlFor="subject">Subject</label>
                          <Input
                            type="text"
                            placeholder="Title your message"
                            id="subject"
                          />
                        </td>
                      </tr>
                      <tr>
                          <label htmlFor="message">Message</label>
                          <textarea
                            name=""
                            id="message"
                            placeholder="Write your message here"
                          ></textarea>
                      </tr>
                    </tbody>
                  </table>
                  <Buttons
                    text="Send message"
                    type="submit"
                    clasname="contact-us__form--btn"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
