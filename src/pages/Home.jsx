import { useEffect, useState } from "react";
import { Footer } from "../atoms/Footer";
import Content from "../organisms/home/Content";
import Header from "../organisms/home/Header";

export const Home = () => {
  const [temp, setTemp] = useState("");
  const keyApi = process.env.REACT_APP_API_KEY;
  const city = "Paris";
  const country = "France";

  const getData = async () => {
    try {
      const API_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${keyApi}`
      );
      const response = await API_call.json();
      setTemp(response.main.temp);
    } catch (error) {
      console.error(error);
    }
  };

  const toCelsius = temp => Math.floor(temp - 273.15);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header temp={toCelsius(temp)} city={city} country={country} />
      <Content />
      <Footer />
    </div>
  );
};
