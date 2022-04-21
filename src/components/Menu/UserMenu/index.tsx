import React, { useState, useEffect } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import {
  Flex,
  LogoutIcon,
  useModal,
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
} from '@soy-libs/uikit2'
import { Networks } from 'config/constants/networks';

import useAuth from 'hooks/useAuth'
import { useProfile } from 'state/profile/hooks'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { switchNetwork } from 'utils/wallet';
import NetworkMenu from '../NetworkMenu'
import WalletModal, { WalletView, LOW_BNB_BALANCE } from './WalletModal'
// import ProfileUserMenuItem from './ProfileUserMenutItem'
import WalletUserMenuItem from './WalletUserMenuItem'
import { NetworkIcon } from '../NetworkMenu/MenuIcon';

const UserMenu = () => {
  const { t } = useTranslation()
  const { account, chainId, library } = useActiveWeb3React()
  const { logout } = useAuth()
  const [networkAvatar, setNetworkAvatar] = useState(undefined)
  const [networkText, setNetworkText] = useState('')
  const { balance, fetchStatus } = useGetBnbBalance()
  const { profile } = useProfile()
  const [onPresentWalletModal] = useModal(<WalletModal initialView={WalletView.WALLET_INFO} />)
  const [onPresentTransactionModal] = useModal(<WalletModal initialView={WalletView.TRANSACTIONS} />)
  // const hasProfile = isInitialized && !!profile
  const avatarSrc = profile && profile.nft ? `/images/nfts/${profile.nft.images.sm}` : undefined
  const hasLowBnbBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_BNB_BALANCE)

  useEffect(() => {
    const init = () => {
      const filtered = Networks.filter((_) => Number(_.chainId) === chainId)
      if (filtered.length) {
        setNetworkAvatar(filtered[0].img)
        setNetworkText(filtered[0].name)
      }
    }
    if (chainId) {
      init()
    }
  }, [chainId])

  const handleSwitchNetwork = (curNet) => {
    switchNetwork(library, curNet);
    // setNetworkAvatar(curNet.img)
    // setNetworkText(curNet.name)
  }

  if (!account) {
    return <ConnectWalletButton scale="sm" />
  }

  return (
    <Flex>
      <NetworkMenu text={networkText} avatarSrc={networkAvatar}>
        {/* <UserMenuItem as="button" onClick={onPresentTransactionModal}>
          {t('Callisto')}
        </UserMenuItem> */}
        {
          Networks.map((item) => {
            return (
              <UserMenuItem as="button" onClick={() => handleSwitchNetwork(item)} key = {item.name}>
                <Flex alignItems="center" justifyContent="flex-start" width="100%">
                  <NetworkIcon avatarSrc={item.img} />
                  {t(`${item.name}`)}
                </Flex>
              </UserMenuItem>
            )
          })
        }        
      </NetworkMenu>

      <UIKitUserMenu account={account} avatarSrc={avatarSrc}>
        <WalletUserMenuItem hasLowBnbBalance={hasLowBnbBalance} onPresentWalletModal={onPresentWalletModal} />
        <UserMenuItem as="button" onClick={onPresentTransactionModal}>
          {t('Transactions')}
        </UserMenuItem>
        <UserMenuDivider />
        <UserMenuItem as="button" onClick={logout}>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            {t('Disconnect')}
            <LogoutIcon />
          </Flex>
        </UserMenuItem>
      </UIKitUserMenu>
    </Flex>
  )
}

export default UserMenu
