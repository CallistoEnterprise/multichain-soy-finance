import React from 'react'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex, Box } from '@soy-libs/uikit2'
import { useTranslation } from 'contexts/Localization'
import { tokenEarnedPerThousandDollarsCompoundingForPools, getRoi } from 'utils/compoundApyHelpers'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  tokenPrice: number
  apr: number
  displayApr?: string
  linkLabel: string
  linkHref: string
  earningTokenSymbol?: string
  roundingDecimals?: number
  compoundFrequency?: number
  performanceFee?: number
  isFarm?: boolean
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 12px;
`

const GridItem = styled.div``

const GridHeaderItem = styled.div`
  max-width: 180px;
`

const BulletList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
  }

  li::before {
    content: '•';
    margin-right: 4px;
  }

  li::marker {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  tokenPrice,
  apr,
  // displayApr,
  linkLabel,
  linkHref,
  earningTokenSymbol = 'SOY',
  roundingDecimals = 2,
  compoundFrequency = 1,
  performanceFee = 0,
  isFarm = false,
}) => {
  const { t } = useTranslation()
  const oneThousandDollarsWorthOfToken = 1000 / tokenPrice
  
  const tokenEarnedPerThousand1M = tokenEarnedPerThousandDollarsCompoundingForPools({
    numberOfDays: 30,
    farmApr: 0.5 * apr,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })
  const tokenEarnedPerThousand2M = tokenEarnedPerThousandDollarsCompoundingForPools({
    numberOfDays: 60,
    farmApr: 0.6 * apr,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })
  const tokenEarnedPerThousand3M = tokenEarnedPerThousandDollarsCompoundingForPools({
    numberOfDays: 90,
    farmApr: 0.7 * apr,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })
  const tokenEarnedPerThousand4M = tokenEarnedPerThousandDollarsCompoundingForPools({
    numberOfDays: 120,
    farmApr: 0.8 * apr,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })
  const tokenEarnedPerThousand5M = tokenEarnedPerThousandDollarsCompoundingForPools({
    numberOfDays: 150,
    farmApr: 0.9 * apr,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })
  const tokenEarnedPerThousand6M = tokenEarnedPerThousandDollarsCompoundingForPools({
    numberOfDays: 180,
    farmApr: apr,
    tokenPrice,
    roundingDecimals,
    compoundFrequency,
    performanceFee,
  })

  // const customAPR = (365 * getRoi({ amountEarned: tokenEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfToken })).toFixed(2,)

  return (
    <Modal title={t('APR')} onDismiss={onDismiss}>
      <Grid>
        <GridHeaderItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="12px">
            {t('Timeframe')}
          </Text>
        </GridHeaderItem>
        <GridHeaderItem>
          <Text
            textAlign="right"
            fontSize="12px"
            bold
            color="textSubtle"
            textTransform="uppercase"
            mr="12px"
            ml="12px"
            mb="12px"
          >
            {t('APR')}
          </Text>
        </GridHeaderItem>
        <GridHeaderItem>
          <Text textAlign="right" fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="12px">
            {t('%symbol% per $1,000', { symbol: earningTokenSymbol })}
          </Text>
        </GridHeaderItem>
        {/* 1 day row */}
        <GridItem>
          <Text>{t('%num% month', { num: 1 })}</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {/* {getRoi({ amountEarned: tokenEarnedPerThousand1M, amountInvested: oneThousandDollarsWorthOfToken }).toFixed(
              roundingDecimals,
            )} */}
            {(0.5 * apr).toFixed(2)}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{tokenEarnedPerThousand1M}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text>{t('%num% months', { num: 2 })}</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {/* {getRoi({ amountEarned: tokenEarnedPerThousand2M, amountInvested: oneThousandDollarsWorthOfToken }).toFixed(
              roundingDecimals,
            )} */}
            {(0.6 * apr).toFixed(2)}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{tokenEarnedPerThousand2M}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text>{t('%num% months', { num: 3 })}</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {/* {getRoi({
              amountEarned: tokenEarnedPerThousand3M,
              amountInvested: oneThousandDollarsWorthOfToken,
            }).toFixed(roundingDecimals)} */}
            {(0.7 * apr).toFixed(2)}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{tokenEarnedPerThousand3M}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem style={{ maxWidth: '180px' }}>
          <Text>{t('%num% months', { num: 4 })}</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {/* {parseInt(getRoi({
              amountEarned: tokenEarnedPerThousand4M,
              amountInvested: oneThousandDollarsWorthOfToken,
            }).toFixed(roundingDecimals))} */}
            {(0.8 * apr).toFixed(2)}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{(tokenEarnedPerThousand4M)}</Text>
        </GridItem>

        <GridItem style={{ maxWidth: '180px' }}>
          <Text>{t('%num% months', { num: 5 })}</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {/* {parseInt(getRoi({
              amountEarned: tokenEarnedPerThousand5M,
              amountInvested: oneThousandDollarsWorthOfToken,
            }).toFixed(roundingDecimals))} */}
            {(0.9 * apr).toFixed(2)}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{(tokenEarnedPerThousand5M)}</Text>
        </GridItem>

        <GridItem style={{ maxWidth: '180px' }}>
          <Text>{t('%num% months', { num: 6 })}</Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right" mr="12px" ml="12px">
            {/* {parseInt(getRoi({
              amountEarned: tokenEarnedPerThousand6M,
              amountInvested: oneThousandDollarsWorthOfToken,
            }).toFixed(roundingDecimals))} */}
            {apr.toFixed(2)}
            %
          </Text>
        </GridItem>
        <GridItem>
          <Text textAlign="right">{(tokenEarnedPerThousand6M)}</Text>
        </GridItem>
      </Grid>
      
      <Flex justifyContent="center">
        <Box mb="28px" maxWidth="280px" p="4px">
          <BulletList>
            <li>
              <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                {t('Calculated based on current rates.')}
              </Text>
            </li>
            {/* <li>
              <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                {t('Compounding %freq%x daily.', { freq: compoundFrequency.toLocaleString() })}
              </Text>
            </li> */}
            {isFarm && (
              <li>
                <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                  {t('LP rewards: 0.2% trading fees, distributed proportionally among LP token holders.')}
                </Text>
              </li>
            )}
            <li>
              <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                {t(
                  'All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.',
                )}
              </Text>
            </li>
            {performanceFee > 0 && (
              <li>
                <Text mt="14px" fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                  {t('All estimated rates take into account this pool’s %fee%% performance fee', {
                    fee: performanceFee,
                  })}
                </Text>
              </li>
            )}
          </BulletList>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <LinkExternal href={linkHref}>{linkLabel}</LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
