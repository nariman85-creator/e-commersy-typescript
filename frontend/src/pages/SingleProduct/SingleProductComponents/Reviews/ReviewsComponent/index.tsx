import React, { useEffect } from "react";
import { Buttons } from "../../../../../components/Buttons";
import { Icon } from "../../../../../components/icons/Icon";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { $, showHandleModal } from "../../../../../utils/helpers";
import "./Review.scss";

export const Review = () => {
  useEffect(() => {
    const overlay = $(".reviews--overlay");
    const close = $(".review-content--close__icon");
    if (close === null) return;
    document.addEventListener("click", showHandleModal(overlay, close));
    return document.removeEventListener(
      "click",
      showHandleModal(overlay, close)
    );
  }, []);

  return (
    <div className="review-wrapper review">
      <div className="review-content">
        <i className="review-content--close__icon-wrap">
          <Icon icon="close" className="review-content--close__icon" />
        </i>
        <div className="review-head">
          <SectionTitle text="Leave a review" className="review-head--title" />
        </div>
        <div className="review-input__wrap">
          <form action="#" className="review-input--form">
            <div className="review-input--inner">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="review-input--inner">
              <label htmlFor="email">email</label>
              <input type="email" id="email" placeholder="Your working emai" />
            </div>
            <div className="review-input--inner">
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                id="rating"
                list="rating--list"
                placeholder="Choose rating"
              />
              <datalist id="rating--list">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="">1</option>
              </datalist>
            </div>
            <div className="review-input--inner">
              <div className="review-input__file--box">
                <SectionTitle
                  text="Upload a photo or video (optional"
                  className="review-input__file--text"
                />
                <div className="review-input__file--body">
                  <div className="review-input__file--body-inner">
                    <Icon icon="upload" className="upload--icon" />
                  </div>
                  <div className="review-input__file--body-inner">
                    <SectionTitle
                      text="Drag and drop here to upload"
                      className="review-input__file--body-text"
                    />
                  </div>
                  <div className="review-input__file--body-inner">
                    <label
                      htmlFor="file-input"
                      className="review-input__file--body-inner__input"
                    >
                      Or select file
                    </label>
                    <input
                      type="file"
                      name=""
                      id="file-input"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="review-input--inner">
              <label htmlFor="review-text">Review</label>
              <textarea
                name="review-text"
                id="review-text"
                placeholder="Your working email"
              ></textarea>
            </div>
            <Buttons
              text="Submit a review"
              type="submit"
              clasname="review-input--form-btn"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
