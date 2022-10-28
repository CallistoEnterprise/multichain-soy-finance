import BigNumber from 'bignumber.js'
import React from 'react'
import { CardBody, Flex, Text, CardRibbon } from '@callisto-enterprise/soy-uikit2'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import { BIG_ZERO } from 'utils/bigNumber'
import { Pool } from 'state/types'
import AprRow from './AprRow'
import { StyledCard, StyledCardInner } from './StyledCard'
import CardFooter from './CardFooter'
import StyledCardHeader from './StyledCardHeader'
import CardActions from './CardActions'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const PoolCard: React.FC<{ pool: Pool; account: string }> = ({ pool, account }) => {
  const { chainId } = useActiveWeb3React()
  const { sousId, stakingToken, earningToken, isFinished, userData, lockPeriod, lockPeriodUnit, isNew } = pool
  const { t } = useTranslation()
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const accountHasStakedBalance = stakedBalance.gt(0)

  return (
    <StyledCard
      isFinished={isFinished[chainId] && sousId !== 0}
      ribbon={isFinished[chainId] && <CardRibbon variantColor="textDisabled" text={t('Finished')} />}
    >
      <StyledCardInner isNew={isNew}>
        <StyledCardHeader
          isStaking={accountHasStakedBalance}
          earningToken={earningToken}
          stakingToken={stakingToken}
          isFinished={isFinished[chainId] && sousId !== 0}
          lockPeriod={isNew ? lockPeriod[chainId] : null}
          lockPeriodUnit={isNew ? lockPeriodUnit[chainId] : null}
          isNew={isNew}
        />
        <CardBody>
          <AprRow pool={pool} />
          <Flex mt="10px" flexDirection="column">
            {account ? (
              <CardActions pool={pool} stakedBalance={stakedBalance} />
            ) : (
              <>
                <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                  {t('Start earning')}
                </Text>
                <ConnectWalletButton />
              </>
            )}
          </Flex>
        </CardBody>
        {isNew && <CardFooter pool={pool} account={account} />}
      </StyledCardInner>
    </StyledCard>
  )
}

export default PoolCard
