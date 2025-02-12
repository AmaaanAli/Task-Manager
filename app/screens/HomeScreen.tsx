import React, { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  Button,
  Modal,
  Text,
  Alert,
  Pressable
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addTask, updateTask, deleteTask } from "../redux/taskSlice";
import TaskItem from "../components/TaskItem";
import FAB from "../components/FAB";
import SearchBar from "../components/SearchBar";

const HomeScreen: React.FC = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [completionDate, setCompletionDate] = useState<Date | null>(null);

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );

  const openModalForNewTask = () => {
    setTaskId(null);
    setTitle("");
    setDescription("");
    // setDueDate(new Date());
    setIsModalVisible(true);
  };

  const openModalForEditTask = (task: {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    completionDate: Date | null;
  }) => {
    setTaskId(task.id);
    setTitle(task.title);
    setDescription(task.description);
    // setDueDate(task.dueDate);
    setCompletionDate(task.completionDate);
    setIsModalVisible(true);
  };

  const handleSave = () => {
    if (!title) {
      Alert.alert("Validation Error", "Title is required.");
      return;
    }

    const task = {
      id: taskId || Date.now().toString(),
      title,
      description,
    //   dueDate,
      completionDate,
    };

    if (taskId) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask(task));
    }

    setIsModalVisible(false);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };


      const handleCompletionDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
          setCompletionDate(selectedDate);
        }
      };


  return (
    <View className="flex-1 bg-stone-900 p-4">
      <SearchBar query={query} onChange={setQuery} />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={handleDelete}
            onPress={() => navigation.navigate("TaskDetail", { task: item })}
            onEdit={() => openModalForEditTask(item)}
          />
        )}
      />
      <FAB onPress={openModalForNewTask} />

      {/* Add/Edit Task Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-stone-900">
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
            placeholderTextColor="#A1A1AA"
            className="border p-4 rounded-lg mb-4 w-80 border-cyan-400 text-white tracking-widest"
          />
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
            placeholderTextColor="#A1A1AA"
            className="border p-4 rounded-lg mb-4 w-80 border-cyan-400 text-white tracking-widest"
          />
          {/* Completion Date Picker */}
          <Text
            className="border p-4 rounded-lg mb-4 w-80 border-cyan-400 text-white tracking-widest"
            onPress={() => setShowDatePicker(true)}
          >
            {completionDate
              ? completionDate.toDateString()
              : "Select Completion Date"}
          </Text>
          {showDatePicker && (
            <DateTimePicker
              value={completionDate || new Date()}
              mode="date"
              display="default"
              onChange={handleCompletionDateChange}
            />
          )}

          {/* Save/Cancel Buttons */}
          <View className="flex-row justify-between mt-4 w-80">
            <Pressable
              onPress={handleSave}
              className="flex-1 bg-emerald-500 p-3 rounded mr-2"
            >
              <Text className="text-white text-center font-semibold text-base tracking-widest">
                Save Task
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setIsModalVisible(false)}
              className="flex-1 bg-red-500 p-3 rounded ml-2"
            >
              <Text className="text-white text-center font-semibold text-base tracking-widest">
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
