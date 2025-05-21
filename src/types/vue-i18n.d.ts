declare module 'vue-i18n/dist/vue-i18n.esm-bundler.js' {
    import type { Composer, ComposerOptions, I18n, I18nOptions } from 'vue-i18n'

    export * from 'vue-i18n'
    export { useI18n, createI18n }

    export function useI18n<Options extends ComposerOptions = ComposerOptions>(
        options?: Options
    ): Composer

    export function createI18n<Messages = unknown, DateTimeFormats = unknown, NumberFormats = unknown>(
        options: I18nOptions<Messages, DateTimeFormats, NumberFormats>
    ): I18n<Messages, DateTimeFormats, NumberFormats>
} 