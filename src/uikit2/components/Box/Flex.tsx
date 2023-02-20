import styled from 'styled-components'
import { flexbox } from 'styled-system'
import Box from './Box'
import { FlexProps } from './types'

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`

export const MobileVerticalFlex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

export default Flex
