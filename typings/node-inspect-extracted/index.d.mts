declare module 'node-inspect-extracted' {
  import type { ObjectPlain } from '@flex-development/tutils'

  export interface InspectOptions {
    breakLength?: number | undefined
    colors?: boolean | undefined
    compact?: boolean | number | undefined
    customInspect?: boolean | undefined
    depth?: number | null | undefined
    getters?: boolean | 'get' | 'set' | undefined
    maxArrayLength?: number | null | undefined
    maxStringLength?: number | null | undefined
    numericSeparator?: boolean | undefined
    showHidden?: boolean | undefined
    showProxy?: boolean | undefined
    sorted?: boolean | ((a: string, b: string) => number) | undefined
  }

  export interface InspectOptionsStylized extends InspectOptions {
    stylize(text: string, styleType: Style): string
  }

  export type Style =
    | 'bigint'
    | 'boolean'
    | 'date'
    | 'module'
    | 'null'
    | 'number'
    | 'regexp'
    | 'special'
    | 'string'
    | 'symbol'
    | 'undefined'

  export type CustomInspectFunction = (
    depth: number,
    options: InspectOptionsStylized
  ) => string

  export function format(format?: any, ...param: any[]): string

  export function formatWithOptions(
    inspectOptions: InspectOptions,
    format?: any,
    ...param: any[]
  ): string

  export function inspect(
    object: any,
    showHidden?: boolean,
    depth?: number | null,
    color?: boolean
  ): string

  export function inspect(object: any, options?: InspectOptions): string

  export namespace inspect {
    let colors: Record<number, number>
    let styles: { [K in Style]: string }
    let defaultOptions: InspectOptions
    let replDefaults: InspectOptions
    const custom: unique symbol
  }

  export function stripVTControlCharacters(str: string): string

  export function stylizeWithColor(text: string, styleType: Style): string

  export function stylizeWithHTML(text: string, styleType: Style): string

  export const Proxy: new <T extends ObjectPlain>(
    target: T,
    handler: ProxyHandler<T>
  ) => T
}
