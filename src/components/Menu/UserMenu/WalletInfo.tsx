import React from 'react'
import { Box, Button, Flex, InjectedModalProps, LinkExternal, Message, Text } from '@callisto-enterprise/soy-uikit2'
import useTokenBalance, { useGetBnbBalance } from 'hooks/useTokenBalance'
import { getSoyAddress } from 'utils/addressHelpers'
import useAuth from 'hooks/useAuth'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import { getCallistoExpLink } from 'utils'
import { getFullDisplayBalance } from 'utils/formatBalance'
import CopyAddress from './CopyAddress'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

interface WalletInfoProps {
  hasLowBnbBalance: boolean
  onDismiss: InjectedModalProps['onDismiss']
}

const WalletInfo: React.FC<WalletInfoProps> = ({ hasLowBnbBalance, onDismiss }) => {
  const { t } = useTranslation()
  const { account, chainId } = useActiveWeb3React()
  const { balance } = useGetBnbBalance()
  const { balance: cakeBalance } = useTokenBalance(getSoyAddress())
  const { logout } = useAuth()

  const handleLogout = () => {
    onDismiss()
    logout()
  }

  return (
    <>
      <Text color="secondary" fontSize="12px" textTransform="uppercase" fontWeight="bold" mb="8px">
        {t('Your Address')}
      </Text>
      <CopyAddress account={account} mb="24px" />
      {hasLowBnbBalance && (
        <Message variant="warning" mb="24px">
          <Box>
            <Text fontWeight="bold">
              {t(`${CHAINS_CONSTANTS[chainId].general.nativeSymbol.toUpperCase()} Balance Low`)}
            </Text>
            <Text as="p">
              {t(`You need ${CHAINS_CONSTANTS[chainId].general.nativeSymbol.toUpperCase()} for transaction fees.`)}
            </Text>
          </Box>
        </Message>
      )}
      <Flex alignItems="center" justifyContent="space-between">
        <Text color="textSubtle">{t(`${CHAINS_CONSTANTS[chainId].general.nativeSymbol.toUpperCase()} Balance`)}</Text>
        <Text>{getFullDisplayBalance(balance, 18, 6)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="24px">
        <Text color="textSubtle">{t('SOY Balance')}</Text>
        <Text>{getFullDisplayBalance(cakeBalance, 18, 3)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="end" mb="24px">
        <LinkExternal href={getCallistoExpLink(account, 'address', chainId)}>
          {t(`View on ${CHAINS_CONSTANTS[chainId].explorer.name}`)}
        </LinkExternal>
      </Flex>
      <Button variant="secondary" width="100%" onClick={handleLogout}>
        {t('Disconnect Wallet')}
      </Button>
    </>
  )
}

export default WalletInfo
