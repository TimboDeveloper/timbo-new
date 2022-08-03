import { snapshot } from '../snapshots/create-project-snapshot'
import { packageManager } from './../config'
import { Step } from './../types'

export const projectPackageManager = (): Step => {
    snapshot.packageManager = packageManager

    return {
        type: packageManager ? null : 'select',
        name: 'packageManager',
        message: 'Gerenciador de pacotes do projeto',
        choices: [
            {
                title: 'npm',
                value: 'npm',
            },
        ],

        onState: ({ value }) => {
            snapshot.packageManager = value
        },
    }
}
