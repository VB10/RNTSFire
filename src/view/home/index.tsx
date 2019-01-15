import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { setup, getDatabaseChild } from "../../util";
import LottieView from "lottie-react-native";
import { Card,Body, CardItem } from "native-base";
interface HomeProps {}

interface HomeState {
  randomArray: NewsItem[];
  serviceResult: boolean;
}
export interface NewsItem {
  category: string;
  description: string;
  email: string;
  price: string;
  title: string;
}

export default class HomeComponent extends Component<HomeProps, HomeState> {
  componentWillMount = () => {
    getDatabaseChild("articles").then(result => {
      console.log(result);
      this.setState({
        randomArray: result,
        serviceResult: !this.state.serviceResult
      });
    });
  };

  constructor(props: HomeProps) {
    super(props);
    setup();
    this.state = {
      randomArray: [],
      serviceResult: false
    };
  }
  renderListItem(val: NewsItem) {
    return (
      <Card>
        <CardItem header bordered>
          <Text>{val.title}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>
              {val.description}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Text>{val.email}</Text>
        </CardItem>
      </Card>
    );
  }
  renderList() {
    return (
      <FlatList
        data={this.state.randomArray}
        renderItem={data => this.renderListItem(data.item)}
        keyExtractor={item => item.email}
      />
    );
  }
  renderLoading = () => (
    <LottieView
      autoPlay={true}
      loop={true}
      source={require("../../../assets/gif/loading_light_bulb.json")}
    />
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.state.serviceResult ? this.renderList() : this.renderLoading()}
      </SafeAreaView>
    );
  }
}
