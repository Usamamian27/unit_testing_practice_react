import React from "react";
import ReactDOM from "react-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyComponent from "./components/MyComponent";
configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import App from "./App";
// import { sum } from "./App";
const sum = jest.fn((x, y) => x + y);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Fake Test", () => {
  console.log("usama");
});

it("sums numbers", () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
const myBeverage = {
  delicious: true,
  sour: false
};

describe("my beverage", () => {
  test("is delicious", () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test("is not sour", () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

describe("MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<MyComponent />);
  });
  it("should render initial layout", () => {
    // when
    const component = shallow(<MyComponent />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
  it("should create an entry in component state", () => {
    // given
    const component = shallow(<MyComponent />);
    const form = component.find("input");
    // when
    form.props().onChange({
      target: {
        name: "myName",
        value: "myValue"
      }
    });
    // then
    expect(component.state("input")).toBeDefined();
  });
  it("should create an entry in component state with the event value", () => {
    // given
    const component = shallow(<MyComponent />);
    const form = component.find("input");
    // when
    form.props().onChange({
      target: {
        name: "myName",
        value: "myValue"
      }
    });
    // then
    expect(component.state("input")).toEqual("myValue");
  });
});
