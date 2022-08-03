import { GluegunToolbox } from 'gluegun'

module.exports = {
    name: 'new',
    description: 'Create new project',
    run: async (toolbox: GluegunToolbox) => {
        const {
            print: { printHelp },
        } = toolbox
        printHelp(toolbox)
    },
}
