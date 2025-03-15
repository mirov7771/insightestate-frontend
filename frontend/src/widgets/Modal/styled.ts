import styled from '@emotion/styled'
import {
    SwipeableDrawer,
    SwipeableDrawerProps
} from '@mui/material'
import {Button} from "@/widgets/Button/Button";

export const StyledSwipeableDrawer = styled(
    SwipeableDrawer
)<SwipeableDrawerProps>`
  & .MuiDrawer-paper {
    border-radius: 15px;    
    padding: 5px 2px 20px;
    max-height: 100%;
    margin-bottom: 12vh;
    margin-left: 30vw;
    width: 40%;
  }
`
export const StyledWrapperProgress = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  padding: 12px;
  gap: 8px;
  background: white;
  border-radius: 12px;
`

export const StyledUpperWrapperProgress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 5px;  
`

export const StyledCount = styled.div`
  background-color: white;
  color: black;
  border-radius: 24px;  
  height: 16px;
  width: 16px;
  line-height: 16px;
  padding-right: 4px;
  padding-left: 4px;
`

export const StyledButton = styled(Button)`
  position: relative;
  width: 90%;
  margin-left: auto;
  margin-right: auto;  
`

export const StyledWrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 8px;
  background: white;
  border-radius: 12px;
`
