import styled, { css } from 'styled-components'

interface CartSidebarContainerProps {
  readonly $visible: boolean
}

export const CartSidebarContainer = styled.div<CartSidebarContainerProps>`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 480px;
  width: 100%;
  height: 100%;

  padding-top: 4.5rem;
  padding-inline: 3rem;
  padding-bottom: 3rem;

  background-color: ${({ theme }) => theme.colors.gray800};

  box-shadow: -4px 0px 30px rgba(0, 0, 0, 0.8);

  overflow-y: scroll;

  z-index: 10;

  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);

  ${(props) =>
    props.$visible &&
    css`
      transform: translateX(0);
    `}

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray600};
    border-radius: 8px;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray300};
  }
`

export const CartSidebarCloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;
  background-color: transparent;

  color: ${({ theme }) => theme.colors.gray300};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.gray400};
  }
`

export const CartSidebarProducts = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;

  li {
    display: flex;
    gap: 1.25rem;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 102px;
    height: 93px;

    padding: 0.25rem;

    border-radius: 8px;

    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);

    img {
      object-fit: cover;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.md};

    button {
      align-self: flex-start;

      padding-top: 0.5rem;
      padding-bottom: 0.5rem;

      font-weight: 700;
      color: ${({ theme }) => theme.colors.green500};

      border: 0;
      background-color: transparent;

      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.green400};
      }
    }
  }
`
export const CartSidebarResume = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 2;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-of-type {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`

export const CartSidebarActions = styled.div``
