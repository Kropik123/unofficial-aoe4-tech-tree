export const renderDescription = (description: string) => {
    const normalized = description.replace(/\\n|\/n/g, '\n'); // handle \n or /n
    return normalized.split('\n').map((line, index, arr) => (
        <span key={index}>
            {line}
    {index < arr.length - 1 && <br />}
    </span>
));
}