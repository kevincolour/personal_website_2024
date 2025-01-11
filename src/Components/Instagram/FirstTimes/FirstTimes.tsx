import { ClickableText } from "../../Util/ClickableText";
import { MyComponentWrapper } from "../../Util/MyComponentWrapper";

export const FirstTimes = () => {
  const onClickHandlerOption1 = () => {};
  return (
    <>
      <MyComponentWrapper>
        <div>
          My first instagram post...
          {/* <div>
            <ClickableText
              onClickHandler={onClickHandlerOption1}
              text="University of Toronto, Computer Science"
            />
          </div> */}
        </div>
      </MyComponentWrapper>
    </>
  );
};
