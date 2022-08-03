import { snapshot } from '../snapshots/create-project-snapshot'
import { Dependencie, Step } from '../types'

export const projectDependencies = async (): Promise<Step> => {
    snapshot.dependencies = []

    const onStage = {
        onState: ({ value }) => {
            const dependencies = value
            dependencies.map((dependencie) => {
                if (dependencie.selected)
                    snapshot.dependencies.push(dependencie.value)
            })
        },
    }

    const importDefaultDependencies: Dependencie = (
        await import('../dependencies/default')
    ).defaultDependencies
    const importDefaultDependenciesByType: Dependencie = (
        await import(`../dependencies/${snapshot.type}/default`)
    ).defaultDependencies
    const importDependenciesByTypeAndFramework: Dependencie = (
        await import(`../dependencies/${snapshot.type}/${snapshot.framework}`)
    ).dependencies

    return {
        type: 'autocompleteMultiselect',
        name: 'dependencies',
        message: 'Packages para seu projeto',
        choices: [
            ...importDefaultDependencies,
            ...importDefaultDependenciesByType,
            ...importDependenciesByTypeAndFramework,
        ],
        ...onStage,
    }
    // {
    //     type:
    //         result.type === 'frontend'
    //             ? 'autocompleteMultiselect'
    //             : null,
    //     name: 'dependencies',
    //     message: 'Packages para seu projeto',
    //     choices: (framework) => {
    //         const customDependencies = {
    //             vanilla: () => {
    //                 return [...vanilla]
    //             },
    //             react: () => {
    //                 return [...react]
    //             },
    //         }
    //         return [
    //             ...customDependencies[framework](),
    //             ...defaultFrontend,
    //             ...defaultDependencies,
    //         ]
    //     },
    // },
}
