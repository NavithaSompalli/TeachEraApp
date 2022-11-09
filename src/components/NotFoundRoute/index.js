import {
  NotFoundContainer,
  NotFoundImage,
  Heading,
  NotFoundErrorMessage,
} from './styledComponents'

const NotFoundRoute = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <NotFoundErrorMessage>
      We are sorry, the page you requested could not be found
    </NotFoundErrorMessage>
  </NotFoundContainer>
)

export default NotFoundRoute
