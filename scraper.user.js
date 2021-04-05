// ==UserScript==
// @name         メルカリ取引情報をコピーする
// @namespace    k36.juswork@gmail.com
// @version      1.0
// @description  メルカリの取引ページからさまざまな情報をクリップボードにコピーします。
// @author       K36
// @match        https://www.mercari.com/jp/transaction/order_status/*
// @run-at       context-menu
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @updateURL    https://github.com/K036/mercari_userscript/raw/main/scraper.user.js
// ==/UserScript==

(function(){
    'use strict';
    ///情報を取得する
    //注文IDを取得する
    const orderID = $("body > div.default-container > main > div.l-side > section:nth-child(1) > div > ul > li:nth-child(6) > ul > li").text();
    //商品名と価格を取得
    const title_price = $("body > div.default-container > main > div.l-side > section:nth-child(1) > div > ul > li:nth-child(1) > ul > li > a > div").text();
    //郵便番号を取得する
    const postal_code_pre = $("body > div.default-container > main > div.l-side > section:nth-child(1) > div > ul > li:nth-child(7) > ul > li > div > p:nth-child(1)").text();
    //住所1を取得する
    const address1 = $("body > div.default-container > main > div.l-side > section:nth-child(1) > div > ul > li:nth-child(7) > ul > li > div > p:nth-child(2)").text();
    //住所2を取得する
    const address2 = $("body > div.default-container > main > div.l-side > section:nth-child(1) > div > ul > li:nth-child(7) > ul > li > div > p:nth-child(3)").text();
    //名前を取得する
    const name = $("body > div.default-container > main > div.l-side > section:nth-child(1) > div > ul > li:nth-child(7) > ul > li > div > p:nth-child(4) > span").text();
    //HNを取得
    const hn = $("body > div.default-container > main > div.l-side > section:nth-child(2) > div > a > figure > figcaption > div").text();

    ///データを整形
    //商品名と価格を整形
    const titleSplit = title_price.split(/\¥/)[0];
    const priceSplit = title_price.split(/\¥/)[1];
    const titleSplit2 = titleSplit.replace(/\s+/g,"")
    const priceSplit2 = priceSplit.replace(/\s+/g,"")
    const title = titleSplit2.replace(/\n/g,"");
    const price = priceSplit2.replace(/\n/g,"");
    const postal_code = postal_code_pre.replace(/〒/,"");
    //HNを整形
    const hn2 = hn.replace(/\s+/g,"");
    const HN = hn2.replace(/\n/,"")
    //各商品情報を配列で格納
    const array = [orderID,,,,,,,postal_code,address1,address2,name,HN,title,,,price];
    //情報をタブ区切りで格納
    const tab_sep = array.join("\t");
    //情報をクリップボードに書き込み
    navigator.clipboard.writeText(tab_sep);
})();
