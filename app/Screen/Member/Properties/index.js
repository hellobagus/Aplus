import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import PROPERTIES from './Properties'


import Style from '@Theme/Style'
import Styles from '@Screen/Member/Properties/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#42B649" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('MemberHome')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Par Direct'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                    {/* <Button transparent style={Style.actionBtnRight} onPress={() => {
                        NavigationService.navigate('MemberPropertyAdd')
                    }}>
                        <Icon active name='plus' style={Style.actionIcon} type="FontAwesome" />
                    </Button> */}
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.section}>
                    <FlatList
                        data={PROPERTIES}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicPropertyDetail') }}>
                                <View>
            
                                    <View style={Styles.itemRow}>
                                        <View style={Styles.itemOverview}>
                                            <View>
                                                <Text style={Styles.itemLocation}>Doc No : {item.docNo}</Text>
                                                <Text style={Styles.itemLocation}>Staff ID : {item.staffId}</Text>
                                                <Text style={Styles.itemLocation}>Dept : {item.dept}</Text>
                                                <Text style={Styles.itemPrice}>{item.price}</Text>
                                            </View>
                                        </View>
                                        {/* <View style={Styles.itemOverview}>
                                            <Icon name="bed" type="FontAwesome" style={Styles.itemIcon} />
                                            <Text style={Styles.itemNo}>{item.bedroom}</Text>
                                        </View>
                                        <View style={Styles.itemOverview}>
                                            <Icon name="bathtub" type="FontAwesome" style={Styles.itemIcon} />
                                            <Text style={Styles.itemNo}>{item.bathroom}</Text>
                                        </View> */}
                                        <View style={Styles.itemRight}>
                                            <Text style={Styles.itemDate}>posted on:{"\n"} 15 Aug 2018</Text>
                                            <View style={Styles.itemBtn1}>
                                            <Text style={Styles.itemEntity}>{item.entity}</Text>
                                            </View>

                                        </View>
                                    </View>
                                    <View style={Styles.itemRowIcon}>
                                        <View style={Styles.itemLeft}>
                                            <View style={Styles.itemBtn}>
                                                <Text style={Styles.itemDate}>{item.desc}</Text>
                                            </View>
                                           
                                        </View>
                                       
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>

            </Content>

            <Footer style={Style.greyTopLine}>
                <FooterTab style={Style.bgFilter}>
                    <Button style={Style.bgFilter} onPress={() => {
                        NavigationService.navigate('PublicProperties')
                    }}>
                        <Icon name="sort-amount-asc" type="FontAwesome" style={Style.textBlue} />
                        <Text style={Style.textBlack}>Sort by</Text>
                    </Button>
                    <Button style={Style.bgFilter} onPress={() => {
                        NavigationService.navigate('PublicPropertySearch')
                    }}>
                        <Icon name="filter" type="FontAwesome" style={Style.textBlue} />
                        <Text style={Style.textBlack}>Filter</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    }
}