import React, {Suspense} from "react";
import "./styles/index.scss";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
<Suspense fallback="">
    <Navbar/>
    <div className='content-page'>
        <Sidebar/>
        <AppRouter/>
    </div>
</Suspense>




        </div>
    );
};

export default App;
