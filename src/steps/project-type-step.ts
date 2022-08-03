import { defaultType } from '../config'
import { snapshot } from './../snapshots/create-project-snapshot'
import { Step } from './../types'

export const projectType = (): Step => {
    snapshot.type = defaultType
    return {
        type: defaultType ? null : 'select',
        name: 'type',
        message: 'Tipo do projeto',
        choices: [
            {
                title: 'Frontend',
                value: 'frontend',
            },
            // {
            //     title: 'Backend',
            //     value: 'backend',
            // },
            // {
            //     title: 'Frontend + Backend',
            //     value: 'front_back',
            // },
        ],
        onState: ({ value }) => {
            snapshot.type = value
        },
    }
}
