// ==UserScript==
// @name         試作品テスト感想投稿フォーム
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       K36
// @match        https://www.mercari.com/*
// @run-at       context-menu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const form = "https://docs.google.com/forms/d/1Qe9ybsLKyIImnN3EmEOBHA5uiFCewkj13LnVSIEkzcY/";
    location.assign(form);
})();
