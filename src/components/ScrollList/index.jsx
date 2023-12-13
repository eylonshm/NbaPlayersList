import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import styles from "./index.module.scss";
import classNames from "classnames";

const DEFAULT_TRESHOLD = 4;
const DEFAULT_MAX_FETCH_LENGTH = 300;

// Looks like there's a common InfiniteLoaderBug, We have to fix it this way.
const INFINITE_LOADER_START_INDEX_BUG = 17;

const ScrollList = ({
  item: ListItem,
  loadMoreItems: loadMoreItemsProp,
  loading,
  data,
  threshold = DEFAULT_TRESHOLD,
  maxLength = DEFAULT_MAX_FETCH_LENGTH,
  className,
}) => {
  const loadMoreItems = (startIndex) => {
    if (
      startIndex >= data.length - threshold - INFINITE_LOADER_START_INDEX_BUG &&
      data.length < maxLength
    ) {
      loadMoreItemsProp();
    }
  };

  const renderFixedSizeList = ({
    onItemsRendered,
    ref,
    width,
    height,
  } = {}) => (
    <FixedSizeList
      height={height}
      itemCount={data.length}
      onItemsRendered={onItemsRendered}
      itemSize={200}
      ref={ref}
      width={width}
    >
      {(props) => {
        return (
          <ListItem
            {...props}
            loading={loading && props.index === data.length - 1}
          />
        );
      }}
    </FixedSizeList>
  );

  const renderInfiniteLoader = ({ width, height }) => (
    <InfiniteLoader
      isItemLoaded={() => {}}
      itemCount={data.length}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) =>
        renderFixedSizeList({ onItemsRendered, ref, width, height })
      }
    </InfiniteLoader>
  );

  return (
    <div className={classNames(styles.container, className)}>
      <AutoSizer>
        {({ width, height }) =>
          loadMoreItemsProp
            ? renderInfiniteLoader({ width, height })
            : renderFixedSizeList({ width, height })
        }
      </AutoSizer>
    </div>
  );
};

export default ScrollList;
