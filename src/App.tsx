import styled from 'styled-components';
import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:20px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width:50vw;
  grid-gap: 10px;
  justify-items: center;
  align-items:center;
`
const Box = styled(motion.div)`
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.6);
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Overlay = styled(motion.div)`
  width:100%;
  height:100%;
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`
const Button = styled(motion.button)`
  outline: none;
  border: none;
  background-color: white;
  padding:10px;
  border-radius: 4px;
  cursor: pointer;
`
function App() {
  const [id, setId] = useState<null | string>(null)
  const [circlePosition, setCirclePosition] = useState<null | string>("2")
  const handleSwitch = () => {
    setCirclePosition((prev) => prev === "2" ? "3" : "2")
  }

  return (
    <Wrapper>
      <Grid>
        <Box style={{ originX: 1, originY: 1 }} whileHover={{ scale: 1.1 }}
          onClick={() => setId("1")} key={"1"} layoutId={"1"} />
        <Box>
          {circlePosition === "2" ? <Circle layout layoutId='circle' /> : null}
        </Box>
        <Box>
          {circlePosition === "3" ? <Circle layout layoutId='circle' /> : null}
        </Box>
        <Box style={{ originX: 0, originY: 0 }} whileHover={{ scale: 1.1 }} onClick={() => setId("4")} key={"4"} layoutId={"4"} />
      </Grid>
      <AnimatePresence>
        {id ?
          <Overlay onClick={() => setId(null)} initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}>
            <Box key={id} layoutId={id} layout style={{ width: "400px", backgroundColor: "rgba(255, 255, 255, 1)" }} />
          </Overlay> : null}
      </AnimatePresence>
      <Button animate={{
        color: circlePosition === "3" ? "rgb(255,150,5)" : "rgb(255,0,255)",
        transform: circlePosition === "3" ? "scale(1.2)" : "scale(1)"
      }} onClick={handleSwitch}>Switch</Button>
    </Wrapper >
  )
}

export default App
