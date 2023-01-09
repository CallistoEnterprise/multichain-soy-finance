import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { MetamaskIcon } from "../../../components/Svg";

interface Props {
  cakePriceUsd?: number;
  addSoyToMetamask?: () => void;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const AddContainer = styled.button`
  border: none;
  width: 26px;
  height: 26px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd, addSoyToMetamask }) => {
  return cakePriceUsd ? (
    <>
      <PriceLink
        href="https://app.soy.finance/#/swap?outputCurrency=0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65"
        target="_blank"
      >
        <PancakeRoundIcon width="18px" mr="8px" />
        <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
      </PriceLink>
      <AddContainer onClick={addSoyToMetamask}>
        <MetamaskIcon color="primary"/>
      </AddContainer>
    </>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
