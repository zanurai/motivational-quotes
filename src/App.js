import React, { useState } from "react";
import ItemQuotes from "./ItemQuotes";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';



const App = () => {
  const [items, setItem] = useState(
    [
      //{ "text": "you can do it", "from": "Janaki rai" },
      //{ "text": "this is very importent work", "from": "Gyanu" }
    ]
  )

  const fetchData = () => {
    return fetch("https://jsonguide.technologychannel.org/quotes.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setItem(data)
      })
  }

  return (

    <>
      <div>

        <Box sx={{ width: '100%' }} >
          <Stack spacing={2}>
            <button onClick={() => fetchData()}>Fetch</button>
            {items.map((item) => <ItemQuotes author={item.from} text={item.text} />)}
          </Stack>
        </Box>
      </div>

    </>
  )
}

export default App


