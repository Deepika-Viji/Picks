import React, { useContext } from 'react'
import { DigiContext } from '../../context/DigiContext'
import { DefinedRange } from 'react-date-range'

const DefinedRangeCalender = () => {
    const {
        inputValue,
        handleInputChange,
        handleDateRangeSelection,
        showDatePicker,
        selectedDateRange,
        handleDateRangeChange,
        dateRangeSelectionRef
    } = useContext(DigiContext)
  return (
    <div className="col" role='button' onClick={handleDateRangeSelection} ref={dateRangeSelectionRef}>
        <input 
            type="text"
            className="form-control form-control-sm table-date-range-filter"
            value={inputValue}
            placeholder='11/15/2022 - 11/23/2022'
            onChange={handleInputChange}
            style={{ pointerEvents: 'none' }}
        />
            {showDatePicker && (
                <div className="date-picker-container defined-date-range">
                    <DefinedRange
                        ranges={selectedDateRange}
                        onChange={handleDateRangeChange}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        className="date-range-picker"
                    />
                </div>
            )}
    </div>
  )
}

export default DefinedRangeCalender