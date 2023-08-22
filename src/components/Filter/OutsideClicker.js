import React, { useEffect, useRef } from "react";

export function OutsideClicker(props) {
  const wrapperRef = useRef(null);
  // let { isActive, setActive } = props;
  let { perOurIsActive, setPerOurIsActive, modelIsActive, setModelIsActive } = props;

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        console.log('ref', ref.current)
        console.log('event', event);
        if (ref.current && !ref.current.contains(event.target)) {
          // console.log('ref', ref.current)
          // console.log('event', event)
            // setActive((isActive = false));
            setModelIsActive((modelIsActive = false));
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}