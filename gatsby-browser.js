import FontFaceObserver from "fontfaceobserver";
import typography, { updateTypography } from "@utils/typography";

const font = new FontFaceObserver("Lato");
font
  .load()
  .then(function fontLoaded() {
    updateTypography({
      bodyFontFamily: ["Lato"]
    });
  })
  .catch(function fontLoadFailed(e) {
    console.error("lato font failed to load", e);
  });
