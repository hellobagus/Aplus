import React from "react";
import {
  StatusBar,
  WebView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  Platform,
  SafeAreaView,
  FlatList
} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Text,
  Title,
  Left,
  Right,
  Body,
  Input,
  Item,
  Footer,
  View,
  FooterTab,
  Badge,
  List,
  ListItem,
  Tab,
  Tabs
} from "native-base";

import NavigationService from "@Service/Navigation";

import Style from "@Theme/Style";
import Styles from "@Screen/Public/PropertyDetail/Style";

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

export default class extends React.Component {
  render() {
    return (
      <Container style={Style.bgMain}>
        <StatusBar
          backgroundColor="rgba(0,0,0,0)"
          animated
          barStyle="dark-content"
        />
        <Header style={Style.navigation}>
          <StatusBar
            backgroundColor="#7E8BF5"
            animated
            barStyle="light-content"
          />

          <View style={Style.actionBarLeft}>
            <Button
              transparent
              style={Style.actionBarBtn}
              onPress={() => {
                NavigationService.navigate("PublicHome");
              }}
            >
              <Icon
                active
                name="arrow-left"
                style={Style.textWhite}
                type="MaterialCommunityIcons"
              />
            </Button>
          </View>
          <View style={Style.actionBarMiddle}>
            <Text style={Style.actionBarText}>{"Detail".toUpperCase()}</Text>
          </View>
          <View style={Style.actionBarRight}>
            {/* <Button transparent style={Style.actionBtnRight} onPress={() => {
                        NavigationService.navigate('PublicPropertySearch')
                    }}>
                        <Icon active name='search' style={Style.actionIcon} type="FontAwesome" />
                    </Button> */}
          </View>
        </Header>

        <Content
          style={Style.layoutInner}
          contentContainerStyle={Style.layoutContent}
        >
          <View style={Styles.owner}>
            <View style={Styles.ownerAvatar}>
              <Image
                source={require("@Asset/images/avatar.png")}
                style={Styles.ownerAvatarImg}
              />
            </View>
            <View style={Styles.ownerInfo}>
              <View>
                <Text style={Styles.ownerName}>Andi Ifca</Text>
                <Text style={Styles.ownerLocation}>
                  Senior Software Eugineer
                </Text>
              </View>
            </View>
          </View>
          <Tabs tabBarUnderlineStyle={Styles.tabBorder}>
            <Tab
              tabStyle={Styles.tabGrey}
              textStyle={Styles.tabTextActive}
              activeTabStyle={Styles.tabGrey}
              activeTextStyle={Styles.tabTextActive}
              heading="Informations"
            >
              <List style={Styles.infoTab}>
                <ListItem style={Styles.infoItem}>
                  <View>
                    {/* <Text style={Styles.infoHeader}>{'Address'.toUpperCase()}</Text> */}
                    <Text style={Styles.infoDesc}>
                      Doc No : {"\n"}009/PIM-HO/IT/PAR/IV/201
                    </Text>
                  </View>
                </ListItem>
                <ListItem style={Styles.infoItem}>
                  <View>
                    <Text style={Styles.infoDesc}>Staff Id : {"\n"} Yuni</Text>
                  </View>
                </ListItem>
                <ListItem style={Styles.infoItem}>
                  <View>
                    <Text style={Styles.infoDesc}>
                      Departement : {"\n"} Information and Technology
                    </Text>
                  </View>
                </ListItem>
                <ListItem style={[Styles.infoItem, Styles.infoItemLast]}>
                  <View>
                    <Text style={Styles.infoDesc}>
                      Total : {"\n"} Rp.4,850,000
                    </Text>
                  </View>
                </ListItem>
              </List>
            </Tab>
            <Tab
              tabStyle={Styles.tabGrey}
              textStyle={Styles.tabText}
              activeTabStyle={Styles.tabGrey}
              activeTextStyle={Styles.tabText}
              heading="Otorisasi"
            >
              <List style={Styles.infoTab}>
                <ListItem style={Styles.infoItem}>
                  <View>
                    {/* <Text style={Styles.infoHeader}>{'Address'.toUpperCase()}</Text> */}
                    <Text style={Styles.infoDesc}>
                      Approved on : 15 Aug 2018
                    </Text>
                    <Text style={Styles.infoDesc}>Riyadi Hendarto</Text>
                  </View>
                </ListItem>
                <ListItem style={Styles.infoItem}>
                  <View>
                    <Text style={Styles.infoDesc}>
                      Approved on : 15 Aug 2018
                    </Text>
                    <Text style={Styles.infoDesc}>Louis</Text>
                  </View>
                </ListItem>
                <ListItem style={Styles.infoItem}>
                  <View>
                    <Text style={Styles.infoDesc}>
                      Approved on : 15 Aug 2018
                    </Text>
                    <Text style={Styles.infoDesc}>Lucia Hadisurya</Text>
                  </View>
                </ListItem>
              </List>
            </Tab>
          </Tabs>
        </Content>

        <Footer style={Style.greyTopLine}>
          <FooterTab style={Style.bgBot}>
            <Button
              style={Style.bgBot}
              onPress={() => {
                NavigationService.navigate("PublicHome");
              }}
            >
              <Text style={Style.textBot}>Reject</Text>
            </Button>
            <Button
              style={Style.bgBotA}
              onPress={() => {
                NavigationService.navigate("PublicPropertySearch");
              }}
            >
              <Text style={Style.textBot}>Approval</Text>
            </Button>
            <Button
              style={Style.bgBot}
              onPress={() => {
                NavigationService.navigate("MemberHome");
              }}
            >
              <Text style={Style.textBot}>Revise</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
