export const validatePhonemeCombination = (phonemes) => {
    // Basic validation: check if phonemes are in the allowed inventory
    const allowedPhonemes = ['a', 'e', 'i', 'o', 'u', 'p', 't', 'k', 's', 'm', 'n']; // Example inventory
    return phonemes.every(phoneme => allowedPhonemes.includes(phoneme));
};

export const getColorForPhoneme = (phoneme, colorMap) => {
    // Retrieve the color representation for a given phoneme
    return colorMap[phoneme] || '#000000'; // Default to black if not found
};