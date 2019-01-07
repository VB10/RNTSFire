import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { setup, getDatabaseChild } from "../../util";

interface HomeProps {}

interface HomeState {
  email: String;
}

export default class HomeComponent extends Component<HomeProps, HomeState> {
  componentWillMount = () => {
    getDatabaseChild("articles").then(result => {
      console.log(result);
      this.setState({
        email: result[0].email
      });
    });
  };

  constructor(props: HomeProps) {
    super(props);
    setup();
    this.state = {
      email: ""
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text>{this.state.email}</Text>
      </SafeAreaView>
    );
  }
}
