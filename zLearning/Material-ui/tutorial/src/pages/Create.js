import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Create() {
  return (
    <div>
      {/* <Typography 
        variant="h1"
        color="primary"
        align="center"
      >
        Create a new Note
      </Typography> */}
       {/* <Typography 
        noWrap 
        color="secondary"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nihil consequuntur ratione porro adipisci magnam, a minima. Hic cum voluptate illo iste deleniti architecto earum delectus dolor error maiores? Voluptas omnis molestias vitae voluptatem, atque ipsam autem consequuntur rerum alias?
      </Typography> */}
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note 
      </Typography>
    </div>
  )
}
