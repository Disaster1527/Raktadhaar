export interface Donor {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  bloodType: string;
  lastDonation: string;
  medicalConditions: string;
}

export const saveToLocalStorage = (key: string, data: any) => {
  try {
    const existingData = getFromLocalStorage(key) || [];
    const newData = Array.isArray(existingData) ? [...existingData, data] : [data];
    localStorage.setItem(key, JSON.stringify(newData));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

export const getFromLocalStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export const clearLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};