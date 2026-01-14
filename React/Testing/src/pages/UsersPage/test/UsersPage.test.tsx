import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UsersPage } from "../UsersPage";

import * as reactRouter from "react-router-dom";

describe("UsersPage", () => {
  const setSearchParamMock = jest.fn();

  beforeEach(() => {
    setSearchParamMock.mockClear();

    jest.spyOn(reactRouter, "useSearchParams").mockReturnValue([
      new URLSearchParams(),
      setSearchParamMock,
    ]);
  });

  test("вызывает setSearchParam при вводе имени пользователя", () => {
      render(
      <reactRouter.MemoryRouter>
        <UsersPage />
      </reactRouter.MemoryRouter>
    );

    const input = screen.getByRole("textbox", { name: /введите имя/i });

 
    fireEvent.change(input, { target: { value: "Иван" } });

    expect(setSearchParamMock).toHaveBeenCalledTimes(1);
    expect(setSearchParamMock).toHaveBeenCalledWith({ searchName: "иван" });
  });
});
