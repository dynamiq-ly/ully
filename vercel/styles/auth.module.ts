import styled from 'styled-components'

export const StyledAuth = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 3fr 2fr;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

export const StyledAuthForm = styled.div`
  gap: 2rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div:first-child {
    height: 100px;
  }

  & > div:last-child {
    min-height: 100px;
  }
`

export const StyledAuthFormBody = styled.div`
  flex: 1;
  width: 100%;
`

export const StyledForm = styled.form`
  gap: 1rem;
  width: 320px;
  display: flex;
  flex-direction: column;

  & > div:first-child {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    & > p:first-child {
      font-size: 21px;
      font-weight: 600;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    & > p:last-child {
      font-size: 14px;
      color: ${({ theme }) => theme.palette.accent_300};
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`

export const StyledAuthBanner = styled.div`
  padding: 1rem;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.palette.accent_900};

  & > img {
    width: 150%;
    position: absolute;
    right: 0;
    transform: scale(0.97);
  }
`
