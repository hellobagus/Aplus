export default {

    layoutContent: {
        flex: 1,
        alignItems: 'center',
    },
    bgCover: {
        flex: 1,
    },
    section: {
        width: '100%',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: 50,
        marginBottom: 20,
    },
    signBg: {
        width: '100%',
        // backgroundColor: '#FFF',
        // borderRadius: 0,
        elevation: 0,
        shadowOffset: { 
            width: 15, 
            height: 15 
        },
        shadowColor: "grey",
        shadowOpacity: 0.1,
        shadowRadius: 0,
    },
    col: {
        flexDirection: 'row',
    },
    textInput: {
        fontFamily: 'Montserrat-Regular',
        borderColor: '#DDD',
        // paddingHorizontal: 20,
        // paddingVertical: 15,
        fontSize: 18,
        width: '100%',
        flex:1,
        marginRight: 9,
    },
    textInputHalf: {
        fontFamily: 'Montserrat-Regular',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 18,
        width: '100%',
    },
    btn: {
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#F7F9F9',
        // paddingVertical: 20,
        // paddingHorizontal: 5,
        marginTop: 10,
    },
    btnText: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        fontSize: 14,
        alignSelf: 'center',
    },

    loginBtnText: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        fontSize: 15,
        // alignItems: 'center',
    },
    loginBtnIcon: {
        color: '#333',
        fontSize: 24,
    },


    login: {
        flex: 1,
        marginVertical: 30,
        width: '100%',
        alignItems: 'center',
    },
    account: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFF',
        fontSize: 12,
    },
    btnLogin: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFF',
        fontSize: 14,
        justifyContent: 'center',
        flex: 1,
        height: 40,
        padding: 5,
        textAlign: 'center',
    },
    forgot: {
        width: '100%',
        justifyContent: 'flex-end'
    },
    btnForgot: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFF',
        paddingVertical: 15,
        textAlign: 'right',
        fontSize: 13,
    },

    inputEmailicons:{
        color: '#F7F9F9',
        marginRight: 5,
        fontSize: 20,
    },
    itemOverview:{
        flexGrow: 1,
        flexDirection: 'row',
    },
    GmailStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        // borderWidth: .5,
        height: 40,
        width: 250,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        margin: 5,
     },
     FacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        // borderWidth: .5, 
        height: 40,
        width: 250,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        margin: 5,
      },
      ImageIconStyle: {
        padding: 10,
        marginLeft: 40,
        height: 22,
        width: 32,
        resizeMode : 'stretch',
      
     },
     TextStyle :{
       color: "#fff",
       marginBottom : 4,
       marginLeft : 10
     },
      

}