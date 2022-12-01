import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card";
import countries from "./countriesAll.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        {countries.map((country, index) => {
          return (
            <Card
              key={index}
              imageSrc={country.flag}
              imageAlt={country.name}
              title={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
