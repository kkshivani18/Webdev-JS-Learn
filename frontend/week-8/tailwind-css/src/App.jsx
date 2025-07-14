import React, { useState } from 'react'
import { RevenueCard } from './components/RevenueCard'
import './App.css'


// function App() {

//   return (
//       <>
//         {/* <div style={{ display: "flex", justifyContent: "space-around"}}>
//           <div style={{backgroundColor: "red"}}> Hi </div>
//           <div style={{backgroundColor: "blue"}}> Moshi moshi </div>
//           <div style={{backgroundColor: "green"}}> Hola </div>
//         </div> */}

//         {/* flex */}
//         {/* <div className="flex flex-row justify-center">
//           <div style={{background: "red"}}>hi</div>
//           <div style={{backgroundColor: "blue"}}>hello</div>
//         </div> */}

//         {/* grid */}
//         {/* <div className="grid grid-cols-3">
//           <div className="bg-red-500 ">hi</div>
//           <div className="bg-blue-500 ">hi</div>
//           <div className="bg-blue-500 ">hi</div>
//         </div> */}

//         {/* grid division between the children */}
//         {/* <div className="grid-cols-10 justify-center">
//           <div className="bg-red-500 cols-span-4">hi</div>
//           <div className="bg-blue-500 cols-span-4">hi</div>
//           <div className="bg-blue-500 cols-span-2">hi</div>
//         </div> */}

//         {/* web responsiveness */}
//         {/* <div className='bg-red-500 md:bg-blue-500'>
//           Hello
//         </div> */}

//           {/* sm, md, lg */}
//         {/* <div className='grid grid-cols-1 md:grid-cols-3'>
//           <div className='bg-red-500'>Hi 1</div>
//           <div className='bg-blue-500'>Hi 2</div>
//           <div className='bg-yellow-500'>Hi 2</div>
//         </div> */}
//       </>
//   )
// }

//--------------------------------------------------------------------------------------------------------------------

// dukaan assignment 

function App() {
  return (
        <div className="min-h-screen bg-gray-100">
            <RevenueCard
                title="Amount Pending"
                orderCount={13}
                amount={92312.2}
            />
        </div>
  );
}

export default App

/*
return (
      <div className='grid grid-cols-4'>
        <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
      </div>
    );
*/