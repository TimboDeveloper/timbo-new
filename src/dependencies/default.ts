import config from '../timbo.config.json'

const dependenciesConfig = config.defaultDependencies.dependencies

import { Dependencie } from '../types'

export const defaultDependencies: Dependencie = [
    {
        title: 'Eslint',
        value: 'eslint',
        selected: dependenciesConfig.eslint.autoselect,
    },
    // {
    //     title: 'Prettier',
    //     value: 'prettier',
    //     selected: true,
    // },
    // {
    //     title: 'Jest',
    //     value: 'jest',
    //     selected: false,
    // },
    // {
    //     title: 'Husky',
    //     value: 'husky',
    //     selected: true,
    // },
]
