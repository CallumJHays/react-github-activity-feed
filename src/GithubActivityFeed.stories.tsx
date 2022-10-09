// @ts-nocheck
// TODO: figure out how to get typings with args external to the component working

import React from "react";
import { GithubActivityFeed } from "./GithubActivityFeed";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// @ts-ignore
import lightThemeCSS from "!css-loader!../src/light-theme.css";
// @ts-ignore
import darkThemeCSS from "!css-loader!../src/dark-theme.css";

export default {
  component: GithubActivityFeed,

  argTypes: {
    repo: {
      table: { category: "props" },
      description: "Optional repo name to filter by",
      control: {
        type: "radio",
        options: ["*", "react-github-activity-feed", "callumjhays.github.io"],
      },
    },
    user: {
      table: { category: "props" },
    },
    limit: {
      table: { category: "props" },
    },

    theme: { table: { category: "theme" }, control: "select", options: ["light", "dark"] },
    width: { table: { category: "parent" }, control: "number" },
    height: { table: { category: "parent" }, control: "number" },
    resizeable: { table: { category: "parent" }, control: "boolean" },
  },
} as ComponentMeta<typeof GithubActivityFeed>;

const Template: ComponentStory<typeof GithubActivityFeed> = ({
  width,
  height,
  resizeable,
  theme,
  ...props
}) => (
  <>
    <style>
      {/* kudos https://github.com/storybookjs/storybook/discussions/17062#discussioncomment-1859248 */}
      {(theme == "light" ? lightThemeCSS : darkThemeCSS).toString()}
    </style>
    <div
      style={{
        resize: resizeable ? "both" : "none",
        overflow: "hidden",
        width,
        height,
        minWidth: 270,
        minHeight: 200
      }}
    >
      <GithubActivityFeed {...props} />
    </div>
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  // props
  user: "callumjhays",
  limit: 20,
  repo: "*",

  // other
  theme: "light",
  resizeable: true,
  width: 500,
  height: 400
};
