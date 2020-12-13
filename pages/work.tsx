import React, { useState } from "react";
import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";

const Work = () => {
  const [ele, setEle] = useState(null);
  const [showButton, setShowButton] = useState(null);
  console.log(ele);
  const toggleExpansion = (element, to, duration = 350) => {
    return new Promise((res) => {
      requestAnimationFrame(() => {
        element.style.transition = `
          width ${duration}ms ease-in-out,
          height ${duration}ms ease-in-out,
          left ${duration}ms ease-in-out,
          top ${duration}ms ease-in-out
        `;

        console.log(to);

        element.style.top = to.top;
        element.style.left = to.left;
        element.style.width = to.width;
        element.style.height = to.height;
      });
      setTimeout(res, duration);
    });
  };

  const fadeContent = (element, opacity, duration = 300) => {
    return new Promise((res) => {
      [...element.children].forEach((child) => {
        requestAnimationFrame(() => {
          child.style.transition = `opacity ${duration}ms linear`;
          child.style.opacity = opacity;
        });
      });
      setTimeout(res, duration);
    });
  };

  const handleMe = async (e) => {
    setEle(e);
    console.log(e.currentTarget);
    const card = e.currentTarget;
    let cloned = card.cloneNode(true);
    console.log("cloned", cloned);
    const { top, left, width, height } = card.getBoundingClientRect();

    cloned.style.position = "fixed";
    cloned.style.top = top + "px";
    cloned.style.left = left + "px";
    cloned.style.width = width + "px";
    cloned.style.height = height + "px";

    console.log("parent node", card.parentNode.getBoundingClientRect());
    card.style.opacity = "0";

    card.parentNode.appendChild(cloned);
    setShowButton({
      card,
      cloned,
      top,
      left,
      width,
      height,
    });
    console.log("top", top, "left", left);
    console.log(cloned);

    fadeContent(cloned, "0").then(() => {
      [...cloned.children].forEach((child) => (child.style.display = "none"));
    });

    const {
      top: parentTop,
      left: parentLeft,
      width: parentWidth,
      height: parentHeight,
    } = card.parentNode.getBoundingClientRect();

    await toggleExpansion(cloned, {
      top: parentTop + "px",
      left: parentLeft + "px",
      width: parentWidth + "px",
      height: parentHeight + "px",
    });

    const content = "some content";

    cloned.style.display = "block";
    cloned.style.padding = "0";

    cloned.insertAdjacentHTML("afterbegin", content);
  };

  const removeFromDom = async () => {
    const { card, cloned, top, left, width, height } = showButton;

    setShowButton(null);

    cloned.style.removeProperty("display");
    cloned.style.removeProperty("padding");

    [...cloned.children].forEach((child) => {
      child.style.removeProperty("display");
    });

    // fadeContent(cloned, '0');
    //shrink card back

    await toggleExpansion(cloned, {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
    });

    card.style.removeProperty("opacity");
    cloned.remove();
  };

  return (
    <Page title="Flamy - Work">
      <FullPageDiv>
        <div className="h-full w-full flex justify-center items-center flex-col">
          <div
            className={` overflow-hidden text-white flex items-center justify-between flex-wrap w-full h-eighty md:w-4/5 lg:w-3/5 xl:w-2/5  border-2 border-white`}
          >
            <div
              className=" bg-white cursor-pointer bg-opacity-25 border-2 border-white p-2"
              onClick={(e) => handleMe(e)}
            >
              <img src="./bklyn-logo.png" alt="its a logo" />
            </div>

            <div
              className=" bg-white cursor-pointer bg-opacity-25 border-2 border-white p-2"
              onClick={(e) => handleMe(e)}
            >
              <img src="./bklyn-logo.png" alt="its a logo" />
            </div>
            <div
              className=" bg-white cursor-pointer bg-opacity-25 border-2 border-white p-2"
              onClick={(e) => handleMe(e)}
            >
              <img src="./bklyn-logo.png" alt="its a logo" />
            </div>
          </div>

          <button
            className={`top-10 border-2 focus:outline-none ${
              !showButton
                ? "text-transparent border-transparent"
                : "text-white border-white"
            }`}
            onClick={removeFromDom}
          >
            Close
          </button>
        </div>
      </FullPageDiv>
    </Page>
  );
};

export default Work;
