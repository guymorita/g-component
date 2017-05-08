/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import GComponent from "src/components/g-component";

describe("components/g-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<GComponent />);
      expect(component).to.not.be.null;
    });

  });

});
