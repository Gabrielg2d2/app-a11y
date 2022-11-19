export async function axeAccessibilityReports() {
  // Alternatively, to test on the client side only, you can use && typeof window !== "undefined" or useEffect values.
  // if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  if (process.env.NODE_ENV === "development") {
    const axe = await require("@axe-core/react");
    const React = await require("react");
    const ReactDOM = await require("react-dom");

    axe(React, ReactDOM, 1000);
  }
}
