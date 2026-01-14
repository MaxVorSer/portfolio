import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { UserInfoPage } from "../UserInfoPage";
import * as reactRouter from "react-router-dom"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));

import { useParams } from "react-router-dom";
import { USERS } from '../../../data';

describe("UserInfoPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("отображает текст по умолчанию, если пользователя с таким userId нет", () => {
    (useParams as jest.Mock).mockReturnValue({ userId: "9999" }); // несуществующий userId

    render(<UserInfoPage />);

    expect(screen.getByText(/пользователя c таким userId нет/i)).toBeInTheDocument();
  });

// Компонент UserInfoPage: тест, проверяющий данные о пользователе, если он существует (email, имя, ссылка на плейлист)

test("email, имя, ссылка на плейлист", ()=>{
    const userId = "1";
    const user = USERS[Number(userId)];
  
  (reactRouter.useParams as jest.Mock).mockReturnValue({ userId }); 
   render( <reactRouter.MemoryRouter initialEntries={[`/playlists/${userId}`]}>
    <UserInfoPage />
  </reactRouter.MemoryRouter>);
     screen.debug();
    const userLink = screen.getByText(`${user.playlist?.name}`);
    expect(userLink).toBeInTheDocument();
    expect(userLink.closest("a")).toHaveAttribute("href", `/playlists/${user.playlist?.id}`);
    expect(screen.getByText(`${user.email}`)).toBeInTheDocument(); 
    expect(screen.getByText(`${user.fullName}`)).toBeInTheDocument(); 
})

});