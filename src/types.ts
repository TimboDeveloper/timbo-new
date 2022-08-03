export type Dependencie = {
    title: string
    value: string
    selected: boolean
}[]

export type Framework = {
    title: string
    value: string
}[]

export type NewProject = {
    name?: string
    packageManager?: string
    type?: string
    framework?: string
    dependencies?: Dependencie
}

export type StepType =
    | 'text'
    | 'password'
    | 'invisible'
    | 'number'
    | 'confirm'
    | 'list'
    | 'toggle'
    | 'select'
    | 'multiselect'
    | 'autocompleteMultiselect'
    | 'autocomplete'
    | 'date'

export type Choice = {
    title: string
    value: string
    description?: string
    selected?: boolean
    disabled?: boolean
}[]

export type Step = {
    type: StepType
    name: string
    message: string
    choices?: Choice

    initial?: unknown
    max?: number
    min?: number
    hint?: string
    validate?: () => boolean
    onState: (value) => void
}
