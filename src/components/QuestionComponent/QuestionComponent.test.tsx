import { render } from "@testing-library/react";
import QuestionComponent from ".";
import getMockState from "@/utils/getMockState";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();

describe("QuestionComponent", () => {
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
        <QuestionComponent />
      </Provider>
    );
  });
});
