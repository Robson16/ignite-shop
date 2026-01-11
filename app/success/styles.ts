'use client'

import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 656px;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    color: ${({ theme }) => theme.colors.gray100};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.gray300};
    max-width: 560px;
    text-align: center;
    margin-top: 2rem;
    line-height: 1.4;
  }

  a {
    display: block;
    margin-top: 5rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.green500};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.green300};
    }
  }
`

export const ImagesGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 140px;
  height: 140px;

  margin-top: 4rem;
  padding: 0.25rem;

  border-radius: 50%;
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);

  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.8);

  &:not(:first-child) {
    margin-left: -52px;
  }

  img {
    object-fit: cover;
  }
`
