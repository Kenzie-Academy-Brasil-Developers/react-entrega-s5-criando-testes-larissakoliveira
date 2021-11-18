import { render, screen } from "@testing-library/react";
import Button from "../../components/Search";

describe("button component", () => {
    it("should be able to render a button and the text of the button should be Buscar pelo CEP", () => {
      render(<Button onClick={() => {}}/>);
      const buttonElement = screen.getByText("Buscar pelo CEP");
      expect(buttonElement).toBeTruthy();
    });
  });

  