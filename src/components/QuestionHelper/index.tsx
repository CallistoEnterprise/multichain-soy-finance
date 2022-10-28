import React from 'react'
import { HelpIcon, useTooltip, Box, BoxProps } from '@callisto-enterprise/soy-uikit2'
import styled from 'styled-components'

interface Props extends BoxProps {
  text: string | React.ReactNode
  ml?: string
}

const QuestionWrapper = styled.div`
  :hover,
  :focus {
    opacity: 0.7;
  }
`

const QuestionHelper: React.FC<Props> = ({ text, ...props }) => {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(text, { placement: 'right-end', trigger: 'hover' })

  return (
    <Box {...props}>
      {tooltipVisible && tooltip}
      <QuestionWrapper ref={targetRef}>
        <HelpIcon color="textSubtle" width="16px" />
      </QuestionWrapper>
    </Box>
  )
}

export default QuestionHelper
