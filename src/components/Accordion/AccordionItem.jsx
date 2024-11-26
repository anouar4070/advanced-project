import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <Accordion.Item>."
    );
  }

  return ctx;

}

export default function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}

// we enhance the code using toggleItem() instead of:
// function handleClick() {
//   if (isOpen) {
//     closeItem();
//   } else {
//     openItem(id);
//   }
// }

//<h3 onClick={handleClick}>{title}</h3>
