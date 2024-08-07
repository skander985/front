// src/api/authApi.js

// import axiosClient from './axiosClient';

// export const registerUser = async (userData) => {
//   try {
//     const response = await axiosClient.post('/auth/register', userData);
//     return response.data;
//   } catch (error) {
//     throw error.response || error;
//   }
// };
// src/api/authApi.js

import axiosClient from './axiosClient';

export const registerUser = async (role, userData) => {
  try {
    const response = await axiosClient.post(`/auth/register?role=${role}`, userData);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};
export const signIn = async (email, password) => {
    try {
      const response = await axiosClient.post('/auth/login', null, {
        params: {
          email,
          motDePasse: password
        }
      });
      return response.data;
    } catch (error) {
      throw error.response || error;
    }
  };

