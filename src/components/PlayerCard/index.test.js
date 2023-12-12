import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "./index";
import { player as mockPlayer } from "../../mocks";

describe("PlayerCard Component", () => {
  it("renders PlayerCard component with player information", () => {
    const { getByText } = render(
      <PlayerCard player={mockPlayer} favorite={true} />
    );
    const playerNameElement = getByText("Ike Anigbogu");
    const teamNameElement = getByText("Indiana Pacers");
    const weightElement = getByText("200");

    expect(playerNameElement).toBeInTheDocument();
    expect(teamNameElement).toBeInTheDocument();
    expect(weightElement).toBeInTheDocument();
  });

  it("renders removeFromFavorites button when favorite is true", () => {
    const { getByText } = render(
      <PlayerCard player={mockPlayer} favorite={true} />
    );
    const removeFromFavoritesButton = getByText("Remove from favorites");

    expect(removeFromFavoritesButton).toBeInTheDocument();
  });

  it("renders addToFavorites button when favorite is false", () => {
    const { getByText } = render(
      <PlayerCard player={mockPlayer} favorite={false} />
    );
    const addToFavoritesButton = getByText("Add to favorites");

    expect(addToFavoritesButton).toBeInTheDocument();
  });
});
