import React from 'react'

const FilterBar =() => {
  return (
    <select className='filter'>
      <option value="all">all</option>
      <option value="incomplete" defaultValue>incomplete</option>
      <option value="completed">completed</option>
    </select>
  )
}

export default FilterBar