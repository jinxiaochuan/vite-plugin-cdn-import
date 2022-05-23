
export interface Module {
    name: string
    var: string
    path: string | string[]
    devPath?: string | string[]
    css?: string | string[]
}

export interface Options {
    modules: (Module | ((prodUrl: string) => Module))[]
    prod?: boolean
    prodUrl?: string
    devUrl?: string
    forceCdn?: boolean
}
