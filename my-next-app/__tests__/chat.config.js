import { render, screen, fireEvent } from "@testing-library/react";
import Chat from "@/components/Chat";
import { useChat } from "ai/react";

// Mock the useChat hook
jest.mock("ai/react", () => ({
  useChat: jest.fn(),
}));

describe("Chat Component", () => {
  beforeEach(() => {
    useChat.mockReturnValue({
      messages: [
        { id: "1", role: "user", content: "Hello!" },
        { id: "2", role: "ai", content: "Hi! How can I help you?" },
      ],
      input: "",
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn((e) => e.preventDefault()),
    });
  });

  test("renders the Chat component correctly", () => {
    render(<Chat />);

    // Check the header text
    expect(screen.getByText(/Chat with AI/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Ask me anything, and I will do my best to help you./i)
    ).toBeInTheDocument();

    // Check messages
    expect(screen.getByText("User: Hello!")).toBeInTheDocument();
    expect(screen.getByText("AI: Hi! How can I help you?")).toBeInTheDocument();

    // Check input field and button
    expect(
      screen.getByPlaceholderText(/How can I help you?/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send/i })).toBeInTheDocument();
  });

  test("handles user input change", () => {
    const handleInputChange = jest.fn();
    useChat.mockReturnValueOnce({
      messages: [],
      input: "",
      handleInputChange,
      handleSubmit: jest.fn(),
    });

    render(<Chat />);

    const inputField = screen.getByPlaceholderText(/How can I help you?/i);
    fireEvent.change(inputField, { target: { value: "Test input" } });

    expect(handleInputChange).toHaveBeenCalled();
  });

  test("submits the form", () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    useChat.mockReturnValueOnce({
      messages: [],
      input: "Test input",
      handleInputChange: jest.fn(),
      handleSubmit,
    });

    render(<Chat />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(handleSubmit).toHaveBeenCalled();
  });

  test("displays new messages dynamically", () => {
    useChat.mockReturnValueOnce({
      messages: [
        { id: "1", role: "user", content: "Hello!" },
        { id: "2", role: "ai", content: "Hi! How can I help you?" },
        { id: "3", role: "user", content: "What is Next.js?" },
      ],
      input: "",
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
    });

    render(<Chat />);

    expect(screen.getByText("User: What is Next.js?")).toBeInTheDocument();
  });
});
