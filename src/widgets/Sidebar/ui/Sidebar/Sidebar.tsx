import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import { Button } from "shared/ui/Button/Button";


interface SidebarProps {
    className?:string;

}
export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    function onToggle() {
        setCollapsed(prev=>!prev)
    }
    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]:collapsed},[className])}>
          <Button onClick={onToggle}> Toggle </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>

    );
};