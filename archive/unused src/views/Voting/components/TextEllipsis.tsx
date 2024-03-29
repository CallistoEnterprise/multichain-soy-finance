import styled from 'styled-components'
import { Text } from '@callisto-enterprise/soy-uikit2'

const TextEllipsis = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default TextEllipsis
