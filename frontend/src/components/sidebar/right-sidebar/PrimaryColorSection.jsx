import React, { useContext, useState } from 'react'
import { DigiContext } from '../../../context/DigiContext';

const PrimaryColorSection = () => {
    const { handleRightSideDropdownToggle, rightSideDropdown,primaryColor,handleColorSelectionToggle } = useContext(DigiContext);
    const [showBackgroundBox, setShowBackgroundBox] = useState(rightSideDropdown.primaryColor);

    const handleToggle = () => {
        handleRightSideDropdownToggle('primaryColor');
        setShowBackgroundBox((prevState) => !prevState);
      };
  return (
    <div className="right-sidebar-group">
        <span className="sidebar-subtitle">Primary Color 
            <span>
                <i 
                className={`fa-light ${rightSideDropdown.primaryColor ? 'fa-angle-up' : 'fa-angle-down'}`} 
                role="button" 
                onClick={handleToggle}
                ></i>           
            </span>
        </span>
        <div className={`settings-row-2 ${showBackgroundBox ? 'show' : 'hide'}`}>
            <button className={`color-palette color-palette-1 ${primaryColor.blue? 'active':''}`} onClick={() => handleColorSelectionToggle('blue')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className={`color-palette color-palette-2 ${primaryColor.orange? 'active':''}`} onClick={()=> handleColorSelectionToggle('orange')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className={`color-palette color-palette-3 ${primaryColor.pink? 'active':''}`} onClick={()=> handleColorSelectionToggle('pink')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className={`color-palette color-palette-4 ${primaryColor.eagle_green? 'active':''}`} onClick={()=> handleColorSelectionToggle('eagle_green')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className={`color-palette color-palette-5 ${primaryColor.purple? 'active':''}`} onClick={()=> handleColorSelectionToggle('purple')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className={`color-palette color-palette-6 ${primaryColor.gold? 'active':''}`} onClick={()=> handleColorSelectionToggle('gold')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className={`color-palette color-palette-7 ${primaryColor.green? 'active':''}`} onClick={()=> handleColorSelectionToggle('green')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className={`color-palette color-palette-8 ${primaryColor.deep_pink? 'active':''}`} onClick={()=> handleColorSelectionToggle('deep_pink')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className={`color-palette color-palette-9 ${primaryColor.tea_green? 'active':''}`} onClick={()=> handleColorSelectionToggle('tea_green')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className={`color-palette color-palette-10 ${primaryColor.yellow_green? 'active':''}`} onClick={()=> handleColorSelectionToggle('yellow_green')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
  )
}

export default PrimaryColorSection