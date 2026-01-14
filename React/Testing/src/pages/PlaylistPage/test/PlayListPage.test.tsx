import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PlayListPage } from "../PlayListPage";
import * as reactRouter from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

describe("PlayListPage", () => {
  const setSearchParamMock = jest.fn();

  beforeEach(() => {
    setSearchParamMock.mockClear();

    jest.spyOn(reactRouter, "useSearchParams").mockReturnValue([
      new URLSearchParams(),
      setSearchParamMock,
    ]);
  });

  test("вызывает setSearchParam при вводе жанра", () => {
    render(
      <MemoryRouter>
        <PlayListPage />
      </MemoryRouter>
    );

    const genreInput = screen.getByLabelText(/введите жанр/i);
    fireEvent.change(genreInput, { target: { value: "rock" } });

    expect(setSearchParamMock).toHaveBeenCalledTimes(1);
    expect(setSearchParamMock).toHaveBeenCalledWith({ searchGenre: "rock", searchName: "" });
  });

  test("вызывает setSearchParam при вводе названия", () => {
    jest.spyOn(reactRouter, "useSearchParams").mockReturnValue([
      new URLSearchParams(),
      setSearchParamMock,
    ]);

    render(
      <MemoryRouter>
        <PlayListPage />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/введите название/i);
    fireEvent.change(nameInput, { target: { value: "my playlist" } });

    expect(setSearchParamMock).toHaveBeenCalledTimes(1);
    expect(setSearchParamMock).toHaveBeenCalledWith({ searchGenre: "", searchName: "my playlist" });
  });
});