import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native'
import colors from "../colors"

const backImage = require("../assets/background.png");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
        <Image source={backImage} style={styles.backImage}>Login</Image>
        <SafeAreaView style={styles.bgColorSheet}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="이메일"
            autoCapitalize="none"
            keyboardType="emailAddress"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text)=>setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            autoCapitalize="none"
            textContentType="password"
            value={password}
            onChangeText={(text)=>setPassword(text)}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>
          <View style={styles.joinView}>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinText}></Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bGround
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 24
  },
  backImage: {
    width: '100%',
    height: 340,
    position: 'absolute',
    top: 0,
    resizeMode: 'cover'
  },
  bgColorSheet: {
    width: '100%',
    height: '75',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.bGround,
    borderTopLeftRadius: 60
  },
  input: {
    backgroundColor: colors.lightGray,
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 60
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18
  }
});

export default Login