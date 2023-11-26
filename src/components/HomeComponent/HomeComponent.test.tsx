import getMockState from "@/utils/getMockState";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockstore from "redux-mock-store";
import HomeComponent from ".";

const mockStore = configureMockstore();

describe("Home Component", () => {
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
        <HomeComponent />
      </Provider>
    );
  });
});
