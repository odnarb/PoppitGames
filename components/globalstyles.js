import {
  Dimensions,
  StyleSheet
} from 'react-native'

import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = width - 20;

const carouselShownPosition = height-moderateScale(320);

const iconMediumSize = moderateScale(32);
const iconLargeSize = moderateScale(42);

/*
https://paletton.com/#uid=70g0u0kuGrmkbyxpwuLxbm9ESh3

//Red-orange
color-primary-0 { color: #DA4709 } // Main Primary color
color-primary-1 { color: #FF8E5E } //lightest
color-primary-2 { color: #F56C32 } //lighter
color-primary-3 { color: #B13500 } //darker
color-primary-4 { color: #882900 } //darkest

//Dirty yellow, almost orange
color-secondary-1-0 { color: #DA8209 } Main Secondary color (1)
color-secondary-1-1 { color: #FFBB5E } //lightest
color-secondary-1-2 { color: #F5A332 } //lighter
color-secondary-1-3 { color: #B16600 } //darker
color-secondary-1-4 { color: #884F00 } //darkest

//Blue-ish
color-secondary-2-0 { color: #0F548D } Main Secondary color (2)
color-secondary-2-1 { color: #477EAC } //lightest
color-secondary-2-2 { color: #29699E } //lighter
color-secondary-2-3 { color: #074272 } //darker
color-secondary-2-4 { color: #043258 } //darkest

//Green-ish
color-complement-0 { color: #06945B } //Main Complement color
color-complement-1 { color: #43B486 } //lightest
color-complement-2 { color: #22A771 } //lighter
color-complement-3 { color: #007848 } //darker
color-complement-4 { color: #005C37 } //darkest
*/

const blueColor = "#5bc0eb";
const lightblueColor = "#8bdafc";
const yellowColor = "#fde74c";
const greenColor = "#9bc53d";
const redColor = "#c34231";
const lightRedColor  = "#ff5e5e";
const greyColor = "#404e4d";
const lightGreyColor = "#def0ef";

const flatLightGreyColor = "#dcdcdc";
const whiteColor = "#fff";
const blackColor = "#000";

const settingsIconSize = iconMediumSize;
const learnMoreNavDotSize = iconMediumSize;
const learnMoreNavIconSize = iconMediumSize;
const learnMoreNavIconLightColor = flatLightGreyColor;
const learnMoreNavIconDarkColor = greyColor;

const bottomNavIconSize = moderateScale(32);
const bottomNavIconColor = greyColor;

const passwordInputIconSize = moderateScale(25);
const passwordInputIconColor = greyColor;

const birthdayInputSize = moderateScale(40);

const searchResultsIconColor = lightblueColor;
const searchResultsIconSize = moderateScale(20);

const signInIconSize = iconLargeSize;

const globalStyles = {
  baseContainer: {
    flex: 1,
    //backgroundColor: greyColor
  },

  blue: {
    color: blueColor
  },

  lightblue: {
    color: lightblueColor
  },

  grey: {
    color: greyColor
  },

  greyBG: {
    backgroundColor: greyColor
  },

  lightGrey: {
    color: lightGreyColor
  },

  flatLightGrey: {
    color: flatLightGreyColor
  },

  flatLightGreyBG: {
    backgroundColor: flatLightGreyColor
  },

  lightGreyBG: {
    backgroundColor: lightGreyColor
  },

  white: {
    color: whiteColor
  },

  whiteBG: {
    backgroundColor: whiteColor
  },

  black: {
    color: blackColor
  },

  yellow: {
    color: yellowColor
  },

  green: {
    color: greenColor
  },

  greenBG: {
    backgroundColor: greenColor
  },

  red: {
    color: redColor
  },

  padLeft20: {
    paddingLeft: moderateScale(20),
  },
  padRight20: {
    paddingRight: moderateScale(20),
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

  smallSquareLogo:{
    height: verticalScale(50),
    width: verticalScale(50)
  },

  contentContainer: {
    flex: 7
  },

  textHeader: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginTop: moderateScale(6),
    marginBottom: moderateScale(30)
  },

  text: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10)
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
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10)
  },

  settingsText: {
    fontSize: moderateScale(17),
    marginTop: moderateScale(5),
    paddingLeft: moderateScale(15)
  },

  settingsValue: {
    fontSize: moderateScale(20),
    marginLeft: "auto",
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10)
  },

  copyrightText :{
    paddingLeft: moderateScale(10),
    marginTop: moderateScale(10),
    fontSize: moderateScale(14)
  },
  settingsRow: {
    flex: 1,
    borderTopColor: greyColor,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingLeft: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    justifyContent: "center",
  },
  copyrightRow: {
    flex: 1,
    borderTopColor: greyColor,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingLeft: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10)
  },
  picker: {
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
    backgroundColor: flatLightGreyColor,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: moderateScale(20),
  },

  btnLight: {
    color: greyColor,
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    textAlign:'center'
  },

  buttonDark: {
    width: "100%",
    height: verticalScale(64),
    borderColor: greyColor,
    backgroundColor: greyColor,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: moderateScale(20)
  },

  btnDark: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    textAlign:'center'
  },

  marginLeft10: {
    marginLeft: moderateScale(10)
  },
  marginRight10: {
    marginRight: moderateScale(10)
  },
  marginBottom10: {
    marginBottom: moderateScale(10)
  },
  marginTop10: {
    marginTop: moderateScale(10)
  }
};

