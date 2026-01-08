'use client'

import styled from 'styled-components'

export const ProductSliderContainer = styled.div`
  min-height: 656px;
`

export const ProductSlide = styled.div`
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    padding: 2rem;

    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, 0.6);

    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    footer {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray100};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green300};
  }
`

export const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.875rem;
  background-color: ${({ theme }) => theme.colors.green500};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`
