// src/components/Button/Button.stories.jsx
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  args: {
    label: "Click Me",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Can't Click",
    disabled: true,
  },
};