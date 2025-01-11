import { Dispatch, FC, SetStateAction } from "react";

export type screenState = "handshake" | "introduction" | "start" | "initial";


export interface MyComponentProps  {
}
export interface MyComponent {
    name: string,
    commitedName?: string,
    typingString?: string,
    index: number,   
    previousComponent?: MyComponent
    actualComponent?: JSX.Element
}



export interface MouseData {
    x: number,
    y: number,   
}


export interface UserData {
    mouseData: MouseData,
    currentProgress: number,
    seenComponents: string[]

}

export type NextPageStates = "seethesea" | "argylesecondary" | "firsttimes"