export interface NamedLink {
  path: string
  name: string
}

export interface NavbarConfig {
  name: string
  links: {
    [key: LangCode]: Array<NamedLink>
  }
}

export interface FooterConfig {
  [key: LangCode]: Array<NamedLink>
}

export type LangCode = 'en' | 'fr'

export interface LangSettings {
  urlPrefix: string
  humanName: string
  default?: boolean
}

export type SupportedLangs = Record<LangCode, LangSettings>
