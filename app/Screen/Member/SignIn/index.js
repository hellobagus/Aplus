import React from 'react'
import { StatusBar, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet, Image, ImageBackground, Dimensions, leftIcon, ScrollView, Platform, SafeAreaView, FlatList, } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Segment, CardItem, Card, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge, Thumbnail, List, ListItem, InputGroup } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/SignIn/Style'
// import PasswordInputText from 'react-native-hide-show-password-input/index'

import Icons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            icEye: 'visibility-off',
            password: true,
            passwordTextInput:''
        }
    }

    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true
            }
        }
        this.passwordTextInput.blur();
        // set new state value
        this.setState(newState)

    };

    render() {
        return <Container style={Style.bgMain}>
            <ImageBackground source={require('@Asset/images/bg_login.png')} imageStyle={'cover'} style={Styles.bgCover}>

                <Header style={Style.navigationTransparent}>
                    <StatusBar backgroundColor="#7E8BF5" animated barStyle="light-content" />

                    <View style={Style.actionBarLeft}>
                        <Button transparent style={Style.actionBarBtn} onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }}>
                            <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                        </Button>
                    </View>
                    <View style={Style.actionBarMiddle}>
                        <Text style={Style.actionBarText}>{'Sign In'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.actionBarRight}>
                    </View>
                </Header>

                <Content style={Style.layoutInner}>

                    <View style={Styles.section}>
                        <View style={Styles.logo}>
                            <Image source={require('@Asset/images/ifca_oplus.png')} />
                        </View>
                        <View style={Styles.signBg}>
                        <List>
                            <ListItem  style={{ marginLeft:5 }}>
                                <InputGroup>
                                    <Icon name='envelope' type="FontAwesome" style={Styles.inputEmailicons} />
                                    <TextInput style={Styles.textInput} placeholder={'Email Address'} />
                                </InputGroup>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem  style={{ marginLeft:5 }}>
                                <InputGroup>  
                                    <Icon name='key' type="FontAwesome" style={Styles.inputEmailicons} /> 

                                    <TextInput style={Styles.textInput} 
                                        placeholder={'Password'}  
                                        secureTextEntry={this.state.password}
                                        ref={(input) => { this.passwordTextInput = input; }} />
                                    {/* Start EYE ICONS */}
                                    <Icons 
                                        name={this.state.icEye}
                                        size={25}
                                        color={this.props.iconColor}
                                        onPress={this.changePwdType}
                                    />
                                </InputGroup>
                            </ListItem>
                        </List>

                            <Button style={Styles.btn} onPress={() => {
                                NavigationService.navigate('MemberHome')
                            }}>
                                <Text style={Styles.loginBtnText}>{'Login'.toUpperCase()}</Text>
                                <Icon active name='arrow-right' type="MaterialCommunityIcons" style={Styles.loginBtnIcon} />
                            </Button>
                        </View>
                        <View style={Styles.forgot}>
                            <Text style={Styles.btnForgot}>Forgot Password?</Text>
                        </View>
                    
                    </View>

                </Content>

            </ImageBackground>
        </Container>
    }
}