import config from '../../timbo.config.json'

const dependenciesConfig = config.frontend.dependencies

import { Dependencie } from '../../types'

export const dependencies: Dependencie = [
    {
        title: 'Styled Components',
        value: 'styled-components',
        selected: dependenciesConfig['styled-components'].autoselect,
    },
]
