import styled from 'styled-components'

/* auth layout */
export const AuthLayoutWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  max-height: 100vh;
  gap: ${({ theme }) => theme.spacing(12)};
`

export const AuthLayoutHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing(32)};
  padding: ${({ theme }) => theme.spacing(0)} ${({ theme }) => theme.spacing(12)};
`

export const AuthLayoutContainer = styled.section`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(12)};
`

export const AuthLayoutFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing(32)};
  padding: ${({ theme }) => theme.spacing(0)} ${({ theme }) => theme.spacing(12)};

  & > p {
    cursor: pointer;
    font-weight: 450;
    font-size: ${({ theme }) => theme.spacing(6)};
    color: ${({ theme }) => theme.colors.f925};
  }
`

/* console layout */
export const ConsoleLayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 300px auto;

  width: 100%;
  height: 100vh;
  max-height: 100vh;
`

export const ConsoleLayoutSidebar = styled.aside`
  height: 100%;
  display: grid;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(12)};
  background: ${({ theme }) => theme.colors.white};
  grid-template-rows: min-content min-content auto min-content;
  filter: drop-shadow(0 0 0.125mm ${({ theme }) => theme.colors.f925});

  & > div:nth-child(3) {
    padding: ${({ theme }) => theme.spacing(12)} 0;
  }
`

export const ConsoleLayoutContainer = styled.section`
  flex: 1;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(12)};
`
