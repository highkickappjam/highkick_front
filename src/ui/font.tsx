import { globalFontFace, globalStyle } from "@vanilla-extract/css";

globalFontFace("Pretendard", {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2")',
  fontWeight: "normal",
  fontStyle: "normal",
  fontDisplay: "swap",
});
globalStyle("body", {
  fontFamily: "Pretendard",
});

export const font = {

  
};
