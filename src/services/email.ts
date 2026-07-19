import { contact } from '../config/portfolio'

export const emailSubject = 'Portfolio inquiry for Josiah Catabay'

export const emailBody = `Hi Josiah,

I found your portfolio and would like to discuss an opportunity or collaboration with you.

Best,
`

const encodedSubject = encodeURIComponent(emailSubject)
const encodedBody = encodeURIComponent(emailBody)

export const defaultMailUrl = `mailto:${contact.email}?subject=${encodedSubject}&body=${encodedBody}`

export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodedSubject}&body=${encodedBody}`
