export const handleDateFormat = (date) => {
    const newDateFormat = new Date(date)
    const newDate = newDateFormat.toLocaleDateString('es-CL', {timeZone: 'UTC'})
    return newDate
}