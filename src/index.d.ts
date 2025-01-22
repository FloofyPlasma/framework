export = Framework;
export as namespace Framework;

declare namespace Framework {
    export type Provider<T> = T & {
        Name?: string
        Uses?: any[]
        Order?: number
        Init?: () => void
        Start?: () => void
    }

    export type Lifecycle<T extends any[]> = {
        Name: string
        Fire: (self: Lifecycle<T>, ...args: T) => void;
        Listeners: Array<(...args: T) => void>;
    }

    export function Start(): void;
    export function Add(dirs: Array<Instance>, filter?: (module: ModuleScript) => boolean): void;
    export function New<T>(members: Provider<T>): T;
}
