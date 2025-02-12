import React from "react";
import { View, Text, Button } from "react-native";

const TaskDetailScreen: React.FC = ({ route, navigation }) => {
  const { task } = route.params;

  return (
    <View className="flex-1 justify-center pl-10 bg-stone-900">
      <View className="max-w-sm rounded overflow-hidden bg-stone-800 p-6">
        <Text className="text-2xl text-emerald-500 font-bold mb-2 tracking-widest text-center">
          {task.title}
        </Text>
        <Text className="text-lg mb-4 text-white tracking-widest text-center">
          {task.description || "No description provided."}
        </Text>
        <Text className="text-sm text-white mb-4 text-center tracking-widest text-cyan-500">
          Completion Date: {new Date(task.completionDate).toDateString()}
        </Text>
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
            color="#06b6d4"
          />
      </View>
    </View>
  );
};

export default TaskDetailScreen;
