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
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(12)};
  background: ${({ theme }) => theme.colors.white};
  grid-template-rows: min-content min-content auto min-content;
  border-right: 1px solid ${({ theme }) => theme.colors.f400};

  & > div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(8)};
    padding: ${({ theme }) => theme.spacing(18)} 0;
  }
`

export const ConsoleLayoutContainer = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ConsoleLaoyoutContent = styled.section`
  width: ${({ theme }) => theme.spacing(750)};
  margin: ${({ theme }) => theme.spacing(24)} auto;
`

/* store layout */
export const StoreLayoutWrapper = styled.main`
  width: 100%;
  display: flex;
  height: 100vh;
  min-height: 100vh;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  background: ${({ theme }) => theme.colors.white};
`

export const StoreLayoutHeader = styled.div`
  top: 0;
  display: grid;
  position: sticky;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing(24)};
  padding: 0 ${({ theme }) => theme.spacing(12)};
  min-height: ${({ theme }) => theme.spacing(32)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.f300};
  background: ${({ theme }) => theme.colors.white};
`

export const StoreLayoutLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`

export const StoreLayoutActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(12)};

  & > div {
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};

    & > button {
      padding: ${({ theme }) => theme.spacing(4)};
    }
  }
`

export const StoreLayoutContent = styled.section`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
`
