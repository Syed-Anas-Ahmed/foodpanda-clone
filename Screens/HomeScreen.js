import { SafeAreaView, Text, View, Image, StatusBar, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";

const barTop = StatusBar.currentHeight;

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-12 pb-10">
      <View className="bg-white flex-row pb-3 px-3 space-x-2 items-end">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-11 h-11 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400">Deliver Now!</Text>
          <View className="flex-row items-baseline">
            <Text className="font-bold text-xl">Current Location</Text>
            <AntDesign
              style={{ marginHorizontal: 5 }}
              name="downcircleo"
              size={18}
              color="black"
            />
          </View>
        </View>
        <FontAwesome name="user-circle" size={35} color="black" />
      </View>
      <View className="flex-row items-center space-x-3 px-3 justify-between">
      <View className="bg-gray-200 flex-row flex-1 p-2 space-x-3 items-center">
        <FontAwesome name="search" size={20} color="black" />
        <TextInput placeholder="Resturants and Cusines" />
      </View>
      <Entypo name="sound-mix" size={24} color="black" />
      </View>
      <ScrollView>
        {/* categories */}
        <Categories/>

        {/* featured */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
