import { ClickableText } from "../../Util/ClickableText";
import { MyComponentWrapper } from "../../Util/MyComponentWrapper";

export const ArgyleSecondary = () => {
  const onClickHandlerOption1 = () => {};
  return (
    <>
      <MyComponentWrapper>
        <div>
          it sure is!
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
