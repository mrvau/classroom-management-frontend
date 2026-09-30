const DEPARTMENTS = [
  "CS",
  "Math",
  "English",
  "Physics",
  "Chemistry"
]

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept.toLowerCase(),
  label: dept
}))