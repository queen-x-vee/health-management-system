"use client"

import { useEffect, useState } from "react"

import React from "react";
import LongCard from "../../_components/cards/longCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { useParams } from "next/navigation";

const cards2 = [
  {
    id: 1,
    title: "Card 1",
    content: "Content for Card 1",
    button: "view detailed report",
  },
  {
    id: 2,
    title: "Card 2",
    content: "Content for Card 2",
    button: "view detailed report",
  },
];



const Page = () => {

  const {id} = useParams()

  const [data, setData]  =  useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/medicines/medicine/1`, {headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzAxMTE0ODIzLCJuYmYiOjE3MDExMTQ4MjMsImp0aSI6ImE3MDM3MjRhLWZlY2MtNDQxMy05MzljLTdjNmIzODhkMGE2MSIsImV4cCI6MTcwMTExNTcyMywidHlwZSI6ImFjY2VzcyIsImZyZXNoIjpmYWxzZX0.2cY37GWjdYRjdTyUZ0Ve5J8ZZcjGY4gx2dIA56NimUo',
        'Content-Type': 'application/json'
      }} );
      
      const data = await response.json();
      setData(data.data);
      console.log(data.data);
    };
    fetchData();
  },[] )
  return (
    <div>
      <section className="flex-1 flex-wrap  pt-[35px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px] ">
          {cards2.map((card) => (
            <LongCard key={card.id} card={card} />
          ))}
        </div>
      </section>
      <section className="flex-1 flex-wrap  pt-[35px] ">
        <div className="grid grid-cols-1 gap-[26px] ">
          <Card>
            <CardHeader>
              <CardTitle>{data.medicine_name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Take this medication by mouth with or without food as directed
                by your doctor, usually once daily.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Side Effects</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Dizziness, lightheadedness, drowsiness, nausea, vomiting,
                tiredness, excess saliva/drooling, blurred vision, weight gain,
                constipation, headache, and trouble sleeping may occur. If any
                of these effects persist or worsen, consult your doctor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Page;
