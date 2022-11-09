import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import {
  HomeContainer,
  MainHeading,
  CoursesContainer,
  CourseListItem,
  CourseLogoUrl,
  CourseName,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureMessage,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    coursesList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.renderCourseApi()
  }

  renderCourseApi = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const coursesApiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }

    const response = await fetch(coursesApiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      // console.log(data)

      const coursesData = data.courses.map(course => ({
        id: course.id,
        logoUrl: course.logo_url,
        name: course.name,
      }))

      this.setState({coursesList: [...coursesData]})
      this.setState({apiStatus: apiStatusConstants.success})
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessViewCourses = () => {
    const {coursesList} = this.state

    return (
      <CoursesContainer>
        {coursesList.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id}>
            <CourseListItem key={course.id}>
              <CourseLogoUrl src={course.logoUrl} alt={course.name} />
              <CourseName>{course.name}</CourseName>
            </CourseListItem>
          </Link>
        ))}
      </CoursesContainer>
    )
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failureView"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureMessage>
        We cannot seem to find the page you are looking for.
      </FailureMessage>
      <Link to="/">
        <RetryButton>Retry</RetryButton>
      </Link>
    </FailureViewContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderViewsBasedOnAPIStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessViewCourses()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {coursesList} = this.state
    console.log(coursesList)
    return (
      <>
        <Header />
        <HomeContainer>
          <MainHeading>Courses</MainHeading>
          <>{this.renderViewsBasedOnAPIStatus()}</>
        </HomeContainer>
      </>
    )
  }
}

export default HomeRoute
