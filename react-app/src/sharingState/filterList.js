import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
    const [query, setQuery] = useState('');
  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <>
      <SearchBar squery={query} handleChangeInput={handleChange}/>
      <hr />
      <List items={filterItems(foods,query)} />
    </>
  );
}

function SearchBar({squery,handleChangeInput}) {

  return (
    <label>
      Search:{' '}
      <input
        value={squery}
        onChange={handleChangeInput}
      />
    </label>
  );
}


function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
