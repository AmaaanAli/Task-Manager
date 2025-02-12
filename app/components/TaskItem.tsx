import React from "react";
import { View, Text, Button } from "react-native";

const TaskItem: React.FC<{
  task: any;
  onDelete: (id: string) => void;
  onPress: () => void;
  onEdit: () => void;
}> = ({ task, onDelete, onPress, onEdit }) => {
  return (
    <View className="flex-row justify-between items-center p-2 bg-stone-800 mb-6 rounded-lg">
      <View className="flex-1 p-4">
        <Text
          className="text-2xl font-semibold text-teal-300 tracking-widest"
          onPress={onPress}
        >
          {task.title}
        </Text>
        <Text className="mt-1 font-semibold text-white">{`Completion Date: ${
          task.completionDate
            ? new Date(task.completionDate).toDateString()
            : "Not Completed"
        }`}</Text>
      </View>
      <View className="flex flex-row gap-2">
        <Button title="Edit" onPress={onEdit} color="#0d9488" />
        <Button title="Delete" onPress={() => onDelete(task.id)} color="red" />
      </View>
    </View>
  );
};


export default TaskItem;
