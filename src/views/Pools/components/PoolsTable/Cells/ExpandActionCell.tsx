import React from 'react'
import styled from 'styled-components'
import { Text, ChevronDownIcon } from 'uikit2'
import { useTranslation } from 'contexts/Localization'
import BaseCell from './BaseCell'

interface ExpandActionCellProps {
  expanded: boolean
  isFullLayout: boolean
  isNew?: boolean
}

const StyledCell = styled(BaseCell)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding-right: 12px;
  padding-left: 0px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
    padding-right: 32px;
    padding-left: 8px;
  }
`

const ArrowIcon = styled(ChevronDownIcon)<{ toggled: boolean }>`
  transform: ${({ toggled }) => (toggled ? 'rotate(180deg)' : 'rotate(0)')};
  height: 24px;
`

const TotalStakedCell: React.FC<ExpandActionCellProps> = ({ expanded, isFullLayout, isNew }) => {
  const { t } = useTranslation()
  return (
    <StyledCell role="cell">
      {isFullLayout && (
        <Text color={!isNew ? 'textDisabled' : 'primary'} bold>
          {expanded ? t('Hide') : t('Details')}
        </Text>
      )}
      <ArrowIcon color={!isNew ? 'textDisabled' : 'primary'} toggled={expanded} />
    </StyledCell>
  )
}

export default TotalStakedCell
