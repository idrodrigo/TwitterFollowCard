import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  const users = [
    {
      userName: "yo",
      name: "yo",
      isFollowing: true,
    },
    {
      userName: "elon",
      name: "elon musk",
      isFollowing: false,
    },
    {
      userName: "PacoHdezs",
      name: "Paco Hdez",
      isFollowing: true,
    },
    {
      userName: "TMChein",
      name: "Tomas",
      isFollowing: false,
    },
  ];
  return (
    <>
      <section className="App">
        {users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
            key={userName}
          >
            {name}
          </TwitterFollowCard>
        ))}
      </section>
    </>
  );
}

export default App;
