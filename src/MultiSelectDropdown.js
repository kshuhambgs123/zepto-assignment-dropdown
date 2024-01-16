

import React, { useEffect, useState } from 'react';
import './mul.css';

const   MultiSelectDropdown = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  

  const allItems = [
    { id: 1, name: 'Subham Kumar', image: 'https://i.pinimg.com/236x/0d/a8/87/0da8872e1ca3e247aef7f75f64a75a5f--learn-coding-logos.jpg' ,email_id:"hola@gmail.com"},
    { id: 2, name: 'Dip prokash ', image: 'https://i.pinimg.com/236x/0d/a8/87/0da8872e1ca3e247aef7f75f64a75a5f--learn-coding-logos.jpg',email_id:"hola2@gmail.com" },
    { id: 3, name: 'Ari Dom', image: 'https://i.pinimg.com/236x/0d/a8/87/0da8872e1ca3e247aef7f75f64a75a5f--learn-coding-logos.jpg',email_id:"hola3@gmail.com" },

  ];

  const [filteredItems ,setFiltetItems]=useState(allItems)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    const isSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);

    if (isSelected) {
      // Item is already selected, remove it
      const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
      setSelectedItems(updatedItems);
    } else {
      // Item is not selected, add it
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCloseIconClick = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
    setSelectedItems(updatedItems);
  };

  const handleFilterChange = (event) => {
    setIsOpen(true)
    setFilterText(event.target.value);
  setFiltetItems(allItems.filter((item) =>
  item.name.toLowerCase().includes(filterText.toLowerCase())
))
  };




  return (
    <div className="multi-select-dropdown">
      <div className="selected-items" onClick={toggleDropdown}>
        {selectedItems.map((item) => (
          <div key={item.id} className="selected-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <span className="item-name">{item.name}</span>
            <span className="close-icon" onClick={() => handleCloseIconClick(item)}>
              &times;
            </span>
          </div>
        ))}
        <input
        style={{
          
        outline:'none',
        border:'none'
        }}
          type="text"
          placeholder="Add Users..."
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{width:'full'}}
              className={`dropdown-item ${selectedItems.some((selectedItem) => selectedItem.id === item.id) ? 'selected' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <img src={item.image} alt={item.name} className="item-image" />
              <span className="item-name">{item.name}</span>
              <span className="item-name" style={{textAlign:'end'}}>{item.email_id}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;



/*

import React, { useState } from 'react';
 import './mul.css'
const MultiSelectDropdown = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  
  const allItems = [
    { id: 1, name: 'Item1', image: 'https://i.pinimg.com/236x/0d/a8/87/0da8872e1ca3e247aef7f75f64a75a5f--learn-coding-logos.jpg' },
    { id: 2, name: 'Item2', image: 'https://i.pinimg.com/236x/0d/a8/87/0da8872e1ca3e247aef7f75f64a75a5f--learn-coding-logos.jpg' },
    { id: 3, name: 'Item3', image: 'https://i.pinimg.com/236x/0d/a8/87/0da8872e1ca3e247aef7f75f64a75a5f--learn-coding-logos.jpg' },
    // Add more items as needed
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    const isSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);

    if (isSelected) {
      // Item is already selected, remove it
      const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
      setSelectedItems(updatedItems);
    } else {
      // Item is not selected, add it
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCloseIconClick = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
    setSelectedItems(updatedItems);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="multi-select-dropdown">
      <div className="selected-items" onClick={toggleDropdown}>
        {selectedItems.map((item) => (
          <div key={item.id} className="selected-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <span className="item-name">{item.name}</span>
            <span className="close-icon" onClick={() => handleCloseIconClick(item)}>
              &times;
            </span>
          </div>
        ))}
        <div className="dropdown-icon">&#9660;</div>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <input
            type="text"
            placeholder="Type to filter..."
            value={filterText}
            onChange={handleFilterChange}
          />
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`dropdown-item ${selectedItems.some((selectedItem) => selectedItem.id === item.id) ? 'selected' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <img src={item.image} alt={item.name} className="item-image" />
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;

*/
