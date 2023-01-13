import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      {/* <circle opacity="0.25" cx="50.1423" cy="49" r="50" fill="white"/>
      <path d="M47.3565 34.9454C50.3335 29.9283 49.4395 23.4581 45.1813 19.2106L38.7293 12.772C37.3645 11.41 35.1535 11.41 33.7887 12.772L27.1661 19.3799C23.9042 22.635 22.6401 27.4214 23.8667 31.8724C24.0143 32.4061 23.9861 33.1084 23.5903 33.4727C21.0697 35.7923 19.6219 39.0507 19.5067 42.5007C14.2463 44.21 10.6686 49.1377 10.6686 54.7038V64.0494C10.6686 65.9749 12.1499 67.536 14.0794 67.536H23.1886C28.8013 67.536 33.777 64.1005 35.5691 58.9881C36.0118 57.7257 36.2558 56.42 36.2958 55.1023C41.546 53.3938 45.1747 48.4389 45.1747 42.9001C45.1747 41.6819 45.0024 40.4724 44.6612 39.3045C44.5008 38.7546 44.6654 38.1808 45.1004 37.7706C45.9755 36.9441 46.7347 35.9932 47.3565 34.9454ZM22.8908 60.5628C19.9965 60.5628 17.65 58.2213 17.65 55.3329C17.65 52.4445 19.9965 50.103 22.8908 50.103C25.785 50.103 28.1316 52.4445 28.1316 55.3329C28.1316 58.2213 25.785 60.5628 22.8908 60.5628ZM33.3724 48.3597C30.4782 48.3597 28.1316 46.0183 28.1316 43.1298C28.1316 40.2414 30.4782 37.8999 33.3724 37.8999C36.2667 37.8999 38.6133 40.2414 38.6133 43.1298C38.6133 46.0183 36.2667 48.3597 33.3724 48.3597ZM36.8663 32.6701C33.9721 32.6701 31.6255 30.3286 31.6255 27.4402C31.6255 24.5517 33.9721 22.2103 36.8663 22.2103C39.7606 22.2103 42.1071 24.5517 42.1071 27.4402C42.1071 30.3286 39.7606 32.6701 36.8663 32.6701Z" fill="#427916"/>
      <path d="M68.9819 41.7088C72.2808 36.1493 71.2901 28.9797 66.5716 24.273L59.4221 17.1382C57.9097 15.6291 55.4597 15.6291 53.9474 17.1382L46.6088 24.4606C42.9943 28.0675 41.5935 33.3714 42.9527 38.3036C43.1162 38.8949 43.085 39.6732 42.6464 40.0769C39.8533 42.6473 38.249 46.258 38.1214 50.0809C32.2922 51.975 28.3278 57.4354 28.3278 63.6033V73.9592C28.3278 76.0928 29.9693 77.8227 32.1073 77.8227H42.2013C48.4208 77.8227 53.9343 74.0158 55.9202 68.3507C56.4108 66.9519 56.6811 65.505 56.7255 64.0448C62.5433 62.1517 66.5642 56.6611 66.5642 50.5234C66.5642 49.1736 66.3733 47.8333 65.9952 46.5392C65.8175 45.9298 65.9999 45.294 66.4819 44.8395C67.4517 43.9236 68.2929 42.8699 68.9819 41.7088ZM41.8713 70.0957C38.6641 70.0957 36.0639 67.5011 36.0639 64.3004C36.0639 61.0997 38.6641 58.5051 41.8713 58.5051C45.0784 58.5051 47.6787 61.0997 47.6787 64.3004C47.6787 67.5011 45.0784 70.0957 41.8713 70.0957ZM53.4861 56.5733C50.2789 56.5733 47.6787 53.9787 47.6787 50.7781C47.6787 47.5774 50.2789 44.9828 53.4861 44.9828C56.6932 44.9828 59.2935 47.5774 59.2935 50.7781C59.2935 53.9787 56.6932 56.5733 53.4861 56.5733ZM57.3577 39.1875C54.1505 39.1875 51.5503 36.5929 51.5503 33.3922C51.5503 30.1915 54.1505 27.5969 57.3577 27.5969C60.5648 27.5969 63.1651 30.1915 63.1651 33.3922C63.1651 36.5929 60.5648 39.1875 57.3577 39.1875Z" fill="#5D9F29"/>
      <path d="M87.6329 50.6462C91.0122 44.9512 89.9974 37.6067 85.1638 32.7851L77.8399 25.4764C76.2906 23.9304 73.7809 23.9304 72.2317 25.4764L64.7141 32.9773C61.0114 36.6723 59.5764 42.1055 60.9688 47.158C61.1363 47.7638 61.1043 48.561 60.6551 48.9746C57.7938 51.6076 56.1504 55.3064 56.0197 59.2226C50.0483 61.1629 45.9872 66.7564 45.9872 73.0747V83.6832C45.9872 85.8689 47.6687 87.641 49.8589 87.641H60.1991C66.5703 87.641 72.2183 83.7412 74.2526 77.9379C74.7552 76.505 75.032 75.0228 75.0775 73.527C81.0372 71.5877 85.1562 65.9633 85.1562 59.6759C85.1562 58.2931 84.9606 56.9202 84.5733 55.5944C84.3913 54.9702 84.5782 54.3189 85.0719 53.8533C86.0653 52.915 86.927 51.8357 87.6329 50.6462ZM59.861 79.7255C56.5756 79.7255 53.912 77.0676 53.912 73.7889C53.912 70.5101 56.5756 67.8522 59.861 67.8522C63.1464 67.8522 65.81 70.5101 65.81 73.7889C65.81 77.0676 63.1464 79.7255 59.861 79.7255ZM71.7591 65.8733C68.4737 65.8733 65.81 63.2155 65.81 59.9367C65.81 56.6579 68.4737 54.0001 71.7591 54.0001C75.0444 54.0001 77.7081 56.6579 77.7081 59.9367C77.7081 63.2155 75.0444 65.8733 71.7591 65.8733ZM75.7251 48.0634C72.4398 48.0634 69.7761 45.4056 69.7761 42.1268C69.7761 38.848 72.4398 36.1902 75.7251 36.1902C79.0105 36.1902 81.6742 38.848 81.6742 42.1268C81.6742 45.4056 79.0105 48.0634 75.7251 48.0634Z" fill="#88D949"/> */}
      <circle cx="50.1423" cy="50" r="45" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeWidth="4" />
      <circle cx="41.3713" cy="42.4673" r="9.28016" transform="rotate(13.5456 41.3713 42.4673)" fill="#97B629" />
      <ellipse
        cx="37.4258"
        cy="54.8805"
        rx="10.2082"
        ry="9.28016"
        transform="rotate(13.5456 37.4258 54.8805)"
        fill="#97B629"
      />
      <ellipse
        cx="35.4344"
        cy="63.6502"
        rx="7.76971"
        ry="11.0996"
        transform="rotate(28.2072 35.4344 63.6502)"
        fill="#97B629"
      />
      <circle cx="56.6198" cy="45.4929" r="12.2138" fill="#B1D237" />
      <ellipse cx="55.3982" cy="62.592" rx="13.4352" ry="12.2138" fill="#B1D237" />
      <ellipse
        cx="55.5537"
        cy="74.4281"
        rx="10.2259"
        ry="14.6084"
        transform="rotate(14.6616 55.5537 74.4281)"
        fill="#B1D237"
      />
      <ellipse
        cx="55.9216"
        cy="19.2824"
        rx="3.66415"
        ry="9.77107"
        transform="rotate(18.8887 55.9216 19.2824)"
        fill="#88D949"
      />
      <ellipse
        cx="68.9682"
        cy="29.3929"
        rx="2.41698"
        ry="7.44737"
        transform="rotate(73.8516 68.9682 29.3929)"
        fill="#88D949"
      />
      <ellipse
        cx="41.993"
        cy="27.5519"
        rx="2.41698"
        ry="7.44737"
        transform="rotate(127.97 41.993 27.5519)"
        fill="#88D949"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="50.1423" y1="3" x2="50.1423" y2="97" gradientUnits="userSpaceOnUse">
          <stop stopColor="#475222" />
          <stop offset="1" stopColor="#3C4323" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="50.1423" y1="3" x2="50.1423" y2="97" gradientUnits="userSpaceOnUse">
          <stop stopColor="#475222" />
          <stop offset="1" stopColor="#3C4323" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="100" height="100" fill="white" transform="translate(100.142 100) rotate(-180)" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon