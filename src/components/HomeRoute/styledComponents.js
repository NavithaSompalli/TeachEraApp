import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-size: cover;
  padding: 40px;
  padding-left: 30px;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  margin-left: 100px;
`
export const CoursesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 80%;
  list-style-type: none;
  margin-right: 30px;
  margin-left: 70px;
`
export const CourseListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 30px;
  margin-bottom: 70px;
`
export const CourseLogoUrl = styled.img``
export const CourseName = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  margin-left: 30px;
  font-weight: bold;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 300px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: #475569;
`
export const FailureMessage = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-weight: bold;
`
export const RetryButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: #4656a1;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  color: #e8e8e8;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
