export const formatDate = (dateVariable, options = {
    month: 'long',
    day: 'numeric'
}) => {

    const date = new Date(dateVariable)

    return new Intl.DateTimeFormat('en-US', options).format(date)

}