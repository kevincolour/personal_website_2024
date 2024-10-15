import { Dispatch, FC, SetStateAction } from "react";

export type screenState = "handshake" | "introduction" | "start" | "initial";


export interface MyComponentProps  {
}
export interface MyComponent {
    name: string,
    index: number,   
}