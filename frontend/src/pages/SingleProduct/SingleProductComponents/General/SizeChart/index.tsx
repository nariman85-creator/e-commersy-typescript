import React, {
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { Buttons } from "../../../../../components/Buttons";
import { Icon } from "../../../../../components/icons/Icon";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { $, showHandleModal } from "../../../../../utils/helpers";
import { useFadePage } from "../../../../../utils/hooke";
import "./SizeChart.scss";

interface SizeChartProps {
  showModalhandle: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}

export const SizeChart: React.FC<SizeChartProps> = memo(
  ({ showModalhandle, showModal }) => {
    const [_, fadeInPage] = useFadePage();
    const btnGroupWrapRef = useRef(null);

    useEffect(() => {
      const overlay = $(".size--overlay");
      const close = $(".size-modal--close__icon-wrap");
      if (!close) return;
      document.addEventListener("click", showHandleModal(overlay, close));
      return document.removeEventListener(
        "click",
        showHandleModal(overlay, close)
      );
    }, []);

    return (
      <div className="size-modal__wrap size-modal">
        <div className="size-modal__container">
          <div className="size-modal__content">
            <i className="size-modal--close__icon-wrap">
              <Icon icon="close" className="size-modal--close__icon" />
            </i>
            <div className="size-modal__head">
              <SectionTitle text="Size chart" className="size-modal--title" />
            </div>
            <div className="size-modal__btn-group df">
              <ul
                className="list--reset size-modal__btn--list df"
                ref={btnGroupWrapRef}
              >
                <li className="size-modal__btn--item">
                  <Buttons
                    text="women"
                    clasname="size-modal--btn active"
                    onClick={(e) =>
                      fadeInPage(
                        0,
                        btnGroupWrapRef || [],
                        ".size-modal--btn"
                      )(e)
                    }
                  />
                </li>
                <li className="size-modal__btn--item">
                  <Buttons
                    text="Men`s"
                    clasname="size-modal--btn"
                    onClick={(e) =>
                      fadeInPage(
                        1,
                        btnGroupWrapRef || [],
                        ".size-modal--btn"
                      )(e)
                    }
                  />
                </li>
                <li className="size-modal__btn--item">
                  <Buttons
                    text="Kid`s"
                    clasname="size-modal--btn"
                    onClick={(e) =>
                      fadeInPage(
                        2,
                        btnGroupWrapRef || [],
                        ".size-modal--btn"
                      )(e)
                    }
                  />
                </li>
              </ul>
            </div>
            <div className="size-chart__global-metric">
              <div className="global-metric__table-wrap">
                <div className="global-metric__head">
                  <SectionTitle
                    text="footwear"
                    className="global-metric--title"
                  />
                </div>

                <table className="global-metric__table">
                  <tbody>
                    <tr>
                      <th>Europe</th>
                      <td>35</td>
                      <td>36</td>
                      <td>37</td>
                      <td>38</td>
                      <td>39</td>
                      <td>40</td>
                      <td>41</td>
                      <td>42</td>
                    </tr>
                    <tr>
                      <th>usa</th>
                      <td>5</td>
                      <td>6</td>
                      <td>6.5</td>
                      <td>7</td>
                      <td>7.5</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th>United Kingdom</th>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th>China</th>
                      <td>230/83</td>
                      <td>235/84</td>
                      <td>240/85</td>
                      <td>245/86</td>
                      <td>255/87</td>
                      <td>260/88</td>
                      <td>265/89</td>
                      <td>275/90</td>
                    </tr>
                    <tr>
                      <th>Russia</th>
                      <td>35</td>
                      <td>36</td>
                      <td>37</td>
                      <td>38</td>
                      <td>39</td>
                      <td>40</td>
                      <td>41</td>
                      <td>42</td>
                    </tr>
                    <tr>
                      <th>Italy</th>
                      <td>35</td>
                      <td>36</td>
                      <td>37</td>
                      <td>38</td>
                      <td>39</td>
                      <td>40</td>
                      <td>41</td>
                      <td>42</td>
                    </tr>
                    <tr>
                      <th>South Korea</th>
                      <td>230</td>
                      <td>235</td>
                      <td>240</td>
                      <td>245</td>
                      <td>250</td>
                      <td>255</td>
                      <td>260</td>
                      <td>265</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="global-metric__footer equivalence">
                <div className="global-metric__equivalence df ">
                  <span className="equivalence-panel--text">
                    I want to see size equivalence in:
                  </span>
                  <Buttons text="cm" clasname="equivalence--btn" />
                  <span className="equivalence-panel--text-incher">Inches</span>
                </div>
                <div className="global-metric__equivalence--panel df">
                  <div className="equivalence--panel--text">
                    <h3>Equivalence in centimetres</h3>
                  </div>
                  <ul className="list--reset equivalence-list df">
                    <li className="equivalence-item equivalence-item--text">
                      Foot length
                    </li>
                    <li className="equivalence-item">22.4 cm</li>
                    <li className="equivalence-item">23 cm</li>
                    <li className="equivalence-item">23.6 cm</li>
                    <li className="equivalence-item">24.3 cm</li>
                    <li className="equivalence-item">24.9 cm</li>
                    <li className="equivalence-item">25.5 cm</li>
                    <li className="equivalence-item">26.2 cm</li>
                    <li className="equivalence-item">26.8 cm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
