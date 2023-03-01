import PropTypes from "prop-types";
import {
  CardTweet,
  WrapperContent,
  Avatar,
  Line,
  FrameImg,
  Description,
  BtnFollow,
} from "./TweetItem.styled";
import { numberWithComma } from "../../utils/numberWithComma";

export const TweetItem = ({
  name,
  tweets,
  followers,
  avatar,
  id,
  toggleFollow,
  favoriteUsers,
}) => {
  const isFollow = favoriteUsers.includes(id);

  return (
      <CardTweet>
        <WrapperContent>
          <Line>
            <FrameImg>
              <Avatar src={avatar} alt={name} />
            </FrameImg>
          </Line>
          <div>
            <Description>{tweets} tweets</Description>
            <Description>{numberWithComma(followers)} followers</Description>
          </div>
          <BtnFollow
            type="button"
            follow={isFollow}
            onClick={() => {
              toggleFollow(id);
            }}
          >
            {isFollow ? "following" : "follow"}
          </BtnFollow>
        </WrapperContent>
      </CardTweet>
  );
};

TweetItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  toggleFollow: PropTypes.func.isRequired,
  favoriteUsers: PropTypes.arrayOf(PropTypes.number),
};
