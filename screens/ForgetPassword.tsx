import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ForgetPassword = () => {
  return (
    <View style={styles.forgetPassword}>
      <Image
        style={[styles.loginBg2Icon, styles.loginPosition]}
        resizeMode="cover"
        source={require("../assets/loginbg-2.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={styles.send}>
          <Text style={styles.se}>Se</Text>
          <Text style={styles.nd}>nd</Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text
          style={[styles.username, styles.usernamePosition, styles.loginTypo]}
        >
          Username
        </Text>
        <Text style={[styles.typeHereYour, styles.loginParentPosition]}>
          Type here your phone number or email
        </Text>
      </View>
      <Image
        style={styles.eCommerceLogo1Icon}
        resizeMode="cover"
        source={require("../assets/ecommercelogo-1.png")}
      />
      <View style={[styles.loginParent, styles.loginParentPosition]}>
        <Text style={[styles.login, styles.loginTypo, styles.loginPosition]}>
          Login
        </Text>
        <View style={styles.groupInner} />
      </View>
      <View style={styles.forgetPasswordWrapper}>
        <Text style={[styles.forgetPassword1, styles.usernamePosition]}>
          Forget Password?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupItemLayout: {
    width: 300,
    position: "absolute",
  },
  usernamePosition: {
    color: Color.darkslateblue,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  loginParentPosition: {
    left: 13,
    position: "absolute",
  },
  loginBg2Icon: {
    width: 360,
    left: 0,
    height: 640,
  },
  groupChild: {
    top: -2,
    left: 27,
    width: 68,
    height: 68,
    position: "absolute",
  },
  se: {
    color: "#000",
  },
  nd: {
    color: Color.white,
  },
  send: {
    top: 18,
    fontSize: 25,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  ellipseParent: {
    top: 420,
    left: 247,
    width: 93,
    height: 64,
    position: "absolute",
  },
  groupItem: {
    top: 26,
    borderRadius: 8,
    backgroundColor: "#64b9fb",
    height: 45,
    left: 0,
  },
  username: {
    fontSize: FontSize.size_mini,
  },
  typeHereYour: {
    top: 40,
    fontFamily: FontFamily.interRegular,
    color: "#ebebeb",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  rectangleParent: {
    top: 324,
    left: 30,
    height: 71,
  },
  eCommerceLogo1Icon: {
    top: 24,
    left: 76,
    width: 209,
    height: 63,
    position: "absolute",
  },
  login: {
    fontSize: 16,
    color: Color.white,
    textAlign: "left",
    left: 0,
  },
  groupInner: {
    top: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 45,
    height: 1,
    left: 0,
    position: "absolute",
  },
  loginParent: {
    top: 604,
    width: 44,
    height: 20,
  },
  forgetPassword1: {
    fontSize: 20,
    fontFamily: FontFamily.righteousRegular,
  },
  forgetPasswordWrapper: {
    top: 173,
    left: 92,
    width: 172,
    height: 25,
    position: "absolute",
  },
  forgetPassword: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
  },
});

export default ForgetPassword;
