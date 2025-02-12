# **Task Manager App**

A simple Task Manager app built with **React Native** and **Redux Toolkit**. The app helps users manage tasks efficiently with features like adding, editing, deleting, and viewing task details.

---

## **Features**
- **Home Screen**
  - Display a list of tasks with a title and due date.
  - Add or edit tasks using a modal form.
  - Delete tasks with a single click.
  - Search for tasks by title.
  - Navigate to the Task Details screen for more information about a task.

- **Task Details Screen**
  - View full details of a task, including title, description, and due date.
  - Navigate back to the Home Screen.

---

## **Technologies Used**
- **React Native** (Expo)
- **Redux Toolkit** for state management
- **TypeScript** for type safety
- **NativeWind** for styling (Tailwind CSS in React Native)

---
**Clone the repository:**
   Open your terminal or command prompt and run the following command:
   
   ### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/AmaaanAli/Task-Manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Task-Manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npx expo start
   ```

## File Structure

├── assets/           // Assets like images, fonts, etc.
├── components/       // Reusable UI components
│   ├── FAB.tsx       // Floating Action Button component
│   ├── SearchBar.tsx // Search bar component
│   ├── TaskItem.tsx  // Task item component for the task list
├── navigation/       // Navigation setup
│   ├── AppNavigator.tsx // Main navigation configuration
├── redux/            // Redux state management
│   ├── store.ts      // Redux store configuration
│   ├── taskSlice.ts  // Redux slice for task state
├── screens/          // App screens
│   ├── HomeScreen.tsx        // Home screen with task list and Add/Edit functionality
│   ├── TaskDetailScreen.tsx  // Screen to view task details
├── types/            // Type definitions
│   ├── task.ts       // Task interface/type
├── App.tsx           // Root component of the app
├── index.tsx         // Entry point of the application
├── package.json      // Project dependencies
├── tsconfig.json     // TypeScript configuration


