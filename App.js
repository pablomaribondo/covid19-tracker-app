import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { statistics } from "./Requests";

import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  const [totalCases, setTotalCases] = useState("-");
  const [activeCases, setActiveCases] = useState("-");
  const [deaths, setDeaths] = useState("-");
  const [recovereds, setRecovereds] = useState("-");

  useEffect(() => {
    statistics()
      .then(response => {
        setActiveCases(response.activeCases);
        setDeaths(response.deaths);
        setRecovereds(response.recovereds);
        setTotalCases(response.totalCases);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.screen}>
      <Header title="Coronavirus Tracker" />
      <View style={styles.updateContainer}>
        <Text style={styles.updateText}>Last updated: 14:30:10</Text>
      </View>
      <View style={styles.list}>
        <Card
          title="Total Cases"
          color="#F8F399"
          icon={require("./assets/cases.png")}
          data={totalCases}
        />
        <Card
          title="Active Cases"
          color="#D88A20"
          icon={require("./assets/activeCases.png")}
          data={activeCases}
        />
        <Card
          title="Deaths"
          color="#B3090D"
          icon={require("./assets/deaths.png")}
          data={deaths}
        />
        <Card
          title="Recovered"
          color="#658D26"
          icon={require("./assets/recovereds.png")}
          data={recovereds}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
  },
  updateContainer: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  updateText: {
    color: "#fff",
  },
  list: {
    alignItems: "center",
  },
});

export default App;
