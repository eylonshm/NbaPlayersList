import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import {
  ScrollList,
  LoadingIndicator,
  PlayerCard,
  SearchInput,
} from "../../components";
import {
  getPlayersSlice,
  togglePlayerFavorite,
  useGetPlayersQuery,
} from "../../redux";
import { playersPage as copies } from "../../copies";
import styles from "./index.module.scss";
import { useMemo } from "react";
import { useDeferredValue } from "react";

const GUTTER_SIZE = 10;
const listTypes = {
  PLAYERS: "players",
  FAVORITES: "favorites",
};

const Players = ({ className }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [playerSearchValue, setPlayerSearchValue] = useState("");
  const deferredPlayerSearchValue = useDeferredValue(playerSearchValue);
  const { playersArr: players, favorites: favoritePlayers } = useSelector(
    (state) => getPlayersSlice(state)
  );
  const { isLoading, isFetching, isError } = useGetPlayersQuery(page);

  const onClickFavoritePlayer = (playerId) => {
    dispatch(togglePlayerFavorite({ playerId }));
  };

  const filteredPlayers = useMemo(
    () =>
      players.filter(({ first_name, last_name }) => {
        return `${first_name} ${last_name}`.includes(deferredPlayerSearchValue);
      }),
    [players, deferredPlayerSearchValue]
  );

  const listPlayer = useCallback(
    ({ index, style, loading, listType }) => {
      const player =
        listType === listTypes.PLAYERS
          ? filteredPlayers[index]
          : favoritePlayersArr[index];

      if (!player) return;
      if (loading)
        return <LoadingIndicator className={styles.loader} style={style} />;

      return (
        <PlayerCard
          player={player}
          loading={loading}
          favorite={favoritePlayers.has(player.id)}
          onClickFavorite={() => onClickFavoritePlayer(player.id)}
          style={{
            ...style,
            left: "auto",
            top: style.top + GUTTER_SIZE,
            width: style.width - GUTTER_SIZE,
            height: style.height - GUTTER_SIZE,
          }}
        />
      );
    },
    [filteredPlayers, favoritePlayers]
  );

  const favoritePlayersArr = useMemo(
    () => players.filter(({ id }) => favoritePlayers.has(id)),
    [players, favoritePlayers]
  );

  const loadMorePlayers = () => {
    if (deferredPlayerSearchValue.trim() !== "") return;
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <main className={classNames(styles.container, className)}>
      <div className={styles.listContainer}>
        <h3>{copies.players}</h3>
        <SearchInput
          placeholder={copies.search}
          label={copies.search}
          value={playerSearchValue}
          setValue={setPlayerSearchValue}
        />
        <ScrollList
          className={styles.playersList}
          data={filteredPlayers}
          loading={isFetching}
          loadMoreItems={loadMorePlayers}
          item={(props) =>
            listPlayer({ listType: listTypes.PLAYERS, ...props })
          }
        />
      </div>
      <span className={styles.seperator} />
      <div className={styles.listContainer}>
        <h3>{copies.favorites}</h3>
        <ScrollList
          className={styles.playersList}
          data={favoritePlayersArr}
          item={(props) =>
            listPlayer({ listType: listTypes.FAVORITES, ...props })
          }
        />
      </div>
    </main>
  );
};

export default Players;
