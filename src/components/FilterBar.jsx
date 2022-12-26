import React from 'react'

const FilterBar =({setFilterQuery}) => {
  return (
    <select className='filter' onChange={(e) => setFilterQuery(e.target.value)}>
      <option value="all">all</option>
      <option value="incomplete" defaultValue>incomplete</option>
      <option value="completed">completed</option>
    </select>
  )
}

export default FilterBar