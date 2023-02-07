import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading } from 'uikit2'
import { Token } from 'config/constants/types'
import { TokenPairImage } from 'components/TokenImage'
import FarmTags from '../FarmTable/FarmTags'
import { getCallistoIsAuditedFarm, getCallistoRiskLevelFarm } from 'utils/getCallistoRiskLevel'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
  chainId?: number
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  token,
  quoteToken,
  chainId,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <TokenPairImage variant="inverted" primaryToken={token} secondaryToken={quoteToken} width={64} height={64} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
        <Flex justifyContent="center">
          <FarmTags
            flexDirection="row"
            isCore={multiplier && Number(multiplier.replace('X', '')) >= 5}
            isAudited={getCallistoIsAuditedFarm(quoteToken.address[chainId], token.address[chainId], chainId)}
            riskLevel={getCallistoRiskLevelFarm(quoteToken.address[chainId], token.address[chainId], chainId)}
          />
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
