
export const useGetHeight = (offsetMore?: number) => {

    const headerHeight = window.document.getElementById("topHeaderBar");
     const HEIGHT_OFFSET = headerHeight?.clientHeight;
 return  "calc(100dvh - " + ((HEIGHT_OFFSET ?? 0) + (offsetMore ?? 0)) + "px)" 
}



export const useGetHeightOffset = () => {

    const headerHeight = window.document.getElementById("topHeaderBar");
    return  headerHeight?.clientHeight ?? 0;
}