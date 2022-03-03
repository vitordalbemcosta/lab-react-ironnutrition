import { Divider, Input } from 'antd';
import { useState } from 'react';

function SearchBar(props) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    props.search(e.target.value);
  };
  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
