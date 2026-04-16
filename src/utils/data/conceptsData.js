import propsImg from "../../assets/config.png";
import stateImg from "../../assets/state-mgmt.png";
import componentsImg from "../../assets/components.png";
import jsxImg from "../../assets/jsx-ui.png";

/**
 * @Array of concept information objects for the examples snippet
 * @type {Array<{title: string, description: string, img: string}>}
 */
export const conceptsInfo = [
  {
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
    img: componentsImg,
  },
  {
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
    img: propsImg,
  },
  {
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    img: stateImg,
  },
  {
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    img: jsxImg,
  },
];
