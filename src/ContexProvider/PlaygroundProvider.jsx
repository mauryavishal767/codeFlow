import { createContext, useEffect, useState } from "react"
import { json } from "react-router-dom"
import { v4 as uuid } from "uuid"

export const PlaygroundContext = createContext()

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

const defaultCode = {
cpp: 
`#include <iostream>

int main()
{
    std::cout<<"Hello World";

    return 0;
}`,

java: 
`public class Main
{
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}`,

javascript:
`console.log('Hello World');`,

python:
`print ('Hello World')`

}

function PlaygroundProvider({children}) {
    const [folders, setfolders] = useState(initialData)

    const createNewPlayground = (newPlayground)=>{
        const {folderName, fileName, language} = newPlayground
        const newFolder = [...folders]
        newFolder.push({
            id: uuid(),
            title: folderName,
            files: [
                {
                    id: uuid(),
                    title: fileName,
                    language: language,
                    code: defaultCode[language]
                }
            ]
        })
        localStorage.setItem('codeflow-data', JSON.stringify(newFolder))
        setfolders(newFolder);
        
    }

    const createNewFolder = (newFolder)=>{
        const {folderName} = newFolder
        const newFolders = [...folders]
        newFolders.push({
            id: uuid(),
            title: folderName,
            files: []
        })
        localStorage.setItem('codeflow-data', JSON.stringify(newFolders))
        setfolders(newFolders);
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('codeflow-data'));
        if(data){
            setfolders(data)
        } else localStorage.setItem('codeflow-data', JSON.stringify(initialData))
    },[])

    const PlaygroundFeatures = {
        folders,
        createNewPlayground,
        createNewFolder
    }
  return (
    <PlaygroundContext.Provider value = {PlaygroundFeatures}>
        {children}
    </PlaygroundContext.Provider>
  )
}

export default PlaygroundProvider