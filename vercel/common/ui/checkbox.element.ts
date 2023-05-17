import styled from 'styled-components'

export const CheckboxWrapper = styled.div`
  .form-control {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(5)};
    font-size: ${({ theme }) => theme.spacing(7)};
    font-weight: 450;
    color: ${({ theme }) => theme.colors.f925};
  }

  input[type='checkbox'] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    color: ${({ theme }) => theme.colors.f600};
    width: ${({ theme }) => theme.spacing(10)};
    height: ${({ theme }) => theme.spacing(10)};
    border: 2px solid ${({ theme }) => theme.colors.f600};
    border-radius: ${({ theme }) => theme.spacing(2)};
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
  }

  input[type='checkbox']::before {
    content: '';
    width: ${({ theme }) => theme.spacing(5)};
    height: ${({ theme }) => theme.spacing(5)};
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.f900};
    background: ${({ theme }) => theme.colors.f600};
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }

  input[type='checkbox']:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.f600};
  }
`
