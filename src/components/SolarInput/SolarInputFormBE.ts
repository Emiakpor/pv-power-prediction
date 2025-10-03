// api.ts
import axios from 'axios';
import { Alert } from "react-native"

import {  PVInputRequest } from '@/models/SolarPanelDataModel'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";

export const predictHandler = async (
  setPrediction: React.Dispatch<React.SetStateAction<number | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  panelParams
): Promise<void> => {
   const router = useRouter();
  const API_URL = "https://pv-power-prediction-api-1.onrender.com/predict";
  setLoading(true);
  try {
    const response = await axios.post(API_URL, panelParams);
    const data = response.data;

    const records = data.records
    const date = data.date
    const y_true = records["y_true"]
    const y_pred = records["y_pred"]
    const metrics = records["metrics"]

    const date_val = jsonToSortedList(date);
    const predict_data= concatenateDatesAndValues(date_val, y_pred)
    const actual_pred_data= concatenateDatesAndPredTrueValue(date_val, y_true, y_true)
    

    await AsyncStorage.setItem('y_true', JSON.stringify(y_true));
    await AsyncStorage.setItem('y_pred', JSON.stringify(y_pred));
    await AsyncStorage.setItem('metrics', JSON.stringify(metrics));
    await AsyncStorage.setItem('predict_data', JSON.stringify(predict_data));
    await AsyncStorage.setItem('actual_pred_data', JSON.stringify(actual_pred_data));

    router.push("/(tabs)/chart");

  } catch (err: any) {
    if (err.response) {
      // Server responded with a status code (4xx, 5xx)
      alert("Server Error: " + JSON.stringify(err.response.data));
    } else if (err.request) {
      alert("No response from server");
    } else {
      alert("Error: " + err.message);
    }
    setLoading(false);    

  } finally {
    setLoading(false);
  }
};


const  jsonToSortedList = (jsonInput) => {
  // If it's already an object, skip parsing
  const obj = typeof jsonInput === "string" ? JSON.parse(jsonInput) : jsonInput;

  return Object.keys(obj)
    .sort((a, b) => Number(a) - Number(b))
    .map((key) => obj[key]);
}

const concatenateDatesAndValues = (dates, values) => {
  if (dates.length !== values.length) {
    throw new Error("Arrays must have the same length");
  }

  return dates.map((date, index) => ({
    datetime: date,
    value: values[index],
  }));
}

const concatenateDatesAndPredTrueValue = (dates, actual, pred_val) => {
  if (dates.length !== pred_val.length && dates.length !== actual.length) {
    throw new Error("Arrays must have the same length");
  }

  return dates.map((date, index) => ({
    datetime: date,
    predicted : pred_val[index],
    actual  : actual[index],
  }));
}