const settingsStyles = {

};

const aboutStyles = {

  versionContainer:{
    flex:3,
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    paddingTop: moderateScale(10),

    shadowColor: greyColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,

    elevation: 5,
    backgroundColor: lightGreyColor
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
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  textInput: {
    fontSize: moderateScale(18),
    marginTop: scale(10),
    width: "100%"
  },

  termsText: {
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
    marginTop: moderateScale(10)
  },

  tutorialText: {
    marginTop: moderateScale(10),
    fontSize: moderateScale(17),
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
    borderTopColor: greyColor,
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
    fontWeight: 'bold'
  },

  optionSubHeader: {
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    marginTop: moderateScale(10)
  },

  optionDescription: {
    fontSize: moderateScale(15),
    marginTop: moderateScale(10)
  }
};

const prizesStyles = {

  contentContainer: {
    flex: 6
  },

  prizeContainer: {
    flex: 0.3,
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
    borderColor: "#000",
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  prizeText: {
    fontSize: moderateScale(18),
    textAlign: "center"
  }
};

const profileStyles = {

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
    width: "100%"
  },

  inputLabel: {
    fontSize: moderateScale(12)
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

  learnMoreText: {
    fontSize: moderateScale(16)
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
    backgroundColor: greyColor,
    borderColor: greyColor,
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
      color: whiteColor,
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
    top: 0,
    height: verticalScale(60),
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderWidth: 0
  },

  searchBarInnerContainer: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center"
  },

  searchBar: {
    flex: 1,
    backgroundColor: "#ccc",
    borderWidth: 0,
    shadowColor: '#fff',
    borderColor: '#fff',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },

  searchResultsIndicatorContainer: {
    height: verticalScale(30),
    backgroundColor: greyColor
  },

  searchResultsIndicatorView: {
    paddingTop: moderateScale(4)
  },

  searchResultsIndicator: {
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: moderateScale(5)
  },

  searchResultsIndicatorText: {
  },

  mapContainer: {
    flex: 8,
  },

  scrollView: {
    // backgroundColor: "red",
    height: CARD_HEIGHT + moderateScale(20),
    position: "absolute",
    bottom: verticalScale(120),
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
    backgroundColor: whiteColor,
    marginHorizontal: 10,
    shadowColor: blackColor,
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
    fontSize: moderateScale(12)
  },

  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },

  marker: {
    flex: 1,
    paddingLeft: moderateScale(5),
    paddingRight: moderateScale(5),
    // width: moderateScale(48),
    // height: moderateScale(20),
    borderRadius: moderateScale(8),
    // backgroundColor: "blue"
  },

  regularMarker: {
      backgroundColor: blueColor
  },

  selectedMarker: {
      backgroundColor: greenColor
  },

  visitedMarker: {
      backgroundColor: lightblueColor
  },

  markerText: {
    alignSelf: "center"
  }
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

const bottomNavStyles = {
  navContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  navBtn: {
    flex: 1,
    justifyContent: 'center'
  },

  navBtnView: {
    alignItems: "center",
    justifyContent: "center"
  },

  navText: {
    fontSize: moderateScale(14)
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
  }
};

const passwordStyleSheet = StyleSheet.create(passwordStyles);
const learnMoreNavStyleSheet = StyleSheet.create({ ...globalStyles, ...learnMoreNavStyles});
const bottomNavStyleSheet = StyleSheet.create({ ...globalStyles, ...bottomNavStyles});

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

  greyColor,
  whiteColor,
  blueColor,
  lightblueColor,

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
  searchResultsIconColor,
  searchResultsIconSize,
  carouselShownPosition,

  notificationsStyleSheet,
  prizesStyleSheet,
  profileStyleSheet,

  profileEditStyleSheet,
  birthdayInputSize,

  recoverPasswordStyleSheet,
  recoverPasswordConfirmStyleSheet,
  settingsStyleSheet,
  settingsIconSize,
  signInStyleSheet,
  signInIconSize
}