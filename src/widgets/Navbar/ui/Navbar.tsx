import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string

}
export function Navbar({ className }:NavbarProps) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    Main
                </AppLink>

                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    About
                </AppLink>

            </div>
        </div>

    );
}
