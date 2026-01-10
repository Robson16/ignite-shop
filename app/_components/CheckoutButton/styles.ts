'use client'

import styled from 'styled-components'

export const CheckoutButtonContainer = styled.button`
  width: 100%;
  margin-top: auto;
  padding: 1.25rem;

  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.green500};
  border: 0;
  border-radius: 8px;

  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.green300};
  }
`
