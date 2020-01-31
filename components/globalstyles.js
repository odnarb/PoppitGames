import {
  Dimensions,
  StyleSheet
} from 'react-native'

import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const iconMediumSize = moderateScale(32);

const settingsIconSize = iconMediumSize;
const navDotSize = iconMediumSize;
const navIconSize = iconMediumSize;

const globalStyles = {
  baseContainer: {
    flex: 1,
    backgroundColor: '#666'
  },

  logoContainer: {
    flex: 1,
    paddingTop: moderateScale(10),
    alignItems: 'center'
  },

  logo: {
    height: verticalScale(50)
  },

  contentContainer: {
    flex: 7
  },

  headerText: {
    fontSize: moderateScale(30),
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: moderateScale(20),
    marginBottom: moderateScale(20)
  },
  optionBtn: {
  },

  optionBtnView: {
    flexDirection: 'row'
  },

  optionView: {
    flexDirection: 'row'
  },

  settingsText: {
    marginTop: moderateScale(5),
    paddingLeft: moderateScale(15),
    fontSize: moderateScale(17),
    color: '#fff'
  },
  copyrightText :{
    paddingLeft: moderateScale(10),
    marginTop: moderateScale(10),
    fontSize: moderateScale(14),
    color: '#ccc'
  },
  settingsRow: {
    paddingLeft:  moderateScale(10),
    marginTop: moderateScale(20)
  },
  picker: {
    color:"#111",
    marginLeft: moderateScale(20),
    height: verticalScale(30),
    width: "80%"
  },
  hr: {
    marginTop: moderateScale(20),
    borderTopColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
  }
};

const settingsStyles = {

};

const aboutStyles = {
  baseContainer: {
    flex: 1,
    backgroundColor: "#666"
  },

  logoContainer: {
    flex:3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,

    elevation: 5,
    backgroundColor: "#888"
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6
  },

  versionText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold"
  },

  versionRow: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
  }
};

const emailSignInStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex:2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6
  },

  textInput: {
    fontSize: 18,
    marginTop: 6,
    width: "100%"
  },

  btnContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  buttonSignIn: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnSignIn: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  }
};

const emailSignInErrorStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex: 2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 30
  },

  text: {
    fontSize: 18,
    marginTop: 6,
    width: "100%",
    color: "#777"
  },

  buttonTryAgain: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnTryAgain: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },
};

const emailSignUpStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex: 2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textLink: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  textInput: {
    fontSize: 18,
    marginTop: 10,
    width: "100%"
  },

  termsContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 20
  },

  termsText: {
    color: '#444',
    fontSize: 16,
    marginLeft: 10
  },

  termsText: {
    color: '#444',
    fontSize: 16,
    marginLeft: 10
  },

  buttonCancel: {
    width: "100%",
    height: 64,
    borderColor: '#dcdcdc',
    backgroundColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  buttonSignup: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnCancel: {
    color: '#777',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

  btnSignup: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

};

const learnMoreStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex: 2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6,
    paddingBottom: 10
  },

  tutoralHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000'
  },

  tutorialText: {
    marginTop: 10,
    fontSize: 17,
    color: '#555'
  },

  imageContainer: {
    flex: 6,
    marginTop: 20
  },

  tutorialImage: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  }

};

const notificationsStyles = {
  topMargin: {
    marginTop: 20
  },

  optionRow: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  optionSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },

  optionContainer: {
    flexDirection: 'row'
  },

  optionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },

  optionSubHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10
  },

  optionDescription: {
    fontSize: 15,
    color: '#dcdc',
    marginTop: 10
  }
};

