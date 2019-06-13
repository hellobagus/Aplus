import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, TouchableHighlight } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'
import MESSAGES from './Messages'


import FEATURED from './Featured'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/Properties/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#7E8BF5" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Type'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                    {/* <Button transparent style={Style.actionBtnRight} onPress={() => {
                        NavigationService.navigate('PublicPropertySearch')
                    }}>
                        <Icon active name='search' style={Style.actionIcon} type="FontAwesome" />
                    </Button> */}
                </View>
            </Header>
            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

<View style={Styles.section}>

    <View style={Styles.profile}>
        {/* <Image source={require('@Asset/images/avatar.png')} style={Styles.avatar} /> */}
        <View>
            <Text style={Styles.profileName}>COR</Text>
            <Text style={Styles.profileLocation}>Cash Out Requestion</Text>
        </View>
    </View>

    <ImageBackground source={require('@Asset/images/property-bg.png')} imageStyle={'cover'} style={Styles.curve} />

    <View style={Styles.btnLayout}>
        <TouchableOpacity style={Styles.btnBox} onPress={() => {
            NavigationService.navigate('MemberProperties')
        }}>
            <Text style={Styles.btnText}>PAR Direct</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.btnBox} onPress={() => {
            NavigationService.navigate('MemberMessages')
        }}>
            <Text style={Styles.btnText}>PAR PR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.btnBox} onPress={() => {
            NavigationService.navigate('MemberProfile')
        }}>
            <Text style={Styles.btnText}>MPR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.btnBox} onPress={() => {
            NavigationService.navigate('MemberFavorites')
        }}>
            <Text style={Styles.btnText}>Priority</Text>
        </TouchableOpacity>

    </View>

    <View style={Styles.message}>
        <View style={Styles.headerBg}>
            <Icon name="history" type="FontAwesome" style={Styles.headerIcon} />
            <Text style={Styles.sHeader}>{'History Approval'.toUpperCase()}</Text>
            <Right>
                <Button small rounded style={Styles.sBtn} onPress={() => { NavigationService.navigate('MemberMessages') }}>
                    <Text style={Styles.sLink} >See All</Text>
                </Button>
            </Right>
        </View>
        <FlatList
            data={MESSAGES}
            style={Styles.item}
            renderItem={({ item, separators }) => (
                <TouchableHighlight underlayColor='transparent' onPress={() => { NavigationService.navigate('MemberMessages') }}>
                    <View style={Styles.record}>
                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                        <View style={Styles.itemInfo}>
                            <Text style={Styles.itemTitle}>{item.name}</Text>
                            <Text style={Styles.itemDesc}>{item.desc}</Text>
                        </View>
                        <Text style={Styles.itemDate}>{item.date}</Text>
                    </View>
                </TouchableHighlight>
            )}
        />
    </View>

</View>

</Content>
        </Container>
    }
}