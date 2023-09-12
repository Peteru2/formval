import React, { useState } from 'react';

const CheckField = ({onDivClick}) => {
  const [divData, setDivData] = useState([
    {
      isChecked: false,
      label: 'Online Service',
      description: 'Access to multi-player game',
      price: 1,
      originalPrice: 1
    },
    {
      isChecked: false,
      label: 'Large Storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
      originalPrice: 2
    },
    {
      isChecked: false,
      label: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: 2,
      originalPrice: 2
    },
  ]);

  const handleDivClick = (index) => {
    const updatedDivData = [...divData];
    updatedDivData[index].isChecked = !updatedDivData[index].isChecked;
    

    updatedDivData[index].price = updatedDivData[index].isChecked
    ? updatedDivData[index].originalPrice
    : 0;
      setDivData(updatedDivData);
      onDivClick(index.price);
      console.log(updatedDivData[index].price );


      const newTotalPrice = updatedDivData.reduce((acc, item) => {
      if (item.isChecked) {
        acc += item.price;
      }
      return acc;
    }, 0);

    console.log(newTotalPrice)
  };

  return (
    <div>
      {divData.map((item, index) => (
        <div
          key={index}
          className={item.isChecked ? 'flex border-2 border-blue-900 p-4 rounded-md mt-8 cursor-pointer bg-blue-50' : 'flex hover:bg-blue-50 border-2 p-4 rounded-md mt-8 cursor-pointer'}
          onClick={() => handleDivClick(index, item.originalPrice)}
        >
          <input type="checkbox" checked={item.isChecked} className="check outline-none" name="checkbox" onChange={() => {}} />
          <div className="ml-3">
            <p className="text-blue-900 text-sm">{item.label}</p>
            <p className="text-gray-300 text-xs">{item.description}</p>
          </div>
          <p className="md:ml-32 ml-auto text-sm text-blue-700 mt-1">+${item.originalPrice}/mo</p>
        </div>
      ))}
    </div>
  );
};

export default CheckField;