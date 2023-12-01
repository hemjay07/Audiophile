import React from "react";
import styled from "styled-components";
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1; //so it is positioned most behind in the container
`;

export default function (props) {
  //put the overlay in the logic that displays the component that you want to lay on top and send a prop (callback)which is the setState of that compnent. That way when the overlay is clicked, it sets the state to false and the component diasppears.

  //make sure this component is only called at the topmost part layer of your component, that way the parent used to position it is the right parent
  return (
    <Overlay
      onClick={() => {
        // setShowMenu(false);
        props.callback(false);
      }}
    ></Overlay>
  );
}
