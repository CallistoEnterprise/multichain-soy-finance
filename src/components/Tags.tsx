import React from 'react'
import {
  Tag,
  VerifiedIcon,
  CommunityIcon,
  RefreshIcon,
  AutoRenewIcon,
  TagProps,
  TimerIcon,
  BlockIcon,
  VoteIcon,
} from 'uikit2'
import { useTranslation } from 'contexts/Localization'
import { AuditTagProps } from 'uikit2/components/Tag/types'
import { getCallistoRiskLevelColor, getCallistoRiskLevelDescription } from '@callisto-enterprise/assetslist'

const CoreTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag
      variant="secondary"
      outline
      startIcon={<VerifiedIcon width={props.scale === 'sm' ? '14px' : '18px'} color="secondary" mr="4px" />}
      {...props}
    >
      {t('Core')}
    </Tag>
  )
}

const AuditTag: React.FC<AuditTagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="secondary" outline {...props} color={getCallistoRiskLevelColor(props.riskLevel)}>
      {t(getCallistoRiskLevelDescription(props.riskLevel).replace('Audit: ', ''))}
    </Tag>
  )
}

const CommunityTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="failure" outline startIcon={<CommunityIcon width="18px" color="failure" mr="4px" />} {...props}>
      {t('Community')}
    </Tag>
  )
}

const DualTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="textSubtle" outline {...props}>
      {t('Dual')}
    </Tag>
  )
}

const ManualPoolTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="secondary" outline startIcon={<RefreshIcon width="18px" color="secondary" mr="4px" />} {...props}>
      {t('Cold Staking')}
    </Tag>
  )
}

const CompoundingPoolTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="success" outline startIcon={<AutoRenewIcon width="18px" color="success" mr="4px" />} {...props}>
      {t('Auto')}
    </Tag>
  )
}

const VoteNowTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="success" startIcon={<VoteIcon width="18px" color="success" mr="4px" />} {...props}>
      {t('Vote Now')}
    </Tag>
  )
}

const SoonTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="binance" startIcon={<TimerIcon width="18px" color="success" mr="4px" />} {...props}>
      {t('Soon')}
    </Tag>
  )
}

const ClosedTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="textDisabled" startIcon={<BlockIcon width="18px" color="textDisabled" mr="4px" />} {...props}>
      {t('Closed')}
    </Tag>
  )
}

export { CoreTag, AuditTag, CommunityTag, DualTag, ManualPoolTag, CompoundingPoolTag, VoteNowTag, SoonTag, ClosedTag }
