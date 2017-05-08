import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/g-component.css";
import messages from "../lang/default-messages";

export default class GComponent extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

GComponent.displayName = "GComponent";

GComponent.propTypes = {};

GComponent.defaultProps = {};
