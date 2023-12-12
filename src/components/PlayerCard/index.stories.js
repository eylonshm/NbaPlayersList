import PlayerCard from "./index";
import { player } from "../../mocks";

export default {
  title: "components/PlayerCard",
  component: PlayerCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    player,
  },
};
