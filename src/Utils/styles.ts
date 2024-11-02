import { CSSProperties } from "react";
import { displayPartsToString } from "typescript";

type styleObj = {
    clickableOption: CSSProperties
}

export const getStyles : () => styleObj = () => {
    
    return {
        clickableOption : {
            border: "1px dashed black",
            display: "inline-block",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "100% 100%",
            // backgroundAttachment: "fixed",
            padding: 10
    }

}
}