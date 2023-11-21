// ==UserScript==
// @name         Scroll ECP's
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mod layout script for your mod loader
// @author       You
// @match        https://starblast.io/*
// @icon         https://starblast.io/static/img/icon64.png
// @grant        none
// ==/UserScript==

function scrollECP(isClient) {
    let scrolls = ["badge", "finish", "laser"], previewScrolls = [["ecpverifiedlogo", "badge"], ["shippreview", "finish"]];

    let fireEvent = function (element, event, isClient) {
        event.preventDefault();
        if (event.deltaY != 0 && element != null) {
            let dest = element.querySelector(".fa-caret-" + (event.deltaY > 1 ? "left" : "right"));
            if (isClient) dest.dispatchEvent(new MouseEvent("mousedown"));
            else dest.click()
        }
    };

    for (let use = 0; use < scrolls.length; ++use) {
        let element = document.querySelector("div[data-type=" + scrolls[use] + "]");
        if (element != null && element.getAttribute("wheel-added") != "true") {
            element.setAttribute("wheel-added", "true");
            element.querySelector(".title").addEventListener('wheel', function (e) {
                fireEvent(element, e, isClient)
            })
        }
    }

    for (let kan = 0; kan < previewScrolls.length; ++kan) {
        let element = document.querySelector("." + previewScrolls[kan][0]);
        if (element != null && element.getAttribute("wheel-added") != "true") {
            let dest = document.querySelector("div[data-type=" + previewScrolls[kan][1] + "]");
            if (dest != null) {
                element.setAttribute("wheel-added", "true");
                element.addEventListener("wheel", function (e) {
                    fireEvent(dest, e, isClient)
                });
            }
        }
    }
}


