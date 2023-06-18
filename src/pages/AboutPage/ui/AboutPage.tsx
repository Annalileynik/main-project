import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('ABOUT SITE')}
        </div>
    );
}

export default AboutPage;
