import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 100%;
  .rhap_play-status--paused .rhap_progress-bar {
  }
  .rhap_container {
    background-color: ${({ theme }) => theme.palette.primary.main};
    height: 100%;
    box-shadow: none;
  }

  .rhap_container .rhap_progress-section {
    display: none;
  }

  .rhap_stacked .rhap_controls-section .rhap_additional-controls {
    display: none;
  }

  .rhap_button-clear {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .rhap_volume-bar {
    background: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .rhap_volume-indicator {
    background: ${({ theme }) => theme.palette.primary.contrastText};
  }
`

export const MusicInfo = styled.div`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: none;
  flex-direction: column;
  gap: 8px;

  b {
    font-weight: 700;
    font-size: 14px;
    line-height: 17.5px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
    display: flex;
  }
`
