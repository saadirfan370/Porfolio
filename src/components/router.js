import React, { useState } from "react";
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';
import { Contact } from "./Navigation/Contact";
import { Button, Result } from 'antd';
import App from "../App"


function AppRouter (){
    const [user, setuser] = useState(false);
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
                <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
              />
            }
            />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;