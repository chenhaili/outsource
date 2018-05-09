/*响应式设置*/

// 设计图尺寸
var design = 360;
// 基准值
var base = 10;

// 屏幕变化时, 要动态设置 html 根字体大小
// 当前屏幕 / 设计图 = 当前屏幕根字体大小 / 基准值

function responsive() {
  var pageWidth = window.innerWidth;
  // 如果屏幕太小, 或者屏幕太大, 不需要适配
  if (pageWidth <= 320) {
    pageWidth = 320;
  }
  
  if (pageWidth >= 750) {
    pageWidth = 750;
  }
  var size = pageWidth / design * base;
  // 设置给 html 根, documentElement 指 html
  document.documentElement.style.fontSize = size + "px";
}

// 一进入屏幕, 调用 responsive
responsive();

// 当前屏幕根字体大小 = 当前屏幕 / 设计图  * 基准值
window.addEventListener("resize", responsive);

