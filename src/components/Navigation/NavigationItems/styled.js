import styled from 'styled-components'

export const ToolbarContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  text-decoration: none;
  color: white;
`

export const LinksContainer = styled.ol`
  display: inline-flex;
  width: 100%;
  font-size: 0.9em;
  height: 20px;
  justify-content: space-between;
  margin-bottom: 1px;
  margin-right: 50px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: none;
  }
`
