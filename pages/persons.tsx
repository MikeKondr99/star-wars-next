import dynamic from 'next/dynamic';
import {Character, Responce} from "@/interfaces";
import Card from "@/components/card";
import React from "react";
import Prop from "@/components/property";
import Button from "@/components/button";
import Color from "@/components/color";


Persons.getInitialProps = async (_) => {
    const res = await fetch('https://swapi.dev/api/people/');
    const data: Responce<Character> = await res.json();
    console.log(data);
    return {data};
};

export default function Persons({data}: { data: Responce<Character> }) {
    let pages: JSX.Element[] = [];
    let current = 1;
    for (let i = 0; i < Math.ceil(data.count / 10); i++) {
        pages.push(<Button disabled={current===i+1} key={i + 1}>{i + 1}</Button>)
    }
    return (
        <div className="flex gap-2 flex-col">
            <div className="flex flex-row text-white items-baseline gap-0.5">
                <Button>&lt;</Button>
                {pages}
                <Button>&gt;</Button>
            </div>
            {data.results.map(c =>
                <Card key={c.url}>
                    <div className="text-lg">{c.name}</div>
                    <div className="columns-3">
                        <Prop>height: {c.height}</Prop>
                        <Prop>mass: {c.mass}</Prop>
                        <Prop>birth_year: {c.birth_year} </Prop>
                        <Prop>hair_color: {c.hair_color} <Color color={c.hair_color}/></Prop>
                        <Prop>skin_color: {c.skin_color} <Color color={c.skin_color}/></Prop>
                        <Prop>eye_color: {c.eye_color} <Color color={c.eye_color}/></Prop>
                        <Prop>gender: {c.gender}</Prop>
                    </div>
                </Card>)}
        </div>
    );
}
