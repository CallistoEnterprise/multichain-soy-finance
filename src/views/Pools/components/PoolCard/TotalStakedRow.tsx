import React from 'react'
import { Flex, TooltipText } from 'uikit2' // useTooltip
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { Pool } from 'state/types'
import { getBalanceNumber } from 'utils/formatBalance'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

interface TotalStakedRowRowProps {
  pool: Pool
  performanceFee?: number
}

const TotalStakedRow: React.FC<TotalStakedRowRowProps> = ({ pool }) => {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()
  const { stakingToken, totalStaked, isFinished, isAutoVault } = pool

  return (
    <Flex alignItems="center" justifyContent="space-between">
      {/* {tooltipVisible && tooltip} */}
      <TooltipText>{isAutoVault ? `${t('Total Staked')}:` : `${t('Total Staked')}:`}</TooltipText>
      <Flex alignItems="center">
        <Balance
          fontSize="16px "
          isDisabled={isFinished[chainId]}
          value={getBalanceNumber(totalStaked, stakingToken?.decimals)}
          decimals={0}
          unit={` ${stakingToken?.symbol}`}
        />
      </Flex>
    </Flex>
  )
}

export default TotalStakedRow
