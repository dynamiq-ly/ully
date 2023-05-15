import styled from 'styled-components'

export const LogoutButton = styled.button`
  border: none;
  outline: none;
  background: transparent;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};

  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.spacing(4)};

  & > svg {
    color: ${({ theme }) => theme.colors.f900};
  }

  & > div:nth-child(2) {
    flex: 1;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: baseline;
    justify-content: baseline;

    & > p:first-child {
      font-weight: 450;
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.spacing(8.5)};
    }

    & > p:last-child {
      color: ${({ theme }) => theme.colors.f900};
      font-size: ${({ theme }) => theme.spacing(7)};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.f200};
  }
`
