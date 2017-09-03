// ==UserScript==
// @name         Auto Accept SSA for Steam Web Activate
// @namespace    Steam Auto Accept SSA
// @version      0.1
// @description  Automatically Accept the STEAM® SUBSCRIBER AGREEMENT when using Steam Web Activate
// @author       Semidio
// @include      /^https:\/\/store\.steampowered\.com\/account\/registerkey.*$/
// @grant        none
// @run-at       document-end
// ==/UserScript==
document.getElementById('accept_ssa').click();