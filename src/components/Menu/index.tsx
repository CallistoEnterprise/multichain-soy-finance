import React from 'react'
import { Menu as UikitMenu } from '@soy-libs/uikit2'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useProfile } from 'state/profile/hooks'
import { addSoyToMetamask } from 'utils/wallet'
import config, { bttConfig } from './config'
import UserMenu from './UserMenu'

// const configs = {
//   820: config,
//   199: bttConfig,
// }

const Menu = (props) => {
  const { chainId } = useActiveWeb3React()
  const { isDark, toggleTheme } = useTheme()
  const soyPriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()
  // const priceData = useGetPriceData()
  // const cloPriceUsd = priceData? Number(priceData.callisto.usd) : undefined

  return (
    <UikitMenu
      userMenu={<UserMenu />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage?.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={soyPriceUsd.toNumber()}
      links={chainId === 199 ? bttConfig(t) : config(t)}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: !profile?.username,
      }}
      addSoyToMetamask={addSoyToMetamask}
      {...props}
    />
  )
}

export default Menu
