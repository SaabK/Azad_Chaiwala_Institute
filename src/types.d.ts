export type ButtonPropsType = {
  onClick?: () => void,
  className?: string,
  text: string
}

export type CoursesCardPropsType = {
  words?: number,
  popular?: boolean,
  name: string,
  description: string,
  pr_price: number,
  price: number,
  image: string,
  yellowImage?: string,
  duration: string
}

export type TestimonialPropsType = {
  title: string,
  review: string,
  name: string,
  location: string,
  picture: string
}

export type ParentsReviewsPropsType = {
  name: string,
  picture: string,
  review: string
}

export type CardPropsType = {
  name: string,
  picture: string,
  review: string
}
