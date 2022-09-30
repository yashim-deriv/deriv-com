import React from 'react'
import { Localize as Translate, LocalizeProps } from './localize'
import { useEditor } from 'components/editor/translation-context'
import TranslationEditor from 'components/editor/translation-editor'
export * from './locale-context'
export * from './language-switcher'
export * from './localized-link'
export * from './config'
export * from './withIntl'

export const Localize = (props: LocalizeProps) => {
    const { translate_text } = props
    const { is_active } = useEditor()

    if (is_active) {
        return <TranslationEditor translate_text={translate_text} />
    }

    return <Translate {...props} />
}
