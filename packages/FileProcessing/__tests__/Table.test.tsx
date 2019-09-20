import * as React from "react";
import { shallow } from "enzyme";
import Table from "../src/components/Table";

describe("Table package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });
});
