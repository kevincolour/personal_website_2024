
export const useGetHeight = (offsetMore?: number) => {

    const headerHeight = window.document.getElementById("topHeaderBar");
     const HEIGHT_OFFSET = headerHeight?.clientHeight;
 return  "calc(100dvh - " + ((HEIGHT_OFFSET ?? 0) + (offsetMore ?? 0)) + "px)" 
}



export const useGetHeightOffset = () => {

    const headerHeight = window.document.getElementById("topHeaderBar");
    return  headerHeight?.clientHeight ?? 0;
}


/**
 * Traverse any props.children to get their combined text content.
 *
 * This does not add whitespace for readability: `<p>Hello <em>world</em>!</p>`
 * yields `Hello world!` as expected, but `<p>Hello</p><p>world</p>` returns
 * `Helloworld`, just like https://mdn.io/Node/textContent does.
 *
 * NOTE: This may be very dependent on the internals of React.
 */
export function textContent(elem: React.ReactElement | string): string {
    if (!elem) {
      return '';
    }
    if (typeof elem === 'string') {
      return elem;
    }
    if (typeof elem === 'object' && Object.keys(elem.props).indexOf("text") > -1) {
        return elem.props.text;
      }
    // Debugging for basic content shows that props.children, if any, is either a
    // ReactElement, or a string, or an Array with any combination. Like for
    // `<p>Hello <em>world</em>!</p>`:
    //
    //   $$typeof: Symbol(react.element)
    //   type: "p"
    //   props:
    //     children:
    //       - "Hello "
    //       - $$typeof: Symbol(react.element)
    //         type: "em"
    //         props:
    //           children: "world"
    //       - "!"
    const children = elem.props && elem.props.children;
    if (children instanceof Array) {
      return children.map(textContent).join('');
    }
    return textContent(children);
  }