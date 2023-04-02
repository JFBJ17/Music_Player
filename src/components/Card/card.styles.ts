import Image from 'next/image'
import styled from 'styled-components'

export const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 22px 15px;
  /* background: linear-gradient(0deg, rgba(167, 0, 0, 0.5), rgba(167, 0, 0, 0.5)),
    url(https://picsum.photos/250); */
  background: ${({ theme }) => `${theme.palette.primary.light}80`};
  background-size: cover;
  background-position: center;
  background-repeat: 'no-repeat';
  color: ${({ theme }) => theme.palette.common.white};
`

export const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 27.5px;
`

export const CardSubtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 17.5px;
`

export const Followers = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12.5px;
  color: ${({ theme }) => theme.palette.primary.dark};
`

export const CardDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20.19px;
`

export const ImageCard = styled(Image)`
  width: 100%;
  height: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
    height: 100%;
  }
`

export const PlayContainer = styled.span<{ size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ size }) => size}px;
  color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;
`
