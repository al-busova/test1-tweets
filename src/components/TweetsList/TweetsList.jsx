import PropTypes from "prop-types";
import { TweetItem } from "../TweetItem/TweetItem";
import { ListCards } from "../TweetsList/TweetsList.styled";

export const TweetsList = ({ users, toggleFollow, favoriteUsers }) => {
  return (
    users && (
      <ListCards>
        {users.map((user) => (
          <li key={user.id}>
            <TweetItem
              name={user.user}
              tweets={user.tweets}
              followers={user.followers}
              avatar={user.avatar}
              id={user.id}
              toggleFollow={toggleFollow}
              favoriteUsers={favoriteUsers}
            />
          </li>
        ))}
      </ListCards>
    )
  );
};
TweetsList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
  toggleFollow: PropTypes.func.isRequired,
  favoriteUsers: PropTypes.arrayOf(PropTypes.number),
};
