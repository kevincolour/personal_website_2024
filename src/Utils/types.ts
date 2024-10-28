import { Dispatch, FC, SetStateAction } from "react";

export type screenState = "handshake" | "introduction" | "start" | "initial";


export interface MyComponentProps  {
}
export interface MyComponent {
    name: string,
    index: number,   
}



export interface MouseData {
    x: number,
    y: number,   
}


export interface UserData {
    mouseData: MouseData,

}
