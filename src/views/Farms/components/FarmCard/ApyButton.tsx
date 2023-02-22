import React from 'react'
import BigNumber from 'bignumber.js'
import { IconButton, useModal, CalculateIcon } from 'uikit2'
import ApyCalculatorModal from 'components/ApyCalculatorModal'
import { useTranslation } from 'contexts/Localization'

export interface ApyButtonProps {
  lpLabel?: string
  cakePrice?: BigNumber
  farmApr?: number
  lpApr?: number
  addLiquidityUrl?: string
}

const ApyButton: React.FC<ApyButtonProps> = ({ lpLabel, cakePrice, farmApr, lpApr, addLiquidityUrl }) => {
  const { t } = useTranslation()
  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal
      linkLabel={t('Get %symbol%', { symbol: lpLabel })}
      tokenPrice={cakePrice.toNumber()}
      farmApr={farmApr}
      lpApr={lpApr}
      linkHref={addLiquidityUrl}
      isFarm
    />,
  )

  const handleClickButton = (event): void => {
    event.stopPropagation()
    onPresentApyModal()
  }

  return (
    <IconButton onClick={handleClickButton} variant="text" scale="sm" ml="4px">
      <CalculateIcon width="18px" />
    </IconButton>
  )
}

export default ApyButton
