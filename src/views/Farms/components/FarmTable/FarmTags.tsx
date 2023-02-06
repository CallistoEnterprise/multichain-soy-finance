import React from 'react'
import styled from 'styled-components'
import { AuditTag, CoreTag } from 'components/Tags'
import { AuditRiskLevel } from '@callisto-enterprise/assetslist/dist/types'

export interface FarmTagProps {
  flexDirection?: 'row' | 'column'
  scale?: 'md' | 'sm'
  isCore?: boolean
  isAudited?: boolean
  riskLevel?: AuditRiskLevel
}

const Container = styled.div<{ flexDirection: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.text};
  button {
    width: 20px;
    height: 20px;
    svg {
      path {
        fill: ${({ theme }) => theme.colors.textSubtle};
      }
    }
  }
`

const FarmTags: React.FC<FarmTagProps> = ({ flexDirection = 'row', scale = 'md', isCore, isAudited, riskLevel }) => {
  return (
    <Container flexDirection={flexDirection}>
      {isCore && <CoreTag scale={scale} />}
      {isAudited && <AuditTag scale={scale} riskLevel={riskLevel} />}{' '}
    </Container>
  )
}

export default FarmTags
