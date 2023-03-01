import initialUsers from "../initialUsers.json";
import { useState, useEffect } from "react";
import { Header } from "./Header/Header";
import { Container } from "./commonStyles/Container.styled";
import { TweetsList } from "./TweetsList/TweetsList";
import { Footer } from "./Footer/Footer";
import { USERS, MY_FAVORITE_USERS } from "../constants/localeStorageKeys";

function App() {
  const [users, setUsers] = useState(() => {
    return JSON.parse(window.localStorage.getItem(USERS)) ?? initialUsers;
  });
  const [favoriteUsers, setFavoriteUsers] = useState(() => {
    return JSON.parse(window.localStorage.getItem(MY_FAVORITE_USERS)) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem(USERS, JSON.stringify(users));
    window.localStorage.setItem(
      MY_FAVORITE_USERS,
      JSON.stringify(favoriteUsers)
    );
  }, [users, favoriteUsers]);

  const EditFollow = (id) => {
    if (favoriteUsers.includes(id)) {
      setUsers((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, followers: item.followers - 1 } : item
        )
      );
      setFavoriteUsers((prev) => {
        const newFavorite = prev.filter((userId) => userId !== id);
        return newFavorite;
      });
    } else {
      setUsers((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, followers: item.followers + 1 } : item
        )
      );
      setFavoriteUsers((prev) => [...prev, id]);
    }
  };

  return (
    <>
      <Header />
      <main>
        <Container>
          {users.length > 0 && (<TweetsList
            users={users}
            toggleFollow={EditFollow}
            favoriteUsers={favoriteUsers}
          />) }
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
