import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'

const EditorInput = styled.input``

type TranslationEditorProps = {
    translate_text: string
}

const TranslationEditor = ({ translate_text }: TranslationEditorProps) => {
    const [text, setText] = useState(translate_text)

    return (
        <Flex width="full">
            <EditorInput value={text} onChange={(e) => setText(e.target.value)} />
        </Flex>
    )
}

export default TranslationEditor
