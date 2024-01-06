export interface MenuItem {
  id: number
  navLabel: string
  navLink: string
  icon: JSX.Element
  down: JSX.Element
  up: JSX.Element
  sub: [{}, {}, {}]
}

export interface sub {
  label: string
  link: string
}

export interface StudentGrade {
  id: number
  name: string
  imgUrl: string
  grade: number
  assignments: number
  activities: number
  rewards: number
  gradingPoints: number
}

export interface GlanceData {
  id: number
  label: string
  total: number
}
