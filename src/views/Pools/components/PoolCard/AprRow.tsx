import React from 'react'
import { Flex, TooltipText, IconButton, useModal, CalculateIcon, Skeleton } from 'uikit2' // useTooltip
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import ApyCalculatorModal from 'components/ApyCalculatorModal/poolAPY'
import { Pool } from 'state/types'
import { getAprData } from 'views/Pools/helpers'
import { getAddress } from 'utils/addressHelpers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

interface AprRowProps {
  pool: Pool
  performanceFee?: number
}

const AprRow: React.FC<AprRowProps> = ({ pool, performanceFee = 0 }) => {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()
  const { stakingToken, earningToken, isFinished, apr, earningTokenPrice, isAutoVault, isNew } = pool

  // const tooltipContent = isAutoVault
  //   ? t('APY includes compounding, APR doesn’t. This pool’s SOY is compounded automatically, so we show APY.')
  //   : t(isNew ? 'Max apr is based on staking periods.' : 'Max apr is based on 6 months.')

  // const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, { placement: 'bottom-start' })

  const { apr: earningsPercentageToDisplay, roundingDecimals, compoundFrequency } = getAprData(pool, performanceFee)
  const apyModalLink = stakingToken.address ? `/swap?outputCurrency=${getAddress(stakingToken.address)}` : '/swap'

  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal
      tokenPrice={earningTokenPrice}
      apr={apr}
      linkLabel={t('Get %symbol%', { symbol: stakingToken.symbol })}
      linkHref={apyModalLink}
      earningTokenSymbol={earningToken.symbol}
      roundingDecimals={roundingDecimals}
      compoundFrequency={compoundFrequency}
      performanceFee={performanceFee}
    />,
  )

  return (
    <Flex alignItems="center" justifyContent="space-between">
      {/* {tooltipVisible && tooltip} */}
      <TooltipText>{isAutoVault ? `${t('APY')}:` : `${t('MAX APR')}:`}</TooltipText>
      {isFinished[chainId] || !apr ? (
        <Skeleton width="82px" height="32px" />
      ) : (
        <Flex alignItems="center">
          <Balance
            fontSize="16px"
            isDisabled={isFinished[chainId]}
            value={!isNew ? 0 : earningsPercentageToDisplay}
            decimals={2}
            unit="%"
            bold
          />
          {!isNew && (
            <IconButton onClick={onPresentApyModal} variant="text" scale="sm">
              <CalculateIcon color="textSubtle" width="18px" />
            </IconButton>
          )}
        </Flex>
      )}
    </Flex>
  )
}

export default AprRow
