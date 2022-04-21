import React from 'react';
import styled from 'styled-components'
import { ETHER, BTTETHER } from '@soy-libs/sdk-multichain'
import { Text } from '@soy-libs/uikit2'
import { AutoColumn } from 'components/Layout/Column'
import { AutoRow } from 'components/Layout/Row'
import { CurrencyLogo } from 'components/Logo'
import useActiveWeb3React from 'hooks/useActiveWeb3React';

const ether = {
    820: ETHER,
    199: BTTETHER
}

const StatusSection = ({currentAmount}) => {
    const { chainId } = useActiveWeb3React()

    return (
        <Container>
            <AutoColumn>
                <AutoRow justify="space-between" >
                    <AutoColumn justify="space-between">
                        <Text fontSize="14px">CLO coins collected during this round</Text>
                        <Text fontSize="24px" color="primary" mt="5px">{`$${currentAmount.toFixed(2)}`}</Text>
                    </AutoColumn>
                    
                    <CurrencyLogo currency={ether[chainId]} size="60px" style={{ marginRight: '8px' }} />
                    
                </AutoRow>
            </AutoColumn>
        </Container>
    )
}

const Container = styled.div`
    border-radius: 16px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.input};
    box-shadow: ${({ theme }) => theme.shadows.inset};
`

export default StatusSection
