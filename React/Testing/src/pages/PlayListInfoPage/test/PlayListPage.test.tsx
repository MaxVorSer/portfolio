import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { PlayListInfoPage } from "../PlayListInfoPage";
import * as reactRouter from "react-router-dom"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));

import { useParams } from "react-router-dom";
import { PLAYLISTS } from '../../../data';

describe("PlayListInfoPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("отображает текст по умолчанию, если нет доступного плейлиста", () => {
    (reactRouter.useParams as jest.Mock).mockReturnValue({ playlistId: "99999" }); 
    render(<PlayListInfoPage/>);
screen.debug();
    expect(screen.getByText(/Такого плейлиста нет/i)).toBeInTheDocument();
  });

test("проверка жанра, названия, кол-во песен в списке", ()=>{
    const playlistId = "3";
    const playlist = PLAYLISTS[Number(playlistId)];
  
  (reactRouter.useParams as jest.Mock).mockReturnValue({ playlistId }); 
   render( <reactRouter.MemoryRouter initialEntries={[`/playlists/${playlistId}`]}>
    <PlayListInfoPage />
  </reactRouter.MemoryRouter>);
     screen.debug();
    const genreLink = screen.getByText(playlist.genre);
    expect(genreLink).toBeInTheDocument();
    expect(genreLink.closest("a")).toHaveAttribute("href", `/playlists?searchGenre=${playlist.genre.toLocaleLowerCase()}`);
    expect(screen.getByText(`Название:${playlist.name}`)).toBeInTheDocument(); 
    expect(screen.getAllByRole("listitem").length).toBe(playlist.songs.length);
})
 
});