import {
  Dimensions,
  StyleSheet
} from 'react-native'

import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const iconMediumSize = moderateScale(32);
const iconLargeSize = moderateScale(42);


const settingsIconSize = iconMediumSize;
const learnMoreNavDotSize = iconMediumSize;
const learnMoreNavIconSize = iconMediumSize;
const learnMoreNavIconLightColor = "#dcdcdc"
const learnMoreNavIconDarkColor = "#000";

const bottomNavIconSize = moderateScale(32);
const bottomNavIconColor = "#777";

const passwordInputIconSize = moderateScale(25);
const passwordInputIconColor = moderateScale(25);

const signInIconSize = iconLargeSize;

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

  logoContainer2: {
    flex: 2
  },

  fixedLogoContainer: {
    position: 'absolute',
    top: verticalScale(10),
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  },

  scaledLogo: {
    flex: 1,
    alignItems: "center",
    height: undefined,
    width: undefined
  },

  smallLogo: {
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

  settingsLabel: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: '#fff',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10)
  },

  settingsText: {
    fontSize: moderateScale(17),
    marginTop: moderateScale(5),
    paddingLeft: moderateScale(15),
    color: '#fff'
  },

  settingsValue: {
    fontSize: moderateScale(20),
    color: '#fff',
    marginLeft: "auto",
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10)
  },

  copyrightText :{
    paddingLeft: moderateScale(10),
    marginTop: moderateScale(10),
    fontSize: moderateScale(14),
    color: '#ccc'
  },
  settingsRow: {
    flex: 1,
    borderTopColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingLeft: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    justifyContent: "center",
  },
  copyrightRow: {
    flex: 1,
    borderTopColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingLeft: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10)
  },
  picker: {
    color:"#111",
    marginLeft: moderateScale(20),
    height: moderateScale(36),
    width: "80%"
  },
  switchWithMargin: {
    marginLeft: 'auto',
    transform: [
      { scaleX: moderateScale(1, 0.2) },
      { scaleY: moderateScale(1, 0.2) }
    ]
  },
  switch: {
    transform: [
      { scaleX: moderateScale(1, 0.2) },
      { scaleY: moderateScale(1, 0.2) }
    ]
  },
  switchContainer: {
    flexDirection: 'row',
    paddingLeft: moderateScale(10),
    marginTop: moderateScale(20)
  },
  switchContainerNoMargin: {
    flexDirection: 'row',
    paddingLeft: moderateScale(10)
  },
  switchText: {
    fontSize: moderateScale(16),
    alignSelf: "center"
  },

  buttonLight: {
    width: "100%",
    height: verticalScale(64),
    borderColor: '#dcdcdc',
    backgroundColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 4,
    padding: moderateScale(20),
    marginTop: moderateScale(20),
  },

  btnLight: {
    color: '#777',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    textAlign:'center'
  },

  buttonDark: {
    width: "100%",
    height: verticalScale(64),
    borderColor: '#000',
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: moderateScale(20),
    marginTop: moderateScale(20)
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    textAlign:'center'
  }
};

const settingsStyles = {

};

const aboutStyles = {
  baseContainer: {
    flex: 1,
    backgroundColor: "#666"
  },

  versionContainer:{
    flex:3,
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    paddingTop: moderateScale(10),

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

  contentContainer: {
    flex: 6
  },

  versionText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: moderateScale(24),
    fontWeight: "bold"
  },

  versionRow: {
    alignItems: "center",
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20)
  }
};

const emailSignInStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 6,
    justifyContent: "flex-end"
  },

  inputContainer: {
    height: moderateScale(60,0.4),
    marginBottom: moderateScale(20)
  },

  inputContainerNoMargin: {
    height: moderateScale(60,0.4)
  },

  textInput: {
    fontSize: moderateScale(18),
    marginTop: moderateScale(6),
    width: "100%"
  },

  recoverPwContainer: {
    marginTop: moderateScale(20)

  },

  recoverPwLink: {
    fontSize: moderateScale(16)
  },

  btnContainer: {
    flex: 1,
    marginBottom: moderateScale(10),
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
};

const emailSignInErrorStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: moderateScale(10),
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textHeader: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginTop: moderateScale(6),
    marginBottom: moderateScale(30)
  },

  text: {
    fontSize: moderateScale(18),
    marginTop: moderateScale(6),
    width: "100%",
    color: "#777"
  }
};

const emailSignUpStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: moderateScale(10),
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textLink: {
    fontSize: moderateScale(16),
    color: '#444',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  textInput: {
    fontSize: moderateScale(18),
    marginTop: scale(10),
    width: "100%"
  },

  termsText: {
    color: '#444',
    fontSize: moderateScale(16),
    marginLeft: moderateScale(10)
  },

  termsText: {
    color: '#444',
    fontSize: moderateScale(16),
    marginLeft: moderateScale(10)
  }
};

const learnMoreStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 6
  },

  tutoralHeader: {
    fontSize: moderateScale(26),
    fontWeight: 'bold',
    color: '#000',
    marginTop: moderateScale(10)

  },

  tutorialText: {
    marginTop: moderateScale(10),
    fontSize: moderateScale(17),
    color: '#555'
  },

  imageContainer: {
    flex: 6,
    marginTop: moderateScale(20)
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
    marginTop: moderateScale(20)
  },

  optionRow: {
    borderTopColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingLeft: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    justifyContent: "center",

    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  optionSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },

  optionContainer: {
    flexDirection: 'row'
  },

  optionHeader: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#fff'
  },

  optionSubHeader: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    color: '#fff',
    marginTop: moderateScale(10)
  },

  optionDescription: {
    fontSize: moderateScale(15),
    color: '#dcdc',
    marginTop: moderateScale(10)
  }
};

const prizesStyles = {
  baseContainer: {
    flex: 1,
    backgroundColor: '#666'
  },

  contentContainer: {
    flex: 6
  },

  headerText: {
    fontSize: moderateScale(30),
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: moderateScale(20),
    marginBottom: moderateScale(20)
  },
  claimedPrizeContainer: {
    flex: 0.3,
    backgroundColor: "#666",
    marginTop: moderateScale(2),
    marginBottom: moderateScale(2),
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
    marginTop: moderateScale(2),
    marginBottom: moderateScale(2),
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
    fontSize: moderateScale(18),
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
    flex: 6
  },

  btnContainer: {
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(20)
  },

};

const profileEditStyles = {

  baseContainer: {
    flex: 1,
    backgroundColor: '#666',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 6,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
  },

  inputContainer: {
    flex:1,
    marginBottom: moderateScale(20)
  },

  textInput: {
    fontSize: moderateScale(18),
    color: "#fff",
    width: "100%"
  },

  inputLabel: {
    fontSize: moderateScale(12),
    color: "#fff"
  },

  btnContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(20)
  },

  textLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
};

emailSignUpConfirmStyles = {

  baseContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: moderateScale(10),
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textHeader: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginTop: moderateScale(6),
    marginBottom: moderateScale(30)
  },

  text: {
    fontSize: moderateScale(18),
    color: '#777',
    marginBottom: moderateScale(10)
  },

  textInput: {
    fontSize: moderateScale(18),
    marginTop: moderateScale(6),
    width: "100%"
  }
};

const recoverPasswordStyles = {

  baseContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: moderateScale(10),
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textHeader: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginTop: moderateScale(6),
    marginBottom: moderateScale(30)
  },

  text: {
    fontSize: moderateScale(18),
    color: '#777',
    marginBottom: moderateScale(10)
  },

  textInput: {
    fontSize: moderateScale(18),
    marginTop: moderateScale(6),
    width: "100%"
  }
};

const recoverPasswordConfirmStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 6
  },

  btnContainer: {
    flex: 1,
    marginBottom: moderateScale(10),
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  textHeader: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginTop: moderateScale(6),
    marginBottom: moderateScale(30)
  },

  text: {
    fontSize: moderateScale(18),
    color: '#777',
    marginBottom: moderateScale(10)
  }
};

const signInStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 4,
    alignItems: 'center'
  },

  btnGoogle:{
    flexDirection: "row",
    backgroundColor: '#4285F4',
    borderColor: '#4285F4',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginTop: moderateScale(20)
  },

  btnFB:{
    flexDirection: "row",
    backgroundColor: '#3b5998',
    borderColor: '#3b5998',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginTop: moderateScale(20)
  },

  btnEmail:{
    flexDirection: "row",
    backgroundColor: '#777',
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginTop: moderateScale(10)
  },

  btnView:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  btnIcon: {
    marginLeft: moderateScale(20),
    marginRight: moderateScale(50)
  },

  btnText: {
      color: '#fff',
      fontSize: moderateScale(18),
      textAlign: "center",
      marginLeft: moderateScale(50),
      marginRight: moderateScale(50)
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
    height: 1
  },

  loginSeparatorText: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: moderateScale(16),
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },

  inputEmail: {
    width: "100%",
    fontSize: moderateScale(18),
    // height: 64,
  }
};

const mapsStyles = {
  container: {
    flex: 1,
  },

  searchBarContainer: {
    position: 'absolute',
    top: verticalScale(70),
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapContainer: {
    flex: 8,
  },
  scrollView: {
    position: "absolute",
    bottom: verticalScale(100),
    left: 0,
    right: 0,
    paddingVertical: verticalScale(10),
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: moderateScale(10),
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
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: moderateScale(12),
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(6),
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: moderateScale(24),
    height: verticalScale(24),
    borderRadius: moderateScale(12),
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },

};

const authLoadingStyles = {
  baseContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },

  contentContainer: {
    flex: 2,
    alignItems: 'center'
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
    color: '#000',
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

const bottomNavStyles = {
  navContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch'
  },
  navBtn: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff'
  },

  navBtnView: {
        alignItems: "center",
        justifyContent: "center"
  },

  navText: {
    fontSize: moderateScale(14),
    color: "#777",
  }
};

const passwordStyles = {
  passwordContainer: {
    height: moderateScale(46, 0.4),
    width: "100%"
  },
  icon: {
    position: 'absolute',
    top: verticalScale(5),
    right: 0
  },
  bcPassword: {
    flex:1,
    fontSize: moderateScale(18)
  },
  bcPasswordLite: {
    flex:1,
    fontSize: moderateScale(18),
    color: "#fff"
  },
};

const passwordStyleSheet = StyleSheet.create(passwordStyles);
const learnMoreNavStyleSheet = StyleSheet.create(learnMoreNavStyles);
const bottomNavStyleSheet = StyleSheet.create(bottomNavStyles);

const aboutStyleSheet = StyleSheet.create({ ...globalStyles, ...aboutStyles });
const authLoadingStyleSheet = StyleSheet.create({ ...globalStyles, ...authLoadingStyles });
const emailSignInErrorStyleSheet = StyleSheet.create({ ...globalStyles, ...emailSignInErrorStyles });
const emailSignInStyleSheet = StyleSheet.create({ ...globalStyles, ...emailSignInStyles });
const emailSignUpStyleSheet = StyleSheet.create({ ...globalStyles, ...emailSignUpStyles });
const emailSignUpConfirmStyleSheet = StyleSheet.create({ ...globalStyles, ...emailSignUpConfirmStyles });
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

  // make a global icon size available
  iconMediumSize,

  passwordStyleSheet,
  passwordInputIconSize,
  passwordInputIconColor,

  learnMoreNavStyleSheet,
  learnMoreNavDotSize,
  learnMoreNavIconSize,
  learnMoreNavIconLightColor,
  learnMoreNavIconDarkColor,

  bottomNavStyleSheet,
  bottomNavIconSize,
  bottomNavIconColor,

  aboutStyleSheet,
  authLoadingStyleSheet,

  emailSignInStyleSheet,
  emailSignInErrorStyleSheet,
  emailSignUpStyleSheet,
  emailSignUpConfirmStyleSheet,

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
  signInStyleSheet,
  signInIconSize
}