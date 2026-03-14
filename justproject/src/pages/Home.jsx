import Card from "../components/Card";

function Home() {
  return (
    <div className="hero">
      <div className="card-container">
        <Card
          name="Basic Plan"
          description="Good for beginners"
          price="$10"
        />
        <Card
          name="Pro Plan"
          description="For professionals"
          price="$25"
        />
        <Card
          name="Premium Plan"
          description="Best for teams"
          price="$50"
        />
      </div>
    </div>
  );
}

export default Home;