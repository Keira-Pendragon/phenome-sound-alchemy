import React from 'react';

const PhonemeCard = ({ phoneme, ipa, color }) => {
    return (
        <div className="phoneme-card" style={{ backgroundColor: color }}>
            <h2>{phoneme}</h2>
            <p>IPA: {ipa}</p>
        </div>
    );
};

export default PhonemeCard;