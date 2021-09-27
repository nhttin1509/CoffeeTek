import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import {color} from 'react-native-elements/dist/helpers';
import Header from '../components/Header';
import {colors, parameters, title} from '../global/styles';
import * as Animatable from 'react-native-animatable';
const SignInScreen = () => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <SafeAreaView>
      <Header title="My account" type="arrow-left" />
      <View style={{margin: 12}}>
        <Text style={title}>Sign In</Text>

        <View>
          <TextInput
            style={styles.textInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>

        <View style={styles.textInput2}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: colors.brown}}
              type="material"
            />
          </Animatable.View>

          <TextInput
            style={{width: '80%', fontSize: 20}}
            placeholder="Password"
            ref={textInput1}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />

          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.brown}}
              type="material"
              style={{marginRight: 5}}
            />
          </Animatable.View>
        </View>

        <Button
          title="Sign In"
          buttonStyle={parameters.styleButton}
          titleStyle={parameters.buttonTittle}
        />
        {/* button */}

        <View style={{alignItems: 'center'}}>
          <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
            Forgot Password?
          </Text>
        </View>

        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text style={parameters.buttonTittle}>OR</Text>
        </View>

        <View>
          <SocialIcon
            title="Sign In With Facebook"
            button
            type="facebook"
            style={styles.SocialIcon}
            onPress={() => {}}
          />
        </View>

        <View>
          <SocialIcon
            title="Sign In With Google"
            button
            type="google"
            style={styles.SocialIcon}
            onPress={() => {}}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.text1}>New on CoffeeTek</Text>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey,
    fontSize: 20,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: colors.brown,
    borderRadius: 12,
    marginVertical: 20,
    fontSize: 20,
    padding: 5,
    paddingLeft: 15,
  },
  textInput2: {
    borderWidth: 1,
    borderColor: colors.brown,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 25,
    padding: 5,
    paddingLeft: 15,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.brown,
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.brown,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignInScreen;
