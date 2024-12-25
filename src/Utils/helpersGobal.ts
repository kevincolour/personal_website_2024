
export const useGetHeight = () => {

    const headerHeight = window.document.getElementById("topHeaderBar");
     const HEIGHT_OFFSET = headerHeight?.clientHeight;
 return  "calc(100dvh - " + HEIGHT_OFFSET + "px)" 
}



export const useGetHeightOffset = () => {

    const headerHeight = window.document.getElementById("topHeaderBar");
    return  headerHeight?.clientHeight ?? 0;
}