import { Step } from './../types'
import { defaultDynamicFramework } from './../config'
import { snapshot } from './../snapshots/create-project-snapshot'

import frontend from '../frameworks/frontend'
import backend from '../frameworks/backend'
import front_back from '../frameworks/front-back'

export const projectFramework = (): Step => {
    snapshot.framework = defaultDynamicFramework()

    const onState = {
        onState: ({ value }) => {
            snapshot.framework = value
        },
    }

    const acceptedTypes = {
        frontend: (): Step => {
            return {
                type: defaultDynamicFramework() ? null : 'autocomplete',
                name: 'framework',
                message: 'Qual framework frontend?',
                choices: frontend,
                ...onState,
            }
        },
        backend: (): Step => {
            return {
                type: defaultDynamicFramework() ? null : 'autocomplete',
                name: 'framework',
                message: 'Qual framework backend?',
                choices: backend,
                ...onState,
            }
        },
        front_back: (): Step => {
            return {
                type: defaultDynamicFramework() ? null : 'autocomplete',
                name: 'framework',
                message: 'Qual framework?',
                choices: front_back,
                ...onState,
            }
        },
    }

    let run = acceptedTypes[snapshot.type]
    if (run) return run()
}
