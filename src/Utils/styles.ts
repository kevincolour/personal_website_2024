import { CSSProperties } from "react";
import { displayPartsToString } from "typescript";

type styleObj = {
    clickableOption: CSSProperties,
    smallText: CSSProperties,
    clickableOptionWrapper: CSSProperties
}

export const getStyles : () => styleObj = () => {
    
    return {
        clickableOption : {
            border: "1px dashed black",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "100% 100%",
            // backgroundAttachment: "fixed",
            padding: 10,
            boxSizing:"border-box"

    },
    clickableOptionWrapper : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    smallText: {
        fontSize: 18
    }
    

}
}