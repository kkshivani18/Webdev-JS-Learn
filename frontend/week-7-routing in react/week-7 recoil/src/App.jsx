import { useState } from 'react'
import './App.css'
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { jobsAtom, mesgAtom, networkAtom, notifAtom, todosFamily, totalNotifSelector } from './atoms'

// Atoms and Selectors
/*
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotifCount = useRecoilValue(networkAtom);
  const jobsNotifCount = useRecoilValue(jobsAtom);
  const notificationsNotifCount = useRecoilValue(notifAtom);
  const [messageNotifCount] = useRecoilValue(mesgAtom);
  // to update a variable, you need to use useRecoilState and not useRecoilValue

  return (
    <>
    <button> Home </button>
    <button> My network ({networkNotifCount >= 100 ? "99+" : networkNotifCount})</button>
    <button> Jobs ({jobsNotifCount >= 100 ? "99+" : jobsNotifCount})</button>
    <button> Messaging ({messageNotifCount >= 100 ? "99+" : messageNotifCount})</button>
    <button> Notifications ({notificationsNotifCount >= 100 ? "99+" : notificationsNotifCount})</button>
    <ButtonUpdater />
    </>
  )
}

function ButtonUpdater() {
  const setMessagingNotifCount = useSetRecoilState(mesgAtom);
  // to update something but doesn't need the value of it, use useSetRecoilState

  const totalNotifCount = useRecoilValue(totalNotifSelector);
  // when some var depends on entirely on some atoms, create selector
  
  return <button onClick={() => {
    setMessagingNotifCount(c => c + 1)
  }}> Me </button>
}
*/

//--------------------------------------------------------------------------------------------------------------------------

// Recoil
function App() {
 return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
 </RecoilRoot>
}

function Todo({id}) {
  const currentTodo = useRecoilValue(todosFamily(id));
    return (
      <> 
        {currentTodo.title}
        {currentTodo.description}
        <br />
      </>
    )
}

export default App
