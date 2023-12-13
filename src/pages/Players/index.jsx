import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { ScrollList, LoadingIndicator, PlayerCard } from "../../components";
import {
  getPlayersSlice,
  togglePlayerFavorite,
  useGetPlayersQuery,
} from "../../redux";
import { playersPage as copies } from "../../copies";
import styles from "./index.module.scss";

const GUTTER_SIZE = 10;

const Players = ({ className }) => {
  const dispatch = useDispatch();
  const {
    playersArr: players,
    favorites: favoritePlayers,
    currentPage,
  } = useSelector((state) => getPlayersSlice(state));

  const {
    isLoading,
    isFetching,
    isError,
    refetch: fetchMorePlayers,
  } = useGetPlayersQuery({});

  const onClickFavoritePlayer = (playerId) => {
    dispatch(togglePlayerFavorite({ playerId }));
  };

  const listPlayer = useCallback(
    ({ index, style, loading }) => {
      const player = players[index];
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
    [players, favoritePlayers]
  );

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.listContainer}>
        <h3>{copies.players}</h3>
        <ScrollList
          className={styles.playersList}
          data={players}
          loading={isFetching}
          loadMoreItems={fetchMorePlayers}
          item={listPlayer}
        />
      </div>
      <span className={styles.seperator} />
      <div className={styles.listContainer}>
        <h3>{copies.favorites}</h3>
        <ScrollList
          className={styles.playersList}
          data={players.filter((player) => favoritePlayers.has(player.id))}
          item={listPlayer}
        />
      </div>
    </div>
  );
};

export default Players;
