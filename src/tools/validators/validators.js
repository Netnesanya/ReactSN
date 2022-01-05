export const required = value => (value ? undefined : 'Required')

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength ) return `max lenght is ${maxLength} symbols`;
return undefined
}