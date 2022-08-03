import { Step } from './../types'
import { snapshot } from '../snapshots/create-project-snapshot'

export const projectName = (projectNameByArg0: string): Step => {
    snapshot.name = projectNameByArg0

    return {
        type: projectNameByArg0 === undefined ? 'text' : null,
        name: 'name',
        initial: 'my-timbo-app',
        message: 'Nome do projeto',

        onState: ({ value }) => {
            snapshot.name = value
        },
    }
}
