import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY':"19c1aa65-9581-46aa-8648-ba575e49b416"}});

export const authAPI = () => {
  return  instance.get(`auth/me`)}

export const profileAPI = {
    getProfile(userId) {
   return instance.get(`profile/${userId}`)
},
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status : status})
    }
};
export const getUsersAPI = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
         return response.data}
      )}



export const followAPI = (id) => {
  return instance.get(`follow/${id}`)
      .then(response => {
         return response.data}
      )}