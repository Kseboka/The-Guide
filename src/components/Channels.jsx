import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Channels = ({ channels }) => {
  return (
    <div className='container'>
      {channels.map((channel) => {
        return (
          <Card key={channel.id} className='card'>
            <div className='img-container'>
              <img
                src={channel.image}
                alt={`${channel.name} logo`}
                className='card-image'
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {channel.name}
              </Typography>
              <Typography variant='body1' color='text.primary'>
                Channel: {channel.number}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default Channels
