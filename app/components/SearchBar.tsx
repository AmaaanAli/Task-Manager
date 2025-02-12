import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

interface SearchBarProps {
  query: string;
  onChange: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
  return (
    <View className="flex-row items-center bg-stone-800 p-2 rounded mb-4">
      <Feather name="search" size={20} color="white" className="mr-2" />
      <TextInput
        value={query}
        onChangeText={onChange}
        placeholder="S e a r c h   t a s k s . . ."
        placeholderTextColor="white"
        className="flex-1 text-white"
      />
    </View>
  );
};

export default SearchBar;
