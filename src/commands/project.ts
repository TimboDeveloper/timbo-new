import { Step } from './../types'
import { GluegunToolbox } from 'gluegun'

import * as prompts from 'timbo-prompts'
import * as color from 'kleur'

import { snapshot } from '../snapshots/create-project-snapshot'

import { projectName } from '../steps/project-name-step'
import { projectPackageManager } from '../steps/project-package-step'
import { projectType } from '../steps/project-type-step'
import { projectFramework } from '../steps/project-framework-step'
import { projectDependencies } from '../steps/project-dependencies-step'

module.exports = {
    name: 'project',
    alias: ['p'],
    description: 'Create new project',
    run: async (toolbox: GluegunToolbox) => {
        const {
            parameters: { first },
            print: { info, error },
            // filesystem,
        } = toolbox
        let arg0 = first

        console.clear()

        const onCancel = () => {
            throw new Error('Operação cancelada')
        }

        const step = async (step: () => Step | Promise<Step>) => {
            await prompts([await step()], { onCancel })
        }

        try {
            await step(projectName.bind(arg0))
            await step(projectPackageManager)
            await step(projectType)
            await step(projectFramework)
            await step(projectDependencies)
        } catch (err) {
            error(`${err}`)
            throw new Error(err)
        }

        if (arg0 === undefined) arg0 = snapshot.name
        // if (!result.packageManager) result.packageManager = packageManager

        console.log('Snapshot:', snapshot)

        console.log('Result:', snapshot)

        info(color.yellow(`Criando projeto "${arg0}"...`))
    },
}
