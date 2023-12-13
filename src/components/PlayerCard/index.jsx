import { Button } from "../elements";
import styles from "./index.module.scss";
import PlayerStats from "./Stats";
import { playerCard as copies } from "../../copies";
import classNames from "classnames";

const PlayerCard = ({
  player,
  favorite,
  style,
  className,
  onClickFavorite,
}) => {
  const {
    first_name,
    last_name,
    team,
    position,
    heightFeet,
    heightInches,
    weight_pounds,
  } = player;

  const formatedHeight =
    heightFeet && heightInches ? `${heightFeet}, ${heightInches}"` : null;
  const stats = [
    { label: copies.position, value: position },
    { label: copies.height, value: formatedHeight },
    { label: copies.weight, value: weight_pounds },
  ];

  return (
    <div className={classNames(styles.container, className)} style={style}>
      <div>
        <h3>{`${first_name} ${last_name}`}</h3>
        <h4>{team.full_name}</h4>
      </div>
      <div className={styles.middle}>
        {stats.map(({ label, value }) => (
          <PlayerStats key={label} label={label} value={value} />
        ))}
      </div>
      <Button
        className={styles.footerBtn}
        text={favorite ? copies.removeFromFavorites : copies.addToFavorites}
        onClick={onClickFavorite}
      />
    </div>
  );
};

export default PlayerCard;
