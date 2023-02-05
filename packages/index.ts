import type { App } from "vue";
import JButtonBase from "./components/buttons";
// import jlayout from "./components/layout/layout.module.css";
// import plugin from "tailwindcss/plugin";
const components = {
  JButtonBase,
};
// const INSTALLED = Symbol("INSTALLED");
let installed = false;

function install(vue: App) {
  if (installed) return;
  installed = true;
  Object.values(components).forEach((comp) => {
    vue.use(comp);
  });
}

/**
 *
 * PluginAPI {
  // for registering new static utility styles
  addUtilities(
    utilities: CSSRuleObject | CSSRuleObject[],
    options?: Partial<{
      respectPrefix: boolean
      respectImportant: boolean
    }>
  ): void
  // for registering new dynamic utility styles
  matchUtilities<T = string, U = string>(
    utilities: KeyValuePair<
      string,
      (value: T | string, extra: { modifier: U | string | null }) => CSSRuleObject | null
    >,
    options?: Partial<{
      respectPrefix: boolean
      respectImportant: boolean
      type: ValueType | ValueType[]
      values: KeyValuePair<string, T>
      modifiers: 'any' | KeyValuePair<string, U>
      supportsNegativeValues: boolean
    }>
  ): void
  // for registering new static component styles
  addComponents(
    components: CSSRuleObject | CSSRuleObject[],
    options?: Partial<{
      respectPrefix: boolean
      respectImportant: boolean
    }>
  ): void
  // for registering new dynamic component styles
  matchComponents<T = string, U = string>(
    components: KeyValuePair<
      string,
      (value: T | string, extra: { modifier: U | string | null }) => CSSRuleObject | null
    >,
    options?: Partial<{
      respectPrefix: boolean
      respectImportant: boolean
      type: ValueType | ValueType[]
      values: KeyValuePair<string, T>
      modifiers: 'any' | KeyValuePair<string, U>
      supportsNegativeValues: boolean
    }>
  ): void
  // for registering new base styles
  addBase(base: CSSRuleObject | CSSRuleObject[]): void
  // for registering custom variants
  addVariant(name: string, definition: string | string[] | (() => string) | (() => string)[]): void
  matchVariant<T = string>(
    name: string,
    cb: (value: T | string, extra: { modifier: string | null }) => string | string[],
    options?: {
      values?: KeyValuePair<string, T>
      sort?(
        a: { value: T | string; modifier: string | null },
        b: { value: T | string; modifier: string | null }
      ): number
    }
  ): void
  // for looking up values in the user’s theme configuration
  theme: <TDefaultValue = Config['theme']>(
    path?: string,
    defaultValue?: TDefaultValue
  ) => TDefaultValue
  // for looking up values in the user’s Tailwind configuration
  config: <TDefaultValue = Config>(path?: string, defaultValue?: TDefaultValue) => TDefaultValue
  // for checking if a core plugin is enabled
  corePlugins(path: string): boolean
  // for manually escaping strings meant to be used in class names
  e: (className: string) => string
}
 */
// export const stylePlugin = plugin(function (ctx) {
//   ctx.addUtilities(jlayout);
// });
export {
  install,
  // ButtonBase,
  // ...components,
  // stylePlugin,
};
export * from './components/buttons'
// export * from './components/layout'