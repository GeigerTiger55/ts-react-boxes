import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function () {
  render(<Box
    id='123abc'
    height={3}
    width={2}
    backgroundColor='blue'
    remove={() => { }}
  />);
});

it("matches snapshot", function () {
  const { container } = render(<Box
    id='123abc'
    height={3}
    width={2}
    backgroundColor='blue'
    remove={() => { }}
  />);
  expect(container).toMatchSnapshot();
});

it("makes a div with matching properties", function () {
  const { container, debug } = render(<Box
    id='123abc'
    height={3}
    width={2}
    backgroundColor='blue'
    remove={() => { }}
  />);
  debug(container.querySelector('div[class="Box-box"]'));
  expect(
    container.querySelector('div[class="Box-box"]')
  ).toBeInTheDocument();
});
