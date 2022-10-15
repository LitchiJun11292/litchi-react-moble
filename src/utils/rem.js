/**
 * 根据屏幕宽度，动态改变根节点的字体大小
 */
 (function (doc, win) {
    let docEl = doc.documentElement,
      resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
      recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 75 * (clientWidth / 750) + "px";
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false);
  })(document, window);
  