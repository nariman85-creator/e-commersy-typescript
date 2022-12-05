import React, { MutableRefObject, ReactElement, ReactNode } from "react";
// import { Link } from "react-router-dom";
// import { SectionTitle } from "../SectionTitle";
interface UlListProps {
  components: () => ReactNode | ReactNode[];
  slide_ref: MutableRefObject<HTMLUListElement | null>;
  rootClass: string;
}

export const List: React.FC<UlListProps> = ({
  components,rootClass,slide_ref
}): ReactElement => {
  return (
    <ul className={`list list--reset product-catalog--list shop--list ${rootClass}`} ref={slide_ref}>
      {Array(12).fill('hello').map((elem, idx) => (
        <li key={idx}>{components()}</li>
      ))}
    </ul>
  );
};
