export type PostDataType = {
    id: number
    message: string
    likes: number
}
export type ContactsType = {
    github:string
    vk: string
    facebook: string
    instagram: string
    website: string
    twitter: string
    youtube: string
    mainLink: string

}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}


export type UsersType = {
    id: number
    name: string
    status:string
    photos: PhotosType
    followers: number
}