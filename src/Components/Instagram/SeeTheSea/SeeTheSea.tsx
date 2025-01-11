import { ClickableText } from "../../Util/ClickableText";
import { MyComponentWrapper } from "../../Util/MyComponentWrapper";

export const SeeTheSea = () => {
  const onClickHandlerOption1 = () => {};
  return (
    <>
      <MyComponentWrapper>
        <div>
          we sure did see some sea
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
