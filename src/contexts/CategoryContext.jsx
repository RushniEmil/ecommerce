import { createContext } from "react";

const CategoryContext = createContext(""); // Create context with an empty string default value

const CategoryProvider = CategoryContext.Provider; // Export the Provider component
const CategoryConsumer = CategoryContext.Consumer; // Export the Consumer component

export { CategoryContext, CategoryProvider, CategoryConsumer };
