import axios from "axios";

const API_URL = "http://localhost:3000/events";

export const fetchEvents = async () => {
  try {
    const { data } = await axios.get(API_URL);

    return data;
  } catch (error) {
    return error.response;
  }
};

export const createEvent = async (Event) => {
  try {
    const { data } = await axios.Event(API_URL, Event);
    return data;
  } catch (error) {
    return error.response;
  }
};

export const updateEvent = async (id, Event) => {
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, Event);
    return data;
  } catch (error) {
    return error.response;
  }
};

export const deleteEvent = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    return error.response;
  }
};
