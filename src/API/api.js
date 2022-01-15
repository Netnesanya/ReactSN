import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY':"c856c776-e757-4ea7-a3d1-a5e23f120f88"}});

export const authAPI = {

    login(email, password, rememberMe = false) {

        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    me() {
        return  instance.get(`auth/me`) },
    logout() {
        return instance.delete(`auth/login/`)
    },
}
export const profileAPI = {
    getProfile(userId) {

   return instance.get(`profile/${userId}`)
},
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status : status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {headers: {
            'Content-Type': 'multipart/form-data'
            }})
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