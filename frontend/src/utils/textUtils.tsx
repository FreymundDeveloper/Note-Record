export const convertToNormalText = (inputText: string): string => {
    if (typeof inputText !== 'string')  throw new Error('Need to be a string.');

    const formattedText = inputText.replace(/\b\w/g, (match) => match.toUpperCase())
                                    .replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    return `${formattedText}`;
};

