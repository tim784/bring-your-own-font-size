// ==UserScript==
// @name        Bring Your Own Font Size
// @match       https://www.empornium.sx/*
// @match       https://www.empornium.is/*
// @grant       none
// @version     1.0
// @author      timdotcom
// @description 8/21/2024, 1:11:42 PM
// ==/UserScript==

(function () {
  "use strict";

  const elements = document.querySelectorAll(
    "body, input, select, textarea, button"
  );
  elements.forEach((element) => {
    element.style.fontSize = "inherit";
  });
})();
