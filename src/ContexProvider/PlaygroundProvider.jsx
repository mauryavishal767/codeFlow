import { createContext, useEffect, useState } from "react"
import { v4 as uuid } from "uuid"

export const PlayroundContext = createContext()

const initialData = [
    {
        id: uuid(),
        title: 'DSA',
        files: [
            {
                id: uuid(),
                title: 'greedy',
                code: `cout<<"hello world";`,
                language: 'cpp'
            },
            {
                id: uuid(),
                title: 'DP',
                code: `cout<<"hello world";`,
                language: 'cpp'
            },
            {
                id: uuid(),
                title: 'hashing',
                code: `cout<<"hello world";`,
                language: 'cpp'
            },
            {
                id: uuid(),
                title: 'two pointer',
                code: `cout<<"hello world";`,
                language: 'cpp'
            },
        ]
    },
    {
        id: uuid(),
        title: 'WebDev',
        files: [
            {
                id: uuid(),
                title: 'javascript',
                code: `console.log('hello world');`,
                language: 'js'
            },
        ]
    },
]

function PlaygroundProvider({children}) {
    const [folders, setfolders] = useState(initialData)
    useEffect(()=>{
        localStorage.setItem('codeflow-data', JSON.stringify(folders))
    },[])
  return (
    <PlayroundContext.Provider value = {folders}>
        {children}
    </PlayroundContext.Provider>
  )
}

export default PlaygroundProvider