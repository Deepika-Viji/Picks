// import React, { useContext } from 'react'
// import { DigiContext } from '../../context/DigiContext'

// const Calculator = () => {
//     const {
//         handleCalculator,
//         calculatorShow,
//         inputCalculator,
//         handleCalculatorButtonClick,
//         calculatorRef
//     } = useContext(DigiContext)
//   return (
//     <div className="header-btn-box">
//         <div className="dropdown" ref={calculatorRef}>
//             <button className={`header-btn ${calculatorShow? 'show':''}`} onClick={handleCalculator}>
//                 <i className="fa-light fa-calculator"></i>
//             </button>
//             <ul className={`dropdown-menu calculator-dropdown ${calculatorShow? 'show':''}`}>
//                 <div className="dgb-calc-box">
//                     <div>
//                     <input
//                     type="text"
//                     id="dgbCalcResult"
//                     placeholder="0"
//                     autoComplete="off"
//                     readOnly
//                     value={inputCalculator}
//                     />
//                     </div>
//                     <table>
//                         <tbody>
//                             <tr>
//                                 <td onClick={handleCalculatorButtonClick} className="bg-danger">C</td>
//                                 <td onClick={handleCalculatorButtonClick} className="bg-secondary">CE</td>
//                                 <td onClick={handleCalculatorButtonClick} className="dgb-calc-oprator bg-primary">/</td>
//                                 <td onClick={handleCalculatorButtonClick} className="dgb-calc-oprator bg-primary">*</td>
//                             </tr>
//                             <tr>
//                                 <td onClick={handleCalculatorButtonClick}>7</td>
//                                 <td onClick={handleCalculatorButtonClick}>8</td>
//                                 <td onClick={handleCalculatorButtonClick}>9</td>
//                                 <td onClick={handleCalculatorButtonClick} className="dgb-calc-oprator bg-primary">-</td>
//                             </tr>
//                             <tr>
//                                 <td onClick={handleCalculatorButtonClick}>4</td>
//                                 <td onClick={handleCalculatorButtonClick}>5</td>
//                                 <td onClick={handleCalculatorButtonClick}>6</td>
//                                 <td onClick={handleCalculatorButtonClick} className="dgb-calc-oprator bg-primary">+</td>
//                             </tr>
//                             <tr>
//                                 <td onClick={handleCalculatorButtonClick}>1</td>
//                                 <td onClick={handleCalculatorButtonClick}>2</td>
//                                 <td onClick={handleCalculatorButtonClick}>3</td>
//                                 <td onClick={handleCalculatorButtonClick} rowSpan="2" className="dgb-calc-sum bg-primary">=</td>
//                             </tr>
//                             <tr>
//                                 <td onClick={handleCalculatorButtonClick} colSpan="2">0</td>
//                                 <td onClick={handleCalculatorButtonClick}>.</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Calculator