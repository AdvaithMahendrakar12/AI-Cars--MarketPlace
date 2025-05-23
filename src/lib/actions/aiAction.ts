
"use server";
import { console } from "inspector";
import { aiService } from "../ai";
import { extractJSON, isNotCarFound } from "../utils";

export const findCar = async (carDescription: string) => {
  const result = await aiService.searchAgent(carDescription);

  const notFound = isNotCarFound(result);

  if (notFound) throw new Error("No car found");

  return result;
};

export const autoGenerateCar = async (carName: string) => {
  try {
    console.log("Start of autoGenerateCar");
    console.log("Car name:", carName);
    const response = await aiService.generateCarAgent(carName);
    console.log("Response from AI:", response);
    const parsed = extractJSON(response);
    return parsed;
  } catch (error) {
    console.error("Error in autoGenerateCar:", error);
    return null;
  }
};

