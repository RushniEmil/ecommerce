import { createContext } from "react";

const CategoryContext=createContext("");
const CategoryProvider=CategoryContext.Provider
const CategoryConsumer=CategoryContext.Consumer

export { CategoryContext, CategoryProvider, CategoryConsumer}