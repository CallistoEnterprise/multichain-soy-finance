import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'soyfinance',
  description: '',
  image: 'images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('soyfinance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('soyfinance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('soyfinance')}`,
      }
    case '/info':
      return {
        title: `${t('Info')} | ${t('soyfinance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('soyfinance')}`,
      }
    default:
      return null
  }
}