const prizesStyles = {
  baseContainer: {
    flex: 1,
    backgroundColor: '#666'
  },
  logoContainer: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center'
  },
  logo: {
    height: 50
  },
  contentContainer: {
    flex: 7,
    marginTop: 10,
    marginBottom: 20
  },
  headerText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 20
  },
  claimedPrizeContainer: {
    flex: 0.3,
    backgroundColor: "#666",
    marginTop: 2,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    borderColor: "#000",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  prizeContainer: {
    flex: 0.3,
    backgroundColor: "#fff",
    marginTop: 2,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    borderColor: "#000",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  prizeCell: {
    flex: 1,
    // flexDirection: 'column',
    borderColor: "#000",
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  prizeText: {
    fontSize: 18,
    color: "#777",
    textAlign: "center"
  }
};

const profileStyles = {

  baseContainer: {
    flex: 1,
    backgroundColor: '#666'
  },

  contentContainer: {
    flex: 6,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },

  settingRow: {
    flexDirection: "row",
    marginTop: 20,
  },

  settingLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff'
  },

  settingValue: {
    fontSize: 20,
    color: '#fff',
    marginLeft: "auto"
  },

  btnContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },

  buttonDark: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },
};

const profileEditStyles = {

  baseContainer: {
    flex: 1,
    backgroundColor: '#666'
  },

  contentContainer: {
    flex: 6,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 10
  },

  passwordContainer:{
    marginTop: 10
  },

  textInput: {
    flex: 1,
    fontSize: 18,
    color: "#fff",
    alignSelf: "flex-end",
  },

  dateInput: {
    flex: 1,
    alignSelf: "flex-end"
  },

  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10
  },

  btnContainer: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },

  buttonLight: {
    width: "100%",
    height: 64,
    borderColor: '#dcdcdc',
    backgroundColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  buttonDark: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  textLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  btnLight: {
    color: '#777',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

};

const recoverPasswordStyles = {

  baseContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex: 2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 30
  },

  text: {
    fontSize: 18,
    color: '#777',
    marginBottom: 10
  },

  textInput: {
    fontSize: 18,
    marginTop: 6,
    width: "100%"
  },

  buttonLight: {
    width: "100%",
    height: 64,
    borderColor: '#dcdcdc',
    backgroundColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  buttonDark: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnLight: {
    color: '#777',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

};

const recoverPasswordConfirmStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },

  logoContainer: {
    flex: 2
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 30
  },

  text: {
    fontSize: 18,
    color: '#777',
    marginBottom: 10
  },

  buttonDark: {
    width: "100%",
    height: 64,
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },

};

const signInStyles = {
  baseContainer: {
    flex: 1
  },

  logoContainer: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    flex: 4,
    alignItems: 'center',
    padding: 20
  },

  // btnTouch:{
  //   flexDirection: "row",
  //   backgroundColor: '#000',
  //   borderColor: '#000',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   padding: 20,
  //   justifyContent: 'center',
  //   marginTop: 20
  // },

  btnGoogle:{
    flexDirection: "row",
    backgroundColor: '#4285F4',
    borderColor: '#4285F4',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
    marginTop: 20
  },

  btnFB:{
    flexDirection: "row",
    backgroundColor: '#3b5998',
    borderColor: '#3b5998',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
    marginTop: 20
  },

  btnEmail:{
    flexDirection: "row",
    backgroundColor: '#777',
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
    marginTop: 20
  },

  btnView:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    // textAlign:'center',
  },

  btnIcon: {
    marginLeft: 20,
    marginRight: 50
  },

  btnText: {
      color: '#fff',
      fontSize: 22,
      textAlign: "center",
      marginLeft: 50,
      marginRight: 50
  },

  separatorContainer: {
    flexDirection: 'row',
    width: "70%",
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },

  hr: {
    flex: 1,
    backgroundColor: '#A2A2A2',
    height: 2
  },

  loginSeparatorText: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 20,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },

  inputEmail: {
    width: "100%",
    fontSize: 24,
    height: 64,
  }
};

const mapsStyles = {
  container: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  },
  logo: {
    height: 50
  },
  searchBarContainer: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapContainer: {
    flex: 8,
  },
  scrollView: {
    position: "absolute",
    bottom: 140,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },

};

