import {
  Button,
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'

const Card = ({ title, subtitle, image, actions }) => {
  return (
    <CardMUI
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        height='151'
        // sx={{ // 16:9 pt: '56.25%',}}
        image={image}
        title={title}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </CardContent>
      {
        actions
          ? (
            <CardActions>
              {actions}
            </CardActions>
          )
          : null
      }
    </CardMUI>
  )
}

export default Card