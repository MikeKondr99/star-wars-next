'use client';

import {useEffect, useState} from "react";

export default function Color({color}: { color: string }) {

    const [colors,setColors] = useState<string[]>([] );

    const isColor = (strColor:string) => {
        let s = new Option().style;
        s.color = strColor;
        return s.color == strColor;
    }

    useEffect(() => {
        let colors = color.split(',').map(x => x.trim()).filter(x => isColor(x));
        setColors(colors);
    },[]);

    return (
        <>{
            colors.map(c => {
                    return <div key={c} style={{backgroundColor: c}} className="h-3 w-3 border border-sky-200"></div>;
                })
        }
        </>
    );
}

