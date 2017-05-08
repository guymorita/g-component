/*@flow*/

import React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import Demo from "electrode-demo-index";

import * as libraryScope from "../src/index";

const locale = "en";
const messages = require(`../src/lang/${locale}.json`);
const localeData = require(`react-intl/locale-data/${locale}`);

addLocaleData(localeData);

const localScope = { IntlProvider, messages, locale };

const components = [
  {
    title: "GuestList",
    examples: [
      {
        type: "playground",
        code: require("raw-loader!./examples/guest-list.example"),
        noRender: true
      }
    ]
  },
  {
    title: "RenderFriend",
    examples: [
      {
        type: "playground",
        code: require("raw-loader!./examples/render-friend.example"),
        noRender: true
      }
    ]
  },
  {
    title: "GComponent",
    examples: [
      {
        type: "playground",
        code: require("raw-loader!./examples/g-component.example"),
        noRender: true
      }
    ]
  }
];

const demo = () => (
  <Demo scope={localScope} libraryScope={libraryScope} components={components} />
);

export default demo;
