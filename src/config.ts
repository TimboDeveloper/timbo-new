import { snapshot } from './snapshots/create-project-snapshot'
import config from './timbo.config.json'

export const packageManager = config.packageManager
export const defaultType = config.type

config.frontend.defaultFrameWork

export const defaultDynamicFramework = (): string => {
    return config[snapshot.type].defaultFrameWork
}
