import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export function ErrorPage({ className }: ErrorPageProps) {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('An unexpected error')}</p>
            <Button onClick={reloadPage}>
                {t('Refresh the page')}
            </Button>
        </div>
    );
}
