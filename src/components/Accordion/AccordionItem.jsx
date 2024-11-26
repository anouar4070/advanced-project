export default function AccordionItem({ className, children }) {
  return <li className={className}>{children}</li>;
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
