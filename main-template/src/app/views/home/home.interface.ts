export interface HomeInfo{
    _id: string,
    hodMessage: string,
    email: string,
    contactNumber: string, 
    homePictures: HomeImage[],
    createdAt: string 
}

export interface HomeUpdate {
    email: string,
    contactNumber: string,
}

export interface HodUpdate {
    hodMessage: string,
}

export interface DefaultMessage {
    isFulfilled: boolean, 
    isRejected: boolean, 
    info: string
}

export interface HomeImage {
    _id: string,
    filename: string
}