import React, { useState } from "react";
import Page from "../components/Page/Page";
import clients from "../data/clients";
import { workDetail } from "../utils/workDetail";

const Work = () => {
  const [ele, setEle] = useState(null);
  const [showButton, setShowButton] = useState(null);

  // const details = {
  //   logoPath: "/logo.svg",
  // };

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
        element.style.zIndex = to.zIndex ? to.zIndex : "";
        element.style.oveflow = "scroll";
        element.style.minHeight = to.height === "100vh" ? "100vh" : "";
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

  const handleMe = async (e, client) => {
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

    // const {
    //   top: parentTop,
    //   left: parentLeft,
    //   width: parentWidth,
    //   height: parentHeight,
    // } = card.parentNode.getBoundingClientRect();

    await toggleExpansion(cloned, {
      top: "0px",
      left: "0px",
      width: "100vw",
      height: "100vh",
      zIndex: "100",
    });

    const content = workDetail(client);

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

    fadeContent(cloned, "0", 20);
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
      <div className="w-screen flex justify-center items-center">
        <div className="pt-40 h-full w-full lg:w-1000 flex justify-center items-center flex-col px-2 text-white mb-10">
          <h1 className="text-5xl mb-4">
            Our <span className="font-extrabold">Work</span>
          </h1>
          <div className="containerN p-10">
            {clients.map((client) => (
              <div
                className="box cursor-pointer"
                onClick={(e) => handleMe(e, client)}
              >
                <div className="content">
                  <img src={client.logoPath} alt="client" className="md:w-80" />
                  {/* <h3>Brand Name</h3> */}
                </div>
              </div>
            ))}
          </div>

          <button
            className={`btn top-10 border-2 focus:outline-none ${
              !showButton ? "hidden" : "text-white border-white"
            }`}
            onClick={removeFromDom}
          >
            Close
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Work;
