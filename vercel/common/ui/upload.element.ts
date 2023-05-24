import styled from 'styled-components'

export const UploadWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(42)};
  max-height: ${({ theme }) => theme.spacing(42)};
`

export const UploadInput = styled.label`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(42)};
  font-size: ${({ theme }) => theme.spacing(6)};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)};
  border: 2px dashed ${({ theme }) => theme.colors.f400};

  & > p {
    font-weight: 420;
  }

  & > p:nth-child(2) {
    color: ${({ theme }) => theme.colors.f600};
  }
`

export const UploadedImage = styled.div`
  height: 100%;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(42)};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)};
  border: 2px solid ${({ theme }) => theme.colors.f400};

  & > button {
    all: unset;
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.black}50;
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      color: ${({ theme }) => theme.accents.error.e700};
    }
  }
`

export const ImageStyled = styled.img`
  display: flex;
  width: ${({ theme }) => theme.spacing(42)};
  height: ${({ theme }) => theme.spacing(42)};
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
`
