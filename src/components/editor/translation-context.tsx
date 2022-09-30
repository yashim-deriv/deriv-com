import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type EditorContextData = {
    is_active: boolean
}

const EditorContext = createContext<EditorContextData>(null)

type EditorContextWrapperProps = {
    children: ReactNode
}

const EditorContextWrapper = ({ children }: EditorContextWrapperProps) => {
    const [is_active, setActive] = useState(false)

    useEffect(() => {
        const handleShortcutKey = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'e') {
                setActive((prev) => !prev)
            }
        }

        document.addEventListener('keydown', handleShortcutKey)

        return () => {
            document.removeEventListener('keydown', handleShortcutKey)
        }
    }, [])

    return <EditorContext.Provider value={{ is_active }}>{children}</EditorContext.Provider>
}

export const useEditor = () => {
    return useContext(EditorContext)
}

export default EditorContextWrapper
