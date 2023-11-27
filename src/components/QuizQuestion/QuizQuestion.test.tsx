import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import QuizQuestion from ".";
import getMockState from "@/utils/getMockState";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("Quiz Question", () => {
  let store: any;

  beforeEach(() => {
    const mockState = getMockState();
    const state = mockStore(mockState);

    store = store;
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("shoulud render correctly", () => {
    const mockSetCurrentQuestionIndex = jest.fn();
    render(
      <Provider store={store}>
        <QuizQuestion
          currentQuestionIndex={0}
          setCurrentQuestionIndex={mockSetCurrentQuestionIndex}
        />
      </Provider>
    );
  });
});
