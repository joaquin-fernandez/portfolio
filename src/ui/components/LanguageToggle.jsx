import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event, lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <ToggleButtonGroup
            value={i18n.resolvedLanguage}
            exclusive
            onChange={changeLanguage}
            size='small'
            aria-label='language'
        >
            <ToggleButton value='es' aria-label='español'>
                ES
            </ToggleButton>
            <ToggleButton value='en' aria-label='english'>
                EN
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
