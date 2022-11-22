import Input from "./Input.jsx";
import React from "react";
export default {
  title: "Input",
  component: Input,
  // args: {
  //   children: Input,
  // },
};

// const Template = (args) => <Input {...args} />;

// export const Small = Template.bind({});
// export const Medium = Template.bind({});
// export const Large = Template.bind({});
// Small.args = {
//   size: "small",
//   placeholder: "Small Size",
// };
// Medium.args = {
//   size: "medium",
//   placeholder: "Medium  Size",
// };
// Large.args = {
//   size: "large",
//   placeholder: "Large  Size",
// };

export const Small = () => <Input size="small" placeholder="Small Size" />;
export const Medium = () => <Input size="medium" placeholder="Medium  Size" />;
export const Large = () => <Input size="large" placeholder="Large Size" />;
//
