/**
 * Utility functions for calendar operations
 * Handles ICS file generation for annual reminders
 */
const formatICalDate = (date: Date): string => {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

/**
 * Generate calendar reminder content
 */
export const generateCalendarReminder = (): string => {
  const now = new Date()
  const nextYear = new Date(
    now.getFullYear() + 1,
    now.getMonth(),
    now.getDate()
  )

  const startDate = formatICalDate(nextYear)
  const endDate = formatICalDate(new Date(nextYear.getTime() + 60 * 60 * 1000)) // 1 hour later
  const createdDate = formatICalDate(now)

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ge Fan i Mig//Personuppgifter Rensning//SE
BEGIN:VEVENT
UID:personuppgifter-rensning-${now.getTime()}@gefanimig.se
DTSTART:${startDate}
DTEND:${endDate}
DTSTAMP:${createdDate}
SUMMARY:Rensa personuppgifter från databaser
DESCRIPTION:Dags att rensa dina personuppgifter från svenska databaser igen! Besök https://gefanimig.se för färdiga mallar och länkar.
LOCATION:https://gefanimig.se
BEGIN:VALARM
TRIGGER:-P1D
DESCRIPTION:Påminnelse: Rensa personuppgifter imorgon
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`
}

/**
 * Download calendar reminder
 */
export const downloadCalendarReminder = (): void => {
  if (import.meta.client) {
    const calendarContent = generateCalendarReminder()
    downloadTextFile(
      calendarContent,
      'personuppgifter-rensning-påminnelse.ics',
      'text/calendar;charset=utf-8'
    )
  }
}

/**
 * Download text file
 */
export const downloadTextFile = (
  content: string,
  filename: string,
  mimeType: string = 'text/plain'
): void => {
  if (import.meta.client) {
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
}
