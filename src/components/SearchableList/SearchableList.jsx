import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    //if i have a currently ongoing timer, i clear it and then i start a new one
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    //store the timer ID in my ref
    lastChange.current = setTimeout(() => {
      lastChange.current = null; //to clear the stored timer identifier (remove timer id from ref)
      setSearchTerm(event.target.value);
    }, 500);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
