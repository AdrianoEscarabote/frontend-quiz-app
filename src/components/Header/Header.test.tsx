import { render } from "@testing-library/react";
import Header from ".";
import getMockState from "@/utils/getMockState";
import configureMockstore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockstore();

describe("Header", () => {
  let store: any;

  beforeEach(() => {
    const mockState = getMockState();
    const state = mockStore(mockState);

    store = state;
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });
});