const authLoadingStyles = {
  baseContainer: {
    flex: 1
  },

  // old styles
  // logoContainer: {
  //   // backgroundColor: 'yellow',
  //   alignItems: 'center',
  //   flex: 5
  // },
  // logo: {
  //   width: 364,
  //   height: 118
  // },

  logoContainer: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20
  },

  logo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  contentContainer: {
    // backgroundColor: 'green',
    flex: 2,
    alignItems: 'center'
  },

  text: {
    
  }
};

const homeStyles = {
  baseContainer: {
        flex: 1
  },

  logoContainer: {
    flex: 1,
    paddingTop: moderateScale(10, 0.4),
    alignItems: 'center'
  },

  logo: {
    height: moderateScale(50, 0.4)
  },

  contentContainer: {
    flex: 7
  },

  introText: {
    fontSize: moderateScale(16, 0.4),
    padding: 20
  },

  btnContainer: {
    backgroundColor: "#58d5ff",
    marginTop: 3,
    alignItems: "center"
  },

  btnTitle: {
    fontSize: moderateScale(14, 0.4),
    color: "#fff"
  }
};

const learnMoreNavStyles = {
  navContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(20)
  },
  navDotGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot2: {
    marginLeft: moderateScale(5),
    marginRight: moderateScale(5)
  },
  navSkip: {
    color: '#777',
    padding: moderateScale(10),
    fontSize: moderateScale(18),
    marginRight: moderateScale(20)
  },
  navNext: {
    padding: moderateScale(10),
    fontSize: moderateScale(18),
  },
  navBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navBtnGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center"
  },
  highLightBtn: {
    alignSelf: 'stretch'
  }
};

const learnMoreNavStyleSheet = StyleSheet.create(learnMoreNavStyles);

const homeStyleSheet = StyleSheet.create({ ...globalStyles, ...homeStyles });

const aboutStyleSheet = StyleSheet.create({ ...globalStyles, ...aboutStyles });
const authLoadingStyleSheet = StyleSheet.create({ ...globalStyles, ...authLoadingStyles });
const emailSignInErrorStyleSheet = StyleSheet.create({ ...globalStyles, ...emailSignInErrorStyles });
const emailSignInStyleSheet = StyleSheet.create({ ...globalStyles, ...emailSignInStyles });
const emailSignUpStyleSheet = StyleSheet.create({ ...globalStyles, ...emailSignUpStyles });
const learnMoreStyleSheet =  StyleSheet.create({ ...globalStyles, ...learnMoreStyles });
const mapsStyleSheet =  StyleSheet.create({ ...globalStyles, ...mapsStyles });
const notificationsStyleSheet =  StyleSheet.create({ ...globalStyles, ...notificationsStyles });
const prizesStyleSheet =  StyleSheet.create({ ...globalStyles, ...prizesStyles });
const profileStyleSheet =  StyleSheet.create({ ...globalStyles, ...profileStyles });
const profileEditStyleSheet =  StyleSheet.create({ ...globalStyles, ...profileEditStyles });
const recoverPasswordConfirmStyleSheet =  StyleSheet.create({ ...globalStyles, ...recoverPasswordConfirmStyles });
const recoverPasswordStyleSheet =  StyleSheet.create({ ...globalStyles, ...recoverPasswordStyles });
const settingsStyleSheet = StyleSheet.create({ ...globalStyles, ...settingsStyles });
const signInStyleSheet =  StyleSheet.create({ ...globalStyles, ...signInStyles });


const styles = StyleSheet.create(globalStyles);

export {
  styles,
  learnMoreNavStyleSheet,
  navDotSize,
  navIconSize,
  homeStyleSheet,
  aboutStyleSheet,
  authLoadingStyleSheet,
  emailSignInStyleSheet,
  emailSignInErrorStyleSheet,
  emailSignUpStyleSheet,
  learnMoreStyleSheet,
  mapsStyleSheet,
  notificationsStyleSheet,
  prizesStyleSheet,
  profileStyleSheet,
  profileEditStyleSheet,
  recoverPasswordStyleSheet,
  recoverPasswordConfirmStyleSheet,
  settingsStyleSheet,
  settingsIconSize,
  signInStyleSheet
}