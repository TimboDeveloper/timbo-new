import config from '../../timbo.config.json'

const dependenciesConfig = config.frontend.dependencies

import { Dependencie } from '../../types'

export const defaultDependencies: Dependencie = [
    {
        title: 'Electron',
        value: 'electron',
        selected: dependenciesConfig.electron.autoselect,
    },
]
