import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'
import RadioGroup from 'react-native-custom-radio-group'

import NavigationService from '@Service/Navigation'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export const btnType = [{
    label: 'BUY',
    value: 'btn_buy'
}, {
    label: 'RENT',
    value: 'btn_rent'
}, {
    label: 'PROJECTS',
    value: 'btn_project'
}];

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#42B649" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionMenu} onPress={() => {
                        NavigationService.openDrawer()
                    }}>
                        <Image source={require('@Asset/images/menu.png')} />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Approval'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                <Button transparent  onPress={() => {
                        NavigationService.navigate('MemberMessages')
                    }}>
                        <Icon name="bell" type="Entypo" style={Style.textWhite} />
s
    
                </Button>
                </View>
            </Header>

 
            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
            <View style={Styles.owner}>
                        <Image source={{ uri: ('https://cdn.stocksnap.io/img-thumbs/960w/ZUAZ22R9AL.jpg') }} style={Styles.ownerAvatarImg} />
                        <View style={Styles.ownerInfo}>
                            <Text style={Styles.ownerName}>Andi</Text>
                            <Text style={Styles.ownerLocation}>Senior Software Eugineer, Ifca</Text>
                        </View>
                    </View>

                <ImageBackground source={require('@Asset/images/property-bg.png')} imageStyle={'cover'} style={Styles.slider}>
                <View style={Styles.headerBg}>
                    </View>
                    <View style={Styles.city}>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>COR</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>Cash Book</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>Account Payable</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>Account Receivale</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>Customer Service</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <View style={Styles.btnCityLocation}>
                                <View style={Styles.btnCityBadge}>
                                  <Badge style={{ backgroundColor: 'white' }}>
                                  <Text style={{ color: 'black' }}>1908</Text></Badge>
                                  </View>

                                <Text style={Styles.btnCityText}>Fixed Asset</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </ImageBackground>
            </Content>

            {/* <Footer style={Style.greyTopLine}>
                <FooterTab style={Style.bgBot}>
                    <Button style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name="home" type="FontAwesome" style={Style.textBlue} />
                    </Button>
                    <Button style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('PublicPropertySearch')
                    }}>
                        <Icon name="search" type="Octicons" style={Style.textBlue} />
                    </Button>
                    <Button style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('MemberHome')
                    }}>
                        <Icon name="user" type="FontAwesome" style={Style.textActive} />
                    </Button>
                    <Button style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('MemberFavorites')
                    }}>
                        <Icon name="heart" type="FontAwesome" style={Style.textBlue} />
                    </Button>
                    <Button badge vertical style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('MemberMessages')
                    }}>
                        <Badge><Text>1</Text></Badge>
                        <Icon name="bell" type="Entypo" style={Style.textBlue} />
                    </Button>
                </FooterTab>
            </Footer> */}

        </Container>
    }
